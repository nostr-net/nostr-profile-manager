import { Event, UnsignedEvent } from 'nostr-tools';
import { generateLogoHero, LoadProfileHome } from './LoadProfileHome';
import { fetchMyContactsProfileEvents, fetchMyProfileEvents } from './fetchEvents';
import { localStorageGetItem, localStorageSetItem } from './LocalStorage';
import { LoadMetadataPage } from './LoadMetadataPage';
import LoadContactsPage from './LoadContactsPage';
import LoadRelaysPage from './LoadRelaysPage';
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
    fetchMyContactsProfileEvents().catch(err => 
      console.error('Error fetching contacts profile events:', err)
    );
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
      <div class="hero grid">
        ${generateLogoHero()}
        <div id="herocontent">
          <h1>Nostr Profile Manager</h1>
          <p>Backup /&nbsp;Refine /&nbsp;Restore /&nbsp;Delete profile events</p>
          <a id="loadextension" href="#" onclick="return false;" role="button" class="contrast">Load My Profile</a>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="grid">
        <article>
          <h5>Backup</h5>
          <p>Save your profile in your offline browser data. Backup all your notes. Download in a zip.</p>
        </article>
        <article>
          <h5>Refine</h5>
          <p>Perfect your profile. Refine your relays. Clean up your contacts.</p>
        </article>
        <article>
          <h5>Restore</h5>
          <p>View profile backups and restore your favourate</p>
        </article>
        <article>
          <h5>Delete</h5>
          <p>Securely remove unwanted events. Publish deletion requests to your relays.</p>
        </article>
      </div>
    </div>
  `;
  
  const container = document.getElementById('PM-container');
  if (!container) return;
  
  container.innerHTML = aboutcontent;
  
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
          loadButton.textContent = 'Error connecting. Try again';
        } finally {
          setPageLoading(false);
        }
      } else {
        loadButton.outerHTML = `
          <p>You need a NIP-07 browser extension like nos2x to use this webapp.</p>
          <a href="https://github.com/nostr-protocol/nips/blob/master/07.md" role="button" class="contrast">Get Browser Extension</a>
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