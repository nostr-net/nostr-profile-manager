import { Event } from 'nostr-tools';
import { sanitize } from 'isomorphic-dompurify';
import {
  fetchCachedMyProfileEventHistory,
  fetchMyProfileEvents,
  publishEvent,
  submitUnsignedEvent
} from './fetchEvents';
import { localStorageGetItem } from './LocalStorage';
import * as timeago from 'timeago.js';

/**
 * LoadDeletePage handles the UI and functionality for deleting Nostr events
 * It allows users to view their events and publish deletion requests (kind 5 events)
 */

const generateEventListItem = (event: Event): string => {
  // Format the event content for display
  let displayContent: string;
  
  try {
    // For kind 0 events, display the name field from content JSON
    if (event.kind === 0) {
      const content = JSON.parse(event.content);
      displayContent = `Profile: ${content.name || 'Unnamed'}`;
    } else if (event.kind === 3) {
      // For kind 3 (contacts) events, show the number of contacts
      displayContent = `Contacts: ${event.tags.length} connection${event.tags.length !== 1 ? 's' : ''}`;
    } else if (event.kind === 10002) {
      // For kind 10002 (relay list) events, show the number of relays
      displayContent = `Relays: ${event.tags.length} relay${event.tags.length !== 1 ? 's' : ''}`;
    } else if (event.content.length > 0) {
      // For other events with content, show a snippet
      displayContent = event.content.length > 50 
        ? `${sanitize(event.content.substring(0, 50))}...` 
        : sanitize(event.content);
    } else {
      // For events without content, show a generic label
      displayContent = `Event (kind: ${event.kind})`;
    }
  } catch (e) {
    // Fallback if there's an error parsing the content
    displayContent = `Event (kind: ${event.kind})`;
  }

  // Return an HTML item for this event
  return `
    <div class="event-item" data-event-id="${event.id}">
      <div class="event-header">
        <span class="event-kind">Kind: ${event.kind}</span>
        <span class="event-date">${timeago.format(event.created_at * 1000)}</span>
      </div>
      <div class="event-content">${displayContent}</div>
      <div class="event-id"><small>ID: ${event.id}</small></div>
      <div class="event-actions">
        <button id="delete-btn-${event.id}" class="secondary outline">Delete Event</button>
      </div>
    </div>
  `;
};

const generateEventList = (events: Event[]): string => {
  if (!events || events.length === 0) {
    return '<p>No events found.</p>';
  }

  // Sort events by created_at timestamp in descending order (newest first)
  const sortedEvents = [...events].sort((a, b) => b.created_at - a.created_at);
  
  // Generate the list of events
  return `
    <div class="event-list">
      ${sortedEvents.map(generateEventListItem).join('')}
    </div>
  `;
};

const generateDeletePage = (events: Event[]): string => {
  return `
    <div class="container">
      <h3>Delete Events</h3>
      <p>Select events to delete or enter an event ID to delete a specific event. This will publish a deletion request (kind 5) to your relays.</p>
      
      <!-- New section for deleting events by ID -->
      <div class="delete-by-id-section">
        <h4>Delete Event by ID</h4>
        <div class="grid">
          <input type="text" id="custom-event-id" placeholder="Enter the event ID (64 character hex)" />
          <button id="delete-custom-event-btn" class="secondary">Delete by ID</button>
        </div>
        <small>Note: You can only delete events that you authored.</small>
      </div>
      
      <h4>Your Known Events</h4>
      <div id="delete-event-list">
        ${generateEventList(events)}
      </div>
      <div id="delete-status"></div>
    </div>
  `;
};

/**
 * Validates that an input string is a valid event ID (64 character hex)
 */
const isValidEventId = (eventId: string): boolean => {
  return /^[0-9a-f]{64}$/i.test(eventId);
};

/**
 * Creates and submits a Nostr deletion event (kind 5)
 * @param eventId - ID of the event to delete
 * @param elementId - ID of the button element that triggered the deletion
 */
