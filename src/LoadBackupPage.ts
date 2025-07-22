import { Event } from 'nostr-tools';
import { localStorageGetItem } from './LocalStorage';
import { requestEventsFromRelays, publishEventToRelay } from './RelayManagement';
import { fetchCachedMyProfileEvent, fetchCachedMyProfileEventHistory } from './fetchEvents';

// Cache for backup events
let backupEventsCache: Event[] = [];
let isBackupInProgress = false;
let isRepublishInProgress = false;

/**
 * Get all relays from cached profile
 * @returns Array of relay URLs
 */
const getAllRelays = (): string[] => {
  const e = fetchCachedMyProfileEvent(10002);
  const myrelays = !e ? [] : e.tags.filter((t) => t[0] === 'r').map((r) => r[1]);

  // Return comprehensive list of relays
  return [...new Set([
    ...myrelays,
    'wss://hist.nostr.land',
    'wss://relay.damus.io',
    'wss://nostr-pub.wellorder.net',
    'wss://purplepag.es',
    'wss://relay.nos.social',
    'wss://relay.nostr.band',
    'wss://relay.snort.social',
    'wss://nostr.mutinywallet.com',
    'wss://nos.lol',
    'wss://relay.current.fyi',
    'wss://eden.nostr.land',
    'wss://nostr.wine',
  ])];
};

/**
 * Fetch all events for the user from all relays
 * @param pubkey User's public key
 * @returns Promise that resolves when all events are fetched
 */
const fetchAllUserEvents = async (pubkey: string): Promise<Event[]> => {
  const allEvents: Event[] = [];
  const seenEventIds = new Set<string>();
  const relays = getAllRelays();

  // Fetch all kinds of events for the user
  const eventKinds = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 40, 41, 42, 43, 44,
    1984, 9735, 10000, 10002, 30000, 30001, 30023,
  ];

  await requestEventsFromRelays([pubkey], (event: Event) => {
    if (!seenEventIds.has(event.id)) {
      seenEventIds.add(event.id);
      allEvents.push(event);
    }
  }, relays, eventKinds);

  return allEvents.sort((a, b) => b.created_at - a.created_at);
};

/**
 * Create and download backup archive
 * @param events Array of events to backup
 */
