import { Event, UnsignedEvent, nip19 } from 'nostr-tools';
import {
  fetchCachedMyProfileEvent, fetchCachedMyProfileEventHistory, hadLatest, isUptodate,
} from './fetchEvents';
import LoadContactsPage from './LoadContactsPage';
import { LoadMetadataPage, MetadataFlex } from './LoadMetadataPage';
import LoadRelaysPage from './LoadRelaysPage';
import { localStorageSetItem } from './LocalStorage';

declare global {
  interface Window {
    nostr?: {
      getPublicKey: () => Promise<string>;
      signEvent: (event: UnsignedEvent) => Promise<Event>;
    };
  }
  function typeWriter(element: HTMLElement, text: string, speed: number): void;
}

export const generateLogoHero = () => (
  '<div class="text-center"><img class="hero-logo" src="./img/nostr-profile-manage-logo.png"></div>'
);

const injectLoading = (loading: boolean = true) => `${loading ? 'aria-busy="true"' : ''}`;

const generateMetadataSummary = (e: Event | null, loading = false) => {
  if (e == null) {
    return `<div>
      <button ${injectLoading(loading)} class="outline contrast">No Metadata</button>
    </div>`;
  }
  return `<div>
    <button
      ${injectLoading(loading)}
      class="outline"
      id="metadatabutton"
    >
      ${Object.keys(JSON.parse(e.content)).length} Metadata Fields
    </button>
  </div>`;
};

const generateContactsSummary = (e: Event | null, loading = false) => {
  if (e == null) {
    return `<div><button
      ${injectLoading(loading)}
      id="contactsbutton"
    >No Contacts</button></div>`;
  }
  return `<div>
    <button
      ${injectLoading(loading)}
      id="contactsbutton"
    >${e.tags.length} Contacts</button>
  </div>`;
};

const generateRelaysSummary = (e: Event | null, loading = false) => {
  if (e == null) {
    return `<div>
      <button
        ${injectLoading(loading)}
        id="relaysbutton"
        class="outline secondary"
      >No Relays</button>
    </div>`;
  }
  const read = e.tags.filter((t) => typeof t[2] === 'undefined' || t[2] === 'read').length;
  const write = e.tags.filter((t) => typeof t[2] === 'undefined' || t[2] === 'write').length;
  return `<div><button
    ${injectLoading(loading)}
    id="relaysbutton"
    class="outline secondary"
  >
    ${e.tags.length} Relay${e.tags.length === 1 ? '' : 's'} (${read} read ${write} write)
    </button></div>`;
};

const generateMetadataHeader = (e: Event) => {
  const c = JSON.parse(e.content) as MetadataFlex;
  // remove new lines from about
  let about = c.about ? c.about.replace(/\r?\n|\r/, '') : '';
  if (about.length > 50) about = `${about.substring(0, 47)}...`;
  return `
    <div class="profile-header">
      <img src="${c.picture ? c.picture : './img/nostr-profile-manage-logo.png'}" alt="Profile picture">
      <div class="profile-info">
        <h2>${c.name ? c.name : 'Anonymous'}</h2>
        ${c.nip05 ? `<p>${c.nip05}</p>` : ''}
        ${about ? `<p>${about}</p>` : ''}
      </div>
    </div>
  `;
};

export const generateBackupHeroHeading = (
  uptodate: boolean,
  noprofileinfo: boolean,
  hadlatest: boolean,
) => {
  let content = '';
  if (!uptodate) {
    if (noprofileinfo) {
      content = `
        <h1 aria-busy="true">Finding Profile...</h1>
        <p>It's your first time here and we are backing up your metadata, contacts and relays to your offline browser data.</p>
      `;
    } else {
      content = `
        <h1 aria-busy="true">Finding Latest Profile...</h1>
        <p>We are backing up your latest metadata, contacts and relays to your offline browser data.</p>
      `;
    }
  } else if (noprofileinfo) {
    content = `
      <h1>No Profile Events Found</h1>
      <p>We didn't find any profile info for you. Either we didn't look on the right relays or you have just created a key pair.</p>
      <p>Only proceed if you are setting your profile up for the first time.</p>
    `;
  } else if (hadlatest) {
    content = `
      <h1>Backup is up to date!</h1>
      <p>
        We already had backed up your profile to your offline browser data.
        <a href="#" class="secondary" id="downloadprofile">Download</a> for safe keeping.
      </p>
      <p>If your profile ever gets wiped by a nostr client, come back here on this device to restore. Come back from time to time to update your backup.</p>
    `;
  } else {
    content = `
      <h1>Profile Backed Up!</h1>
      <p>
        We just backed up your latest profile to your offline browser data.
        <a id="downloadprofile" href="#" class="secondary">Download</a> for safe keeping.
      </p>
      <p>If your profile ever gets wiped by a nostr client, come back here on this device to restore. Come back from time to time to update your backup.</p>
    `;
  }
  return `<div class="backup-hero">${content}</div>`;
};

/**
 * Setup login button handlers
 */
