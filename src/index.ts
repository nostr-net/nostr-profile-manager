import { Event, UnsignedEvent } from 'nostr-tools';
import { generateLogoHero, LoadProfileHome } from './LoadProfileHome';
import { fetchMyContactsProfileEvents, fetchMyProfileEvents } from './fetchEvents';
import { localStorageGetItem, localStorageSetItem } from './LocalStorage';
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
 * Set page loading state with visual indication
 * @param loading Whether the page is loading
 */
const setPageLoading = (loading: boolean): void => {
  isLoading = loading;

  // Update loading indicators in the UI
  const container = document.getElementById('PM-container');
  if (container && loading) {
    // Add loading indicator if not already present
    if (!document.getElementById('page-loading-indicator')) {
      const loadingIndicator = document.createElement('div');
      loadingIndicator.id = 'page-loading-indicator';
      loadingIndicator.setAttribute('aria-busy', 'true');
      loadingIndicator.style.position = 'fixed';
      loadingIndicator.style.top = '10px';
      loadingIndicator.style.right = '10px';
      container.appendChild(loadingIndicator);
    }
  } else if (container && !loading) {
    // Remove loading indicator if present
    const indicator = document.getElementById('page-loading-indicator');
    if (indicator) indicator.remove();
  }
};

/**
 * Load user profile and initialize app
 */
const loadProfile = async () => {
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
      fetchMyProfileEvents(localStorageGetItem('pubkey') as string, () => {}),
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
 * Load the landing page for new users
 */
const LoadLandingPage = () => {
  const aboutcontent = `
    <div class="container">
      <div class="profile-card">
        <div class="hero">
          ${generateLogoHero()}
          <div id="herocontent">
            <h1 id="title-text">Nostr Profile Manager</h1>
            <p id="subtitle-text">Secure / Backup / Refine / Delete</p>
            <a id="loadextension" href="#" onclick="return false;" role="button" class="contrast">Initialize Connection</a>
          </div>
        </div>
      </div>
      
      <div class="section-card">
        <div class="grid">
          <article>
            <h4>> Backup</h4>
            <p class="code-font">Store profile data in local storage. Protect against relay failures.</p>
          </article>
          <article>
            <h4>> Refine</h4>
            <p class="code-font">Optimize your profile. Configure relays. Manage contact list.</p>
          </article>
          <article>
            <h4>> Restore</h4>
            <p class="code-font">Recover previous profile states. View backup history.</p>
          </article>
          <article>
            <h4>> Delete</h4>
            <p class="code-font">Remove unwanted data. Broadcast deletion requests to the network.</p>
          </article>
        </div>
      </div>
    </div>
  `;

  const container = document.getElementById('PM-container');
  if (!container) return;

  container.innerHTML = aboutcontent;

  // Apply typing effect to title and subtitle
  setTimeout(() => {
    const titleElement = document.getElementById('title-text');
    const subtitleElement = document.getElementById('subtitle-text');

    if (titleElement) {
      typeWriter(titleElement, 'Nostr Profile Manager', 50);

      setTimeout(() => {
        if (subtitleElement) {
          typeWriter(subtitleElement, 'Secure / Backup / Refine / Delete', 30);
        }
      }, 2000);
    }
  }, 500);

  const loadButton = document.getElementById('loadextension');
  if (loadButton) {
    loadButton.onclick = async (ev) => {
      ev.preventDefault();

      if (window.nostr) {
        try {
          setPageLoading(true);
          loadButton.setAttribute('aria-busy', 'true');
          loadButton.textContent = 'Connecting...';

          const pubkey = await window.nostr.getPublicKey();
          localStorageSetItem('pubkey', pubkey);

          loadProfile();
        } catch (error) {
          console.error('Error connecting to Nostr extension:', error);

          loadButton.removeAttribute('aria-busy');
          loadButton.textContent = 'Connection Failed. Retry';
        } finally {
          setPageLoading(false);
        }
      } else {
        loadButton.outerHTML = `
          <div class="error-message">
            <p class="code-font">NIP-07 browser extension not detected.</p>
            <p class="code-font">Install an extension like nos2x to proceed.</p>
            <a href="https://github.com/nostr-protocol/nips/blob/master/07.md" role="button" class="secondary code-font">Get Browser Extension</a>
          </div>
        `;
      }
    };
  }
};

/**
 * Initialize the application
 */
const load = async () => {
  // Check if user is logged in
  if (!localStorageGetItem('pubkey')) {
    LoadLandingPage();
  } else {
    loadProfile();
  }
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