const downloadBackupArchive = (events: Event[]) => {
  const backup = {
    timestamp: Date.now(),
    pubkey: localStorageGetItem('pubkey'),
    total_events: events.length,
    events_by_kind: events.reduce((acc, event) => {
      acc[event.kind] = (acc[event.kind] || 0) + 1;
      return acc;
    }, {} as { [kind: number]: number }),
    events,
  };

  const jsonStr = JSON.stringify(backup, null, 2);
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(jsonStr)}`);
  element.setAttribute('download', `nostr-backup-${backup.pubkey?.substring(0, 8)}-${Date.now()}.json`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

/**
 * Get selected event kinds from checkboxes
 */
const getSelectedEventKinds = (): number[] => {
  const selectedKinds: number[] = [];
  const checkboxes = document.querySelectorAll('.event-kind-checkbox:checked') as NodeListOf<HTMLInputElement>;

  checkboxes.forEach((checkbox) => {
    const kind = parseInt(checkbox.value, 10);
    if (!Number.isNaN(kind)) {
      selectedKinds.push(kind);
    }
  });

  return selectedKinds;
};

/**
 * Republish selected cached events to all relays
 */
const republishSelectedEvents = async (): Promise<void> => {
  const selectedKinds = getSelectedEventKinds();

  if (selectedKinds.length === 0) {
    const statusEl = document.getElementById('republish-status');
    if (statusEl) {
      statusEl.innerHTML = '⚠ Please select at least one event type to republish.';
    }
    return;
  }

  const allCachedEvents: Event[] = [];

  // Get all profile events
  [0, 2, 3, 10002].forEach((kind) => {
    const history = fetchCachedMyProfileEventHistory(kind as 0 | 2 | 3 | 10002);
    if (history) {
      allCachedEvents.push(...history);
    }
  });

  // Add backup events if available
  allCachedEvents.push(...backupEventsCache);

  // Filter events by selected kinds
  const filteredEvents = allCachedEvents.filter((event) => selectedKinds.includes(event.kind));

  // Remove duplicates
  const uniqueEvents = Array.from(
    new Map(filteredEvents.map((event) => [event.id, event])).values(),
  );

  const relays = getAllRelays();
  let successCount = 0;
  const totalCount = uniqueEvents.length;

  const statusEl = document.getElementById('republish-status');

  await Promise.allSettled(
    uniqueEvents.map(async (event, index) => {
      try {
        // Add progressive delay
        await new Promise((resolve) => {
          setTimeout(resolve, index * 50);
        });

        const success = await publishEventToRelay(event, relays);
        if (success) successCount += 1;

        if (statusEl) {
          statusEl.innerHTML = `Republishing... ${successCount}/${totalCount} events published`;
        }

        return success;
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error republishing event:', event.id, error);
        return false;
      }
    }),
  );

  if (statusEl) {
    statusEl.innerHTML = `Republishing complete! ${successCount}/${totalCount} events published successfully.`;
  }
};

/**
 * Load the backup page
 */
export const LoadBackupPage = () => {
  const pubkey = localStorageGetItem('pubkey');
  if (!pubkey) return;

  const container = document.getElementById('PM-container');
  if (!container) return;

  container.innerHTML = `
    <div class="container">
      <div class="profile-card">
        <div class="hero">
          <h1>Backup & Republish</h1>
          <p>Backup all your Nostr data or republish your events to all relays</p>
        </div>
        
        <div class="section-card">
          <h3>Backup All Data</h3>
          <p>Download a complete backup of all your Nostr events from all relays. This includes notes, profile data, contacts, relays, and more.</p>
          <div class="grid">
            <button id="backup-button" class="contrast">
              Start Backup
            </button>
            <div id="backup-status" class="status-text"></div>
          </div>
        </div>
        
        <div class="section-card">
          <h3>Republish Events</h3>
          <p>Select which types of events to republish to all your current relays.</p>
          
          <div class="event-kinds-selection">
            <fieldset>
              <legend>Profile Data</legend>
              <label><input type="checkbox" class="event-kind-checkbox" value="0" checked> Metadata (profile info)</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="10002" checked> Relay List</label>
            </fieldset>
            
            <fieldset>
              <legend>Social Content</legend>
              <label><input type="checkbox" class="event-kind-checkbox" value="1" checked> Notes (posts)</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="3"> Contacts (following list)</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="6" checked> Reposts</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="7" checked> Reactions (likes)</label>
            </fieldset>
            
            <fieldset>
              <legend>Communication</legend>
              <label><input type="checkbox" class="event-kind-checkbox" value="4"> Direct Messages</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="40"> Channel Creation</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="41"> Channel Metadata</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="42"> Channel Messages</label>
            </fieldset>
            
            <fieldset>
              <legend>Other</legend>
              <label><input type="checkbox" class="event-kind-checkbox" value="5" checked> Event Deletion</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="8" checked> Badge Awards</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="1984" checked> Reports</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="9735" checked> Zap Requests</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="30000" checked> Follow Sets</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="30001" checked> Generic Lists</label>
              <label><input type="checkbox" class="event-kind-checkbox" value="30023" checked> Long-form Articles</label>
            </fieldset>
          </div>
          
          <div class="republish-controls">
            <div class="grid">
              <div>
                <button id="select-all-kinds" class="outline">Select All</button>
                <button id="select-none-kinds" class="outline">Select None</button>
              </div>
              <button id="republish-button" class="secondary">
                Republish Selected Events
              </button>
            </div>
            <div id="republish-status" class="status-text"></div>
          </div>
        </div>
        
        <div class="section-card">
          <h3>Current Cache Info</h3>
          <div id="cache-info">
            <p>Profile events: ${(fetchCachedMyProfileEventHistory(0)?.length || 0) + (fetchCachedMyProfileEventHistory(2)?.length || 0) + (fetchCachedMyProfileEventHistory(3)?.length || 0) + (fetchCachedMyProfileEventHistory(10002)?.length || 0)}</p>
            <p>Backup events: ${backupEventsCache.length}</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Setup backup button
  const backupButton = document.getElementById('backup-button');
  if (backupButton) {
    backupButton.onclick = async () => {
      if (isBackupInProgress) return;

      isBackupInProgress = true;
      backupButton.setAttribute('aria-busy', 'true');
      backupButton.setAttribute('disabled', '');
      backupButton.innerHTML = 'Fetching Events...';

      const statusEl = document.getElementById('backup-status');
      if (statusEl) statusEl.innerHTML = 'Connecting to relays and fetching all your events...';

      try {
        const allEvents = await fetchAllUserEvents(pubkey);
        backupEventsCache = allEvents;

        if (statusEl) {
          statusEl.innerHTML = `Found ${allEvents.length} events. Creating archive...`;
        }

        backupButton.innerHTML = 'Downloading...';
        downloadBackupArchive(allEvents);

        if (statusEl) {
          statusEl.innerHTML = `✓ Backup complete! Downloaded ${allEvents.length} events.`;
        }

        backupButton.innerHTML = 'Backup Complete';
        setTimeout(() => {
          backupButton.innerHTML = 'Start Backup';
          backupButton.removeAttribute('disabled');
        }, 3000);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Backup error:', error);
        if (statusEl) {
          statusEl.innerHTML = '✗ Backup failed. Please try again.';
        }
        backupButton.innerHTML = 'Backup Failed - Retry';
        backupButton.removeAttribute('disabled');
      } finally {
        isBackupInProgress = false;
        backupButton.removeAttribute('aria-busy');
      }
    };
  }

  // Setup republish button
  const republishButton = document.getElementById('republish-button');
  if (republishButton) {
    republishButton.onclick = async () => {
      if (isRepublishInProgress) return;

      // eslint-disable-next-line no-alert, no-restricted-globals
      if (!confirm('This will republish all your cached events to all your relays. Continue?')) {
        return;
      }

      isRepublishInProgress = true;
      republishButton.setAttribute('aria-busy', 'true');
      republishButton.setAttribute('disabled', '');
      republishButton.innerHTML = 'Starting Republish...';

      try {
        await republishSelectedEvents();
        republishButton.innerHTML = 'Republish Complete';
        setTimeout(() => {
          republishButton.innerHTML = 'Republish Selected Events';
          republishButton.removeAttribute('disabled');
        }, 3000);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Republish error:', error);
        const statusEl = document.getElementById('republish-status');
        if (statusEl) {
          statusEl.innerHTML = '✗ Republish failed. Please try again.';
        }
        republishButton.innerHTML = 'Republish Selected - Retry';
        republishButton.removeAttribute('disabled');
      } finally {
        isRepublishInProgress = false;
        republishButton.removeAttribute('aria-busy');
      }
    };
  }

  // Setup select all/none buttons
  const selectAllButton = document.getElementById('select-all-kinds');
  if (selectAllButton) {
    selectAllButton.onclick = () => {
      const checkboxes = document.querySelectorAll('.event-kind-checkbox') as NodeListOf<HTMLInputElement>;
      checkboxes.forEach((checkbox) => {
        // eslint-disable-next-line no-param-reassign
        checkbox.checked = true;
      });
    };
  }

  const selectNoneButton = document.getElementById('select-none-kinds');
  if (selectNoneButton) {
    selectNoneButton.onclick = () => {
      const checkboxes = document.querySelectorAll('.event-kind-checkbox') as NodeListOf<HTMLInputElement>;
      checkboxes.forEach((checkbox) => {
        // eslint-disable-next-line no-param-reassign
        checkbox.checked = false;
      });
    };
  }
};
