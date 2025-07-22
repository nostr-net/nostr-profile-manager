import { Event, nip05, nip19 } from 'nostr-tools';
import { sanitize } from 'isomorphic-dompurify';
import {
  fetchCachedMyProfileEvent,
  fetchCachedProfileEvent,
  fetchProfileEvent,
  getContactName,
  isUserMyContact,
  submitUnsignedEvent,
} from './fetchEvents';
import { Kind3Event, loadBackupHistory } from './LoadHistory';
import { localStorageGetItem } from './LocalStorage';

// Constants
const DEBOUNCE_DELAY = 300; // ms

// Cache for nip05 lookups to reduce network calls
const nip05cache: { [nip05Search: string]: string | null } = {};
const nip05Searching = '';

// In-memory DOM cache to reduce element lookups
const domCache: { [id: string]: HTMLElement } = {};

/**
 * Get a cached DOM element or query it and cache the result
 * @param id Element ID
 * @returns HTML element or null if not found
 */
const getElement = (id: string): HTMLElement | null => {
  if (!domCache[id]) {
    const element = document.getElementById(id);
    if (element) domCache[id] = element;
    else return null;
  }
  return domCache[id];
};

/**
 * Debounce a function to limit how often it runs
 * @param func Function to debounce
 * @param wait Wait time in ms
 * @returns Debounced function
 */
const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function (...args: any[]) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
};

/**
 * Generate HTML for contact details
 * @param pubkey Public key of contact
 * @returns HTML string for contact details
 */
const generateContactDetails = (pubkey: string): string => {
  const e = fetchCachedProfileEvent(pubkey, 0);
  if (!e) {
    return `
      <article>
        <strong>${getContactName(pubkey)}</strong>
        <p>loading user metadata...</p>
      </article>
    `;
  }

  const m = JSON.parse(e.content);
  const ismycontact = isUserMyContact(pubkey);

  return `
    <article>
      <div>
        ${m && !!m.picture ? `<img src="${sanitize(m.picture)}" /> ` : ''}
        <div class="contactdetailsmain">
          <strong>${getContactName(pubkey)}</strong>
          ${m.nip05 ? `<small id="nip05-${pubkey}">${sanitize(m.nip05)} </small>` : ''}<span id="nip05-${pubkey}-verified"></span>
          <div><small>${m.about ? sanitize(m.about) : ''}</small></div>
        </div>
      </div>
      <footer>
        <div class="grid">
          <div class="contact-actions">
            <button id="back-to-history-${pubkey}" class="secondary outline">Back to History</button>
            ${!ismycontact ? `<button id="restore-contact-${pubkey}" class="secondary">Restore Contact</button>` : ''}
          </div>
        </div>
      </footer>
    </article>
  `;
};

/**
 * Load contact details into the contact details container
 * @param pubkey Public key of contact
 */
const loadContactDetails = (pubkey: string): void => {
  // Get container
  const container = getElement('contactdetails');
  if (!container) return;

  // Load HTML
  container.innerHTML = generateContactDetails(pubkey);

  // Scroll to top
  window.scrollTo(0, 0);

  // Reload if no kind0 profile found
  if (!fetchCachedProfileEvent(pubkey, 0)) {
    setTimeout(() => loadContactDetails(pubkey), 500);
  }

  // Check nip05 verification
  const checkUserNip05 = async () => {
    const nip05el = getElement(`nip05-${pubkey}`);
    if (!nip05el) return;

    const addr = nip05el.innerHTML.trim();

    // Check cache first
    if (nip05cache[addr] !== undefined) {
      const verified = nip05cache[addr] === pubkey;
      const verifiedEl = getElement(`nip05-${pubkey}-verified`);
      if (verifiedEl) {
        verifiedEl.innerHTML = verified
          ? '<ins>&#10004; verified</ins>'
          : '<del>&#10004; verified</del>';
      }
      return;
    }

    // Not in cache, verify
    let verified = false;
    try {
      const r = await nip05.queryProfile(addr);
      verified = !!r && r.pubkey === pubkey;

      // Cache the result
      nip05cache[addr] = verified ? pubkey : null;
    } catch {
      nip05cache[addr] = null;
    }

    // Update UI
    const verifiedEl = getElement(`nip05-${pubkey}-verified`);
    if (verifiedEl) {
      verifiedEl.innerHTML = verified
        ? '<ins>&#10004; verified</ins>'
        : '<del>&#10004; verified</del>';
    }
  };

  // Run nip05 verification
  checkUserNip05();

  // Set up back button
  const backBtn = getElement(`back-to-history-${pubkey}`);
  if (backBtn) {
    backBtn.onclick = () => {
      const contactHistory = getElement('contactsbackuphistory');
      if (contactHistory) {
        contactHistory.style.display = 'block';
      }
      if (container) {
        container.innerHTML = '';
      }
    };
  }

  // Set up restore button for historical contacts
  const restoreBtn = getElement(`restore-contact-${pubkey}`);
  if (restoreBtn) {
    restoreBtn.onclick = async () => {
      // Get current contacts
      const ce = fetchCachedMyProfileEvent(3) as Kind3Event;
      if (!ce) return;

      // Create tags with the contact to be restored
      const tags = [...ce.tags];
      const existingTag = tags.find((t) => t[1] === pubkey);

      if (!existingTag) {
        // Add new contact
        tags.push(['p', pubkey, '', '']);

        await submitUnsignedEvent(
          {
            pubkey: localStorageGetItem('pubkey') as string,
            kind: 3,
            created_at: Math.floor(Date.now() / 1000),
            content: '',
            tags,
          },
          `restore-contact-${pubkey}`,
          'Contact Restored',
        );

        // Reload history
        loadBackupHistory('contactsbackuphistory', 3);

        // Show success message
        if (container) {
          container.innerHTML = `
            <div class="success-message">
              <h4>Contact Restored Successfully</h4>
              <p>The contact has been added back to your contact list.</p>
              <button id="back-to-history" class="secondary outline">Back to History</button>
            </div>
          `;

          const newBackBtn = getElement('back-to-history');
          if (newBackBtn) {
            newBackBtn.onclick = () => {
              const contactHistory = getElement('contactsbackuphistory');
              if (contactHistory) {
                contactHistory.style.display = 'block';
              }
              if (container) {
                container.innerHTML = '';
              }
            };
          }
        }
      }
    };
  }
};

