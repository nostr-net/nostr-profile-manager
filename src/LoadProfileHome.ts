import { Event } from 'nostr-tools';
import {
  fetchCachedMyProfileEvent, fetchCachedMyProfileEventHistory, hadLatest, isUptodate,
} from './fetchEvents';
import LoadContactsPage from './LoadContactsPage';
import { LoadMetadataPage, MetadataFlex } from './LoadMetadataPage';
import LoadRelaysPage from './LoadRelaysPage';

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

export const LoadProfileHome = () => {
  const noprofileinfo = !fetchCachedMyProfileEvent(0) && !fetchCachedMyProfileEvent(3);
  const uptodate = isUptodate();
  const hadlatest = hadLatest();
  const o: HTMLElement = document.getElementById('PM-container') as HTMLElement;
  
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