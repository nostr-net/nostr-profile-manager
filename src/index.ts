import { Event, UnsignedEvent } from 'nostr-tools';
import { LoadProfileHome } from './LoadProfileHome';
import { fetchMyContactsProfileEvents, fetchMyProfileEvents } from './fetchEvents';
import { localStorageGetItem } from './LocalStorage';
import { LoadMetadataPage } from './LoadMetadataPage';
import LoadContactsPage from './LoadContactsPage';
import LoadRelaysPage from './LoadRelaysPage';
import { LoadBackupPage } from './LoadBackupPage';
import LoadDeletePage from './LoadDeletePage';
import Logout from './Logout';
import { closeAllConnections } from './RelayManagement';

declare global {
  interface Window {
    nostr?: {
      getPublicKey: () => Promise<string>;
      signEvent: (event: UnsignedEvent) => Promise<Event>;
    };
  }
}

// Track page loading state
let isLoading = false;

/**
 * Set page loading state
 * @param loading Whether the page is loading
 */
const setPageLoading = (loading: boolean): void => {
  isLoading = loading;
};

/**
 * Load user profile and initialize app
 */
const loadProfile = async () => {
  const pubkey = localStorageGetItem('pubkey');

  // If no user is logged in, show login interface
  if (!pubkey) {
    LoadProfileHome(); // This will now handle the no-user case
    return;
  }

  setPageLoading(true);

  try {
    // Load profile page (in loading mode)
    LoadProfileHome();

    // Enable navigation before data loads for better perceived performance
    const mainnav = document.getElementById('mainnav');
    if (mainnav) mainnav.classList.remove('inactive');

    // Set up navigation handlers
    const setupNav = (id: string, handler: () => void) => {
      const element = document.getElementById(id);
      if (element) {
        element.onclick = (e) => {
          e.preventDefault();
          if (!isLoading) handler();
        };
      }
    };

    setupNav('navhome', LoadProfileHome);
    setupNav('navmetadata', LoadMetadataPage);
    setupNav('navcontacts', LoadContactsPage);
    setupNav('navrelays', LoadRelaysPage);
    setupNav('navbackup', LoadBackupPage);
    setupNav('navdelete', LoadDeletePage);
    setupNav('navlogout', () => {
      // Close connections before logout
      closeAllConnections();
      Logout();
    });

    // Load profile data in parallel where possible
    const loadingTasks = [
      fetchMyProfileEvents(pubkey, () => {}),
    ];

    // Wait for profile data
    await Promise.all(loadingTasks);

    // Update UI with loaded data
    LoadProfileHome();

    // Continue loading contact data in background
    fetchMyContactsProfileEvents().catch((err) => console.error('Error fetching contacts profile events:', err));
  } catch (error) {
    console.error('Error loading profile:', error);

    // Show error message
    const container = document.getElementById('PM-container');
    if (container) {
      container.innerHTML = `
        <div class="container">
          <h3>Error Loading Profile</h3>
          <p>There was an error loading your profile. Please try again.</p>
          <button onclick="window.location.reload()">Reload</button>
        </div>
      `;
    }
  } finally {
    setPageLoading(false);
  }
};

/**
 * Initialize the application
 */
const load = async () => {
  // Always load the profile view, which will handle login state
  loadProfile();
};

// Initialize on page load
if (document.getElementById('PM-container') !== null) {
  load();
} else {
  document.addEventListener('DOMContentLoaded', () => load());
}

// Add event listener for page unload to clean up connections
window.addEventListener('beforeunload', () => {
  closeAllConnections();
});