/**
 * Process a hex or NIP-19 string to extract pubkey
 * @param s Input string
 * @returns Object with pubkey and relays
 */
const processHexOrNip19 = (s: string): { pubkey: string | null; relays: string[] | null } => {
  let pubkey: string | null = null;
  let relays: string[] | null = null;

  // Is it a hex string?
  const regexhex64 = /^[a-fA-F0-9]{64}$/i;
  if (regexhex64.test(s)) {
    pubkey = s;
    return { pubkey, relays };
  }

  // Check for nip19
  try {
    const { data, type } = nip19.decode(s) as {
      type: string, data: {
        pubkey?: string,
        relays?: string[];
      }
    };

    if (typeof data === 'string') {
      if (type === 'npub') pubkey = data;
      else throw new Error('no pubkey');
    } else {
      if (data.pubkey) pubkey = data.pubkey;
      if (data.relays) relays = data.relays;
    }
  } catch {
    // Parsing failed
  }

  return { pubkey, relays };
};

/**
 * Enhance the history view with custom event handlers
 */
const enhanceContactHistory = (): void => {
  // Find all contact links in the history and make them clickable
  const history = getElement('contactsbackuphistory');
  if (!history) return;

  // Add click handler to contact marks
  const marks = history.querySelectorAll('mark[title]');
  marks.forEach((mark) => {
    const titleAttr = mark.getAttribute('title');
    if (titleAttr && titleAttr.length === 64) {
      // It's a pubkey
      const pubkey = titleAttr;
      mark.style.cursor = 'pointer';

      mark.addEventListener('click', () => {
        history.style.display = 'none';
        loadContactDetails(pubkey);
      });

      // Add hover effect
      mark.addEventListener('mouseover', () => {
        mark.style.textDecoration = 'underline';
      });

      mark.addEventListener('mouseout', () => {
        mark.style.textDecoration = 'none';
      });
    }
  });
};

/**
 * Main function to load the contacts page (focused only on history)
 */
const LoadContactsPage = (): void => {
  const container = getElement('PM-container');
  if (!container) return;

  // Clear DOM cache to prevent stale references
  Object.keys(domCache).forEach((key) => delete domCache[key]);

  container.innerHTML = `
    <div class="container">
      <div class="profile-card">
        <h3>Contacts</h3>
        <p>View and manage your Nostr contacts.</p>
        <div id="contactdetails"></div>
      </div>
      
      <div class="section-card">
        <h3>Contact List History</h3>
        <p>View the history of changes to your contact list. Click on a contact name to view details.</p>
        <div id="contactsbackuphistory">
          <div id="history-loading" aria-busy="true">Loading contact history...</div>
        </div>
      </div>
    </div>
  `;

  // Load backup history with improved loading indicator
  setTimeout(() => {
    const loadingElement = getElement('history-loading');
    if (loadingElement) loadingElement.remove();

    loadBackupHistory('contactsbackuphistory', 3, (pubkey) => {
      const history = getElement('contactsbackuphistory');
      if (history) history.style.display = 'none';
      loadContactDetails(pubkey);
    });

    // Enhance history after a short delay to ensure it's loaded
    setTimeout(() => enhanceContactHistory(), 100);
  }, 0);
};

export default LoadContactsPage;
