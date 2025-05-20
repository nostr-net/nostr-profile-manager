import { fetchCachedMyProfileEvent, submitUnsignedEvent } from './fetchEvents';
import { Kind10002Event, Kind10002Tag, loadBackupHistory } from './LoadHistory';
import { localStorageGetItem } from './LocalStorage';

// Generate a row for each relay
const generateRelayRow = (index: number, tag?: Kind10002Tag): string => `
  <div class="relay-row">
    <div class="relay-url">
      ${tag ? tag[1] : '<input type="text" name="PM-form-relay-new-address" id="PM-form-relay-new-address" placeholder="wss://..." />'}
    </div>
    <div class="relay-permissions">
      <label>
        <input
          type="checkbox"
          id="PM-form-relay-${index}-read"
          name="PM-form-relay-${index}-read"
          ${!tag || !tag[2] || tag[2] === 'read' ? 'checked="checked"' : ''}
        >
        <span>read</span>
      </label>
      <label>
        <input
          type="checkbox"
          id="PM-form-relay-${index}-write"
          name="PM-form-relay-${index}-write"
          ${!tag || !tag[2] || tag[2] === 'write' ? 'checked="checked"' : ''}
        >
        <span>write</span>
      </label>
    </div>
    <div class="relay-actions">
      <button 
        type="button" 
        class="remove-btn" 
        onclick="document.getElementById('relay-row-${index}').remove();"
      >
        REMOVE
      </button>
    </div>
  </div>
`;

// Generate the relay form
const generateRelayForm = (event: Kind10002Event | null): string => `
  <form id="relaysform" class="relays-form">
    <div id="relay-list">
      ${!event ? '' : event.tags.map((a, i) => `<div id="relay-row-${i}">${generateRelayRow(i, a)}</div>`).join('')}
      <div id="new-relay-row"></div>
    </div>
    <div class="form-actions">
      <button id="relaysaddbutton" type="button" class="add-btn">+ ADD RELAY</button>
      <div class="button-group mt-2">
        <button id="relayssubmitbutton" type="button">${event ? 'UPDATE' : 'SAVE'}</button>
        <button id="relaysresetbutton" class="secondary outline" type="reset">RESET</button>
      </div>
    </div>
  </form>
`;

// Submit relay form
const SubmitRelayForm = async () => {
  // Collect data from form
  const relayRows = document.querySelectorAll('.relay-row');
  const tags: Kind10002Tag[] = [];
  
  relayRows.forEach((row, i) => {
    let url: string | null = null;
    const urlElement = row.querySelector('.relay-url input') as HTMLInputElement;
    
    // Get URL from input or text content
    if (urlElement) {
      url = urlElement.value.trim();
    } else {
      url = (row.querySelector('.relay-url') as HTMLElement).textContent?.trim() || null;
    }
    
    if (!url || url === '') return;
    
    // Get permissions
    const readChecked = (row.querySelector(`#PM-form-relay-${i}-read`) as HTMLInputElement)?.checked;
    const writeChecked = (row.querySelector(`#PM-form-relay-${i}-write`) as HTMLInputElement)?.checked;
    
    // Create tag based on permissions
    const base: Kind10002Tag = ['r', url];
    if (readChecked && writeChecked) {
      tags.push(base);
    } else {
      tags.push(['r', url, readChecked ? 'read' : 'write'] as Kind10002Tag);
    }
  });
  
  // Submit event
  await submitUnsignedEvent(
    {
      pubkey: localStorageGetItem('pubkey') as string,
      kind: 10002,
      created_at: Math.floor(Date.now() / 1000),
      content: '',
      tags,
    },
    'relayssubmitbutton',
  );
  
  // Reload history
  loadBackupHistory('relaysbackuphistory', 10002);
};

// Load relay form
const loadRelayForm = (RootElementID: string) => {
  const container = document.getElementById(RootElementID) as HTMLDivElement;
  if (!container) return;
  
  // Insert form HTML
  container.innerHTML = `<div class="relayform">
    <h3>RELAYS_</h3>
    ${generateRelayForm(fetchCachedMyProfileEvent(10002) as Kind10002Event)}
  </div>`;
  
  // Set up form submit event
  const submitBtn = document.getElementById('relayssubmitbutton') as HTMLButtonElement;
  if (submitBtn) {
    submitBtn.onclick = (event) => {
      SubmitRelayForm();
      event.preventDefault();
    };
  }
  
  // Set up reset form
  const resetBtn = document.getElementById('relaysresetbutton') as HTMLButtonElement;
  if (resetBtn) {
    resetBtn.onclick = (event) => {
      loadRelayForm(RootElementID);
      event.preventDefault();
    };
  }
  
  // Set up add relay button
  const addBtn = document.getElementById('relaysaddbutton') as HTMLButtonElement;
  if (addBtn) {
    addBtn.onclick = (event) => {
      const newRelayRow = document.getElementById('new-relay-row') as HTMLElement;
      if (newRelayRow) {
        const count = document.querySelectorAll('.relay-row').length;
        const div = document.createElement('div');
        div.id = `relay-row-${count}`;
        div.innerHTML = generateRelayRow(count);
        newRelayRow.before(div);
      }
      event.preventDefault();
    };
  }
};

// Main function to load relays page
const LoadRelaysPage = () => {
  const container = document.getElementById('PM-container') as HTMLElement;
  if (!container) return;
  
  container.innerHTML = `
    <div class="container">
      <div id="relayforcontainer"></div>
      <div class="section-card mt-3">
        <h3>RELAY HISTORY_</h3>
        <div id="relaysbackuphistory"></div>
      <div>
    </div>
  `;
  
  loadRelayForm('relayforcontainer');
  loadBackupHistory('relaysbackuphistory', 10002);
};

export default LoadRelaysPage;