const setupLoginHandlers = () => {
  // Apply typing effects
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

  // Extension login
  const extensionButton = document.getElementById('login-extension');
  if (extensionButton) {
    extensionButton.onclick = async (ev) => {
      ev.preventDefault();

      if (window.nostr) {
        try {
          extensionButton.setAttribute('aria-busy', 'true');
          extensionButton.textContent = 'Connecting...';

          const pubkey = await window.nostr.getPublicKey();
          localStorageSetItem('pubkey', pubkey);

          // Reload to logged in state
          window.location.reload();
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error('Error connecting to Nostr extension:', error);
          extensionButton.removeAttribute('aria-busy');
          extensionButton.textContent = 'Connection Failed. Retry';
        }
      } else {
        extensionButton.outerHTML = `
          <div class="error-message">
            <p class="code-font">NIP-07 browser extension not detected.</p>
            <p class="code-font">Install an extension like nos2x to proceed.</p>
            <a href="https://github.com/nostr-protocol/nips/blob/master/07.md" role="button" class="secondary code-font">Get Browser Extension</a>
          </div>
        `;
      }
    };
  }

  // npub login
  const npubButton = document.getElementById('login-npub');
  if (npubButton) {
    npubButton.onclick = (ev) => {
      ev.preventDefault();

      // Replace button with input form
      npubButton.outerHTML = `
        <div class="npub-input-form">
          <input type="text" id="npub-input" placeholder="npub1... or hex pubkey" />
          <div class="button-group">
            <button id="npub-submit" class="secondary">Login</button>
            <button id="npub-cancel" class="outline">Cancel</button>
          </div>
        </div>
      `;

      // Setup form handlers
      const submitBtn = document.getElementById('npub-submit');
      const cancelBtn = document.getElementById('npub-cancel');
      const input = document.getElementById('npub-input') as HTMLInputElement;

      if (input) input.focus();

      if (submitBtn) {
        submitBtn.onclick = () => {
          const value = input?.value.trim();
          if (value) {
            try {
              // Handle both hex and npub formats
              let pubkey = value;

              if (value.startsWith('npub1')) {
                // Decode npub to hex using nostr-tools
                const decoded = nip19.decode(value);
                if (decoded.type !== 'npub') {
                  throw new Error('Invalid npub format');
                }
                pubkey = decoded.data as string;
              } else if (value.length === 64 && /^[0-9a-f]+$/i.test(value)) {
                // Already hex format
                pubkey = value;
              } else {
                throw new Error('Invalid pubkey format');
              }

              localStorageSetItem('pubkey', pubkey);
              window.location.reload();
            } catch (error) {
              // eslint-disable-next-line no-alert
              alert('Invalid pubkey format. Please enter a valid hex pubkey or npub.');
            }
          }
        };
      }

      if (cancelBtn) {
        cancelBtn.onclick = () => {
          window.location.reload();
        };
      }

      // Enter key support
      if (input) {
        input.onkeypress = (e) => {
          if (e.key === 'Enter') {
            submitBtn?.click();
          }
        };
      }
    };
  }
};

export const LoadProfileHome = () => {
  const o: HTMLElement = document.getElementById('PM-container') as HTMLElement;
  const pubkey = localStorage.getItem('pubkey');

  // If no user is logged in, show login interface
  if (!pubkey) {
    o.innerHTML = `
      <div class="container">
        <div class="profile-card">
          <div class="hero">
            ${generateLogoHero()}
            <div id="herocontent">
              <h1 id="title-text">Nostr Profile Manager</h1>
              <p id="subtitle-text">Secure / Backup / Refine / Delete</p>
              <div class="login-options">
                <button id="login-extension" class="contrast">Login with Extension</button>
                <button id="login-npub" class="secondary">Enter npub/pubkey</button>
              </div>
            </div>
          </div>
        </div>
        
    `;

    // Setup login handlers
    setupLoginHandlers();
    return;
  }

  // User is logged in - show profile
  const noprofileinfo = !fetchCachedMyProfileEvent(0) && !fetchCachedMyProfileEvent(3);
  const uptodate = isUptodate();
  const hadlatest = hadLatest();

  if (noprofileinfo) {
    o.innerHTML = `
      <div class="container">
        <div class="profile-card">
          <div class="hero">
            ${generateLogoHero()}
            ${generateBackupHeroHeading(uptodate, noprofileinfo, hadlatest)}
          </div>
        </div>
      </div>
    `;
  } else {
    o.innerHTML = `
      <div class="container">
        <div class="profile-card">
          ${generateMetadataHeader(fetchCachedMyProfileEvent(0) as Event)}
          
          <div class="profile-meta">
            ${generateMetadataSummary(fetchCachedMyProfileEvent(0), !uptodate)}
            ${generateContactsSummary(fetchCachedMyProfileEvent(3), !uptodate)}
            ${generateRelaysSummary(fetchCachedMyProfileEvent(10002), !uptodate)}
          </div>
          
          ${generateBackupHeroHeading(uptodate, noprofileinfo, hadlatest)}
        </div>
      </div>
    `;
  }

  const mbutton = document.getElementById('metadatabutton');
  if (mbutton) mbutton.onclick = () => LoadMetadataPage();
  const cbutton = document.getElementById('contactsbutton');
  if (cbutton) cbutton.onclick = () => LoadContactsPage();
  const rbutton = document.getElementById('relaysbutton');
  if (rbutton) rbutton.onclick = () => LoadRelaysPage();

  // enable download link
  const donwloada = document.getElementById('downloadprofile');
  if (donwloada) {
    donwloada.onclick = (event) => {
      event.preventDefault();
      const jsonStr = JSON.stringify([
        ...(fetchCachedMyProfileEventHistory(0) || []),
        ...(fetchCachedMyProfileEventHistory(2) || []),
        ...(fetchCachedMyProfileEventHistory(10002) || []),
        ...(fetchCachedMyProfileEventHistory(3) || []),
      ]);
      const element = document.createElement('a');
      element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(jsonStr)}`);
      element.setAttribute('download', `my-nostr-profile-events-${Date.now()}.json`);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
  }
};