const createAndSubmitDeletionEvent = async (eventId: string, elementId: string): Promise<boolean> => {
  // Create an unsigned kind 5 deletion event
  const unsignedEvent = {
    kind: 5,
    pubkey: localStorageGetItem('pubkey') as string,
    created_at: Math.floor(Date.now() / 1000),
    content: '', // Optional deletion reason could be added here
    tags: [
      ['e', eventId] // The event to delete
    ]
  };

  // Use the existing submitUnsignedEvent function to sign and publish
  return await submitUnsignedEvent(
    unsignedEvent,
    elementId,
    'Deleted'
  );
};

/**
 * Adds click event listeners to delete buttons and the custom delete button
 */
const setupDeleteButtons = (events: Event[]): void => {
  // Setup delete buttons for listed events
  events.forEach(event => {
    const deleteBtn = document.getElementById(`delete-btn-${event.id}`) as HTMLButtonElement;
    if (deleteBtn) {
      deleteBtn.onclick = async () => {
        // Display confirmation dialog
        if (confirm(`Are you sure you want to delete this event? This action cannot be undone.`)) {
          const success = await createAndSubmitDeletionEvent(event.id, `delete-btn-${event.id}`);
          
          if (success) {
            // Update the status area with success message
            const statusDiv = document.getElementById('delete-status') as HTMLDivElement;
            statusDiv.innerHTML = `
              <div class="success-message">
                <p>Deletion event for event ${event.id.substring(0, 8)}... has been published.</p>
                <p>Note that it may take some time for relays to process the deletion request.</p>
              </div>
            `;
          }
        }
      };
    }
  });
  
  // Setup the custom delete button
  const customDeleteBtn = document.getElementById('delete-custom-event-btn') as HTMLButtonElement;
  if (customDeleteBtn) {
    customDeleteBtn.onclick = async () => {
      const eventIdInput = document.getElementById('custom-event-id') as HTMLInputElement;
      const eventId = eventIdInput.value.trim();
      const statusDiv = document.getElementById('delete-status') as HTMLDivElement;
      
      // Validate the event ID
      if (!isValidEventId(eventId)) {
        statusDiv.innerHTML = `
          <div class="error-message">
            <p>Invalid event ID format. Event IDs must be 64 hexadecimal characters.</p>
          </div>
        `;
        return;
      }
      
      // Display confirmation dialog
      if (confirm(`Are you sure you want to delete event ${eventId.substring(0, 8)}...? This action cannot be undone.`)) {
        const success = await createAndSubmitDeletionEvent(eventId, 'delete-custom-event-btn');
        
        if (success) {
          // Show success message
          statusDiv.innerHTML = `
            <div class="success-message">
              <p>Deletion event for event ${eventId.substring(0, 8)}... has been published.</p>
              <p>Note that it may take some time for relays to process the deletion request.</p>
            </div>
          `;
          // Clear the input field
          eventIdInput.value = '';
        } else {
          // Show error message
          statusDiv.innerHTML = `
            <div class="error-message">
              <p>Failed to publish deletion event. Please make sure you have permission to delete this event.</p>
            </div>
          `;
        }
      }
    };
  }
};

/**
 * Gets all events that the user has authored
 */
const getAllUserEvents = (): Event[] => {
  // Get events from multiple kinds
  const kind0Events = fetchCachedMyProfileEventHistory(0) || [];
  const kind3Events = fetchCachedMyProfileEventHistory(3) || [];
  const kind10002Events = fetchCachedMyProfileEventHistory(10002) || [];
  
  // Combine all events
  return [...kind0Events, ...kind3Events, ...kind10002Events];
};

/**
 * Main function to load the delete page
 */
const LoadDeletePage = async (): Promise<void> => {
  const container = document.getElementById('PM-container') as HTMLElement;
  
  // First, ensure we've fetched the latest events
  const pubkey = localStorageGetItem('pubkey');
  if (!pubkey) {
    container.innerHTML = '<p>No public key found. Please log in first.</p>';
    return;
  }
  
  // Show loading state
  container.innerHTML = `
    <div class="container">
      <h3>Delete Events</h3>
      <p aria-busy="true">Loading your events...</p>
    </div>
  `;

  // Fetch latest events from relays
  await fetchMyProfileEvents(pubkey, () => {});
  
  // Get all user events
  const allEvents = getAllUserEvents();
  
  // Render the delete page
  container.innerHTML = generateDeletePage(allEvents);
  
  // Set up delete buttons
  setupDeleteButtons(allEvents);
};

export default LoadDeletePage;