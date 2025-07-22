import { nip05 } from 'nostr-tools';
import { sanitize } from 'isomorphic-dompurify';
import { fetchCachedMyProfileEvent, submitUnsignedEvent } from './fetchEvents';
import { loadBackupHistory } from './LoadHistory';
import { localStorageGetItem } from './LocalStorage';

type MetadataCore = {
  name: string;
  picture?: string;
  about?: string;
  banner?: string;
  nip05?: string;
  lud06?: string;
  lud16?: string;
};

export type MetadataFlex = MetadataCore & {
  [x: string | number | symbol]: unknown;
};

const toTextInput = (prop: string, m: MetadataFlex | null, displayname?: string) => `
    <label for="PM-form-${prop}">
        ${displayname || prop}
        <input
          type="text"
          name="PM-form-${prop}"
          id="PM-form-${prop}"
          placeholder="${displayname || prop}" ${m && m[prop] ? `value="${sanitize(m[prop] as string)}"` : ''}
        />
    </label>
`;
const toTextarea = (prop: string, m: MetadataFlex | null, displayname?: string) => `
    <label for="PM-form-${prop}">
      ${displayname || prop}
      <textarea
        id="PM-form-${prop}"
        name="PM-form-${prop}"
        placeholder="${displayname || prop}"
      >${m && m[prop] ? sanitize(m[prop] as string) : ''}</textarea>
    </label>
`;

const standardkeys = [
  'name',
  'nip05',
  'about',
  'picture',
  'banner',
  'lud06',
  'lud16',
];

const generateForm = (c: MetadataFlex | null): string => {
  const customkeys = !c ? [] : Object.keys(c).filter(((k) => !standardkeys.some((s) => s === k)));
  return `<form id="metadatapageform">
    <div class="section-card">
      <div class="grid">
        ${toTextInput('name', c)}
        ${toTextInput('nip05', c)}
      </div>
      ${toTextarea('about', c)}
      
      <div class="profile-images mt-2">
        <div class="mb-2">
          <label>Profile Picture</label>
          <img id="metadata-form-picture" src="${c && c.picture ? sanitize(c.picture) : ''}">
          ${toTextInput('picture', c)}
        </div>
        
        <div class="mb-2">
          <label>Banner Image</label>
          <img id="metadata-form-banner" src="${c && c.banner ? sanitize(c.banner) : ''}">
          ${toTextInput('banner', c)}
        </div>
      </div>
      
      <div class="lightning-section mt-2">
        <h4>Lightning Address</h4>
        <div class="grid">
          ${toTextInput('lud06', c, 'lud06 (LNURL)')}
          ${toTextInput('lud16', c)}
        </div>
      </div>
      
      ${customkeys.length > 0 ? `
        <div class="custom-fields mt-2">
          <h4>Custom Fields</h4>
          <div class="grid">
            ${customkeys.map((k) => toTextInput(k, c)).join('')}
          </div>
        </div>
      ` : ''}
      
      <div class="form-actions mt-3">
        <button id="metadatasubmitbutton" type="submit">${c ? 'Update' : 'Save'}</button>
        <button id="metadataresetbutton" class="secondary outline" type="reset">Reset Form</button>
      </div>
    </div>
  </form>`;
};

const SubmitMetadataForm = async () => {
  // construct and populate new content object with form data. avoid reordering properties
  const fd = new FormData(document.getElementById('metadatapageform') as HTMLFormElement);
  const n: { [x: string]: unknown; } = {};
  const e = fetchCachedMyProfileEvent(0);
  (e ? [...(Object.keys(JSON.parse(e.content))), ...standardkeys] : standardkeys)
    .forEach((k) => {
      const d = fd.get(`PM-form-${k}`);
      if (d && d !== '') n[k] = d;
    });
  // submit event
  const r = await submitUnsignedEvent(
    {
      pubkey: localStorageGetItem('pubkey') as string,
      kind: 0,
      created_at: Math.floor(Date.now() / 1000),
      content: JSON.stringify(n),
      tags: [],
    },
    'metadatasubmitbutton',
  );
  // reload history
  if (r) loadBackupHistory('metadatahistory', 0);
};

const loadMetadataForm = (RootElementID: string) => {
  const e = fetchCachedMyProfileEvent(0);
  const MetadataContent = !e ? null : JSON.parse(e.content) as MetadataFlex;
  (document.getElementById(RootElementID) as HTMLDivElement)
    .innerHTML = `<div class="profileform">
    <h3>Metadata</h3>
    ${generateForm(MetadataContent)}
  </div>`;
  // refresh picture and banner on change event
  ['picture', 'banner'].forEach((n) => {
    const input = document.getElementById(`PM-form-${n}`) as HTMLInputElement;
    input.onchange = () => {
      (document.getElementById(`metadata-form-${n}`) as HTMLImageElement)
        .setAttribute('src', input.value);
    };
  });
  // check nip05
  const nip05input = document.getElementById('PM-form-nip05') as HTMLInputElement;
  const checkNip05 = async () => {
    if (nip05input.value === '') {
      nip05input.removeAttribute('aria-invalid');
    } else {
      let verified: boolean = false;
      try {
        const r = await nip05.queryProfile(nip05input.value);
        verified = !!r && r.pubkey === localStorageGetItem('pubkey');
      } catch { /* empty */ }
      nip05input.setAttribute('aria-invalid', verified ? 'false' : 'true');
    }
  };
  checkNip05();
  nip05input.onchange = checkNip05;
  // form submit event
  (document.getElementById('metadatasubmitbutton') as HTMLButtonElement).onclick = (event) => {
    SubmitMetadataForm();
    event.preventDefault();
  };
  // reset form
  (document.getElementById('metadataresetbutton') as HTMLButtonElement).onclick = (event) => {
    loadMetadataForm(RootElementID);
    event.preventDefault();
  };
};

export const LoadMetadataPage = () => {
  const o: HTMLElement = document.getElementById('PM-container') as HTMLElement;
  o.innerHTML = `
    <div class="container">
      <div class="profile-card">
        <h3>Metadata</h3>
        <p>Edit your profile information and customize how others see you on Nostr.</p>
        <div id="metadataformcontainer"></div>
      </div>
      
      <div class="section-card">
        <h3>Backup History</h3>
        <p>View your profile's history and restore previous versions if needed.</p>
        <div id="metadatahistory"></div>
      </div>
    </div>
  `;
  loadMetadataForm('metadataformcontainer');
  loadBackupHistory('metadatahistory', 0);
};
