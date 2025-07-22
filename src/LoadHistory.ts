import * as timeago from 'timeago.js';
import { Event } from 'nostr-tools';
import { sanitize } from 'isomorphic-dompurify';
import { fetchCachedMyProfileEventHistory, getContactName, submitUnsignedEvent } from './fetchEvents';

// Cache for memoizing expensive change calculations
const changeCache = new Map<string, VersionChange[]>();

export type VersionChange = {
  ago: number;
  changes: string[];
  option: string;
};

/**
 * Generate an HTML table from version changes
 * @param changes Array of version changes
 * @returns HTML string for changes table
 */
const generateChangesTable = (changes: VersionChange[]) => `
    <table role="grid" class="historytable">
        <tbody>${changes.map((c) => `
            <tr>
                <td><small>${timeago.format(c.ago * 1000)}</small></td>
                <td><ul>${c.changes.map((v) => `<li>${v}</li>`).join('')}</ul></td>
                <td>${c.option}</td>
            </tr>
        `).join('')}
        </tbody>
    </table>
`;

/**
 * Generate metadata changes between events
 * @param history Array of events
 * @returns Array of version changes
 */
export const generateMetadataChanges = (
  history: Event[],
): VersionChange[] => {
  // Generate cache key based on event IDs and timestamps
  const cacheKey = `metadata-${history.map((e) => `${e.id.substring(0, 8)}-${e.created_at}`).join('|')}`;

  // Return cached result if available
  if (changeCache.has(cacheKey)) {
    return changeCache.get(cacheKey)!;
  }

  const results = history.map((e, i, a) => {
    const changes: string[] = [];
    const c = JSON.parse(e.content);
    const clean = (s: string | number) => (sanitize(
      typeof s === 'string' ? s.replace(/(\r\n|\n|\r)/gm, ' ') : s.toString(),
    ));

    // If first backup, list all fields and values
    if (i === a.length - 1) {
      Object.keys(c).forEach((k) => changes.push(`${k}: ${clean(c[k])}`));
    } else {
      const nextc = JSON.parse(a[i + 1].content);

      // List adds
      Object.keys(c)
        .filter((k) => !Object.keys(nextc).some((v) => v === k))
        .forEach((k) => { changes.push(`added ${k}: ${clean(c[k])}`); });

      // List modified
      Object.keys(c)
        .filter((k) => Object.keys(nextc).some((v) => v === k && nextc[k] !== c[k]))
        .forEach((k) => { changes.push(`modified ${k}: ${clean(c[k])}`); });

      // List deletes
      Object.keys(nextc)
        .filter((k) => !Object.keys(c).some((v) => v === k))
        .forEach((k) => {
          changes.push(
            `removed ${clean(nextc[k]).length === 0 ? `blank ${k}` : `${k}: ${clean(nextc[k])}`}`,
          );
        });
    }

    return {
      ago: e.created_at,
      changes,
      option: i === 0
        ? '<ins>Backup Complete<ins>'
        : `<a href="#" id="restore-${e.kind}-${i}" class="secondary" onclick="event.preventDefault();">Restore</a>`,
    };
  });

  // Cache the results
  changeCache.set(cacheKey, results);

  return results;
};

export interface Kind3Event extends Event {
  kind: 3;
  tags: ['p', string, string, string][]
}

/**
 * Check if two contact tags refer to the same contact
 * @param x First contact tag
 * @param y Second contact tag
 * @returns True if they refer to the same contact
 */
const sameContact = (
  x: ['p', string, string, string],
  y: ['p', string, string, string],
): boolean => !!(
  x[1] === y[1]
  || (x[3] && y[3] && x[3] === y[3])
);

/**
 * Get display petname for a contact
 * @param a Contact tag
 * @returns HTML string for petname
 */
const getPetname = (a: ['p', string, string, string]): string => {
  if (a[3] && a[3].length > 0) return `<mark>${sanitize(a[3])}</mark>`;
  return `<mark title="${a[1]}">${getContactName(a[1])}</mark>`;
};

/**
 * Generate contact changes between events
 * @param history Array of events
 * @returns Array of version changes
 */
export const generateContactsChanges = (
  history: Kind3Event[],
): VersionChange[] => {
  // Generate cache key
  const cacheKey = `contacts-${history.map((e) => `${e.id.substring(0, 8)}-${e.created_at}`).join('|')}`;

  // Return cached result if available
  if (changeCache.has(cacheKey)) {
    return changeCache.get(cacheKey)!;
  }

  const results = history.map((e, i, a) => {
    const changes: string[] = [];
    const current = e.tags.filter((t) => t[0] === 'p');

    // If first backup, list all contacts
    if (i === a.length - 1) {
      changes.push(current.map(getPetname).join(', '));
    } else {
      const next = a[i + 1].tags.filter((t) => t[0] === 'p');

      // List adds
      const added = current.filter((c) => !next.some((n) => sameContact(c, n)));
      if (added.length > 0) {
        changes.push(`<div class="added">added ${added.map(getPetname).join(', ')}</div>`);
      }

      // List modifications
      const modified = current.filter(
        (c) => next.filter((n) => n[1] === c[1]).some((n) => c[3] !== n[3]),
      );

      modified.forEach((r) => {
        const nv = next.find((n) => n[1] === r[1]);
        if (!nv) return null;
        if (!r[3] && !nv[3]) return null;
        if (r[3] && !nv[3]) return changes.push(`added petname for ${getPetname(r)}`);
        if (!r[3] && nv[3]) return changes.push(`removed petname for ${getPetname(r)}, previously ${getPetname(nv)}`);
        return changes.push(`modified petname for ${getPetname(r)}, previously ${getPetname(nv)}`);
      });

      // List deletes
      const removed = next.filter((c) => !current.some((n) => sameContact(c, n)));
      if (removed.length > 0) {
        changes.push(`<div class="removed">removed ${removed.map(getPetname).join(', ')}</div>`);
      }
    }

    return {
      ago: e.created_at,
      changes,
      option: i === 0
        ? '<ins>Backup Complete<ins>'
        : `<a href="#" id="restore-${e.kind}-${i}" class="secondary" onclick="event.preventDefault()">Restore</a>`,
    };
  });

  // Cache the results
  changeCache.set(cacheKey, results);

  return results;
};

export type Kind10002Tag = ['r', string] | ['r', string, 'read' | 'write'];

export interface Kind10002Event extends Event {
  kind: 3;
  tags: Kind10002Tag[]
}

/**
 * Generate a summary string for a relay
 * @param r Relay tag
 * @returns Summary string
 */
const summariseRelay = (r: Kind10002Tag): string => r[1] + (r[2] ? ` ${r[2]} only` : '');

/**
 * Generate relay changes between events
 * @param history Array of events
 * @returns Array of version changes
 */
export const generateRelayChanges = (
  history: Kind10002Event[],
): VersionChange[] => {
  // Generate cache key
  const cacheKey = `relays-${history.map((e) => `${e.id.substring(0, 8)}-${e.created_at}`).join('|')}`;

  // Return cached result if available
  if (changeCache.has(cacheKey)) {
    return changeCache.get(cacheKey)!;
  }

  const results = history.map((e, i, a) => {
    const changes: string[] = [];
    const current = e.tags.filter((t) => t[0] === 'r');

    // If first backup, list all relays
    if (i === a.length - 1) {
      current.forEach((r) => changes.push(summariseRelay(r)));
    } else {
      const next = a[i + 1].tags;

      const relayReadAndWrite = (r: Kind10002Tag, addedorremoveed: 'added' | 'removed'): string => {
        const wonly = `<mark class="${addedorremoveed}">write</mark>`;
        const ronly = `<mark class="${addedorremoveed}">read</mark>`;
        const randw = `${ronly} and ${wonly}`;
        if (!r[2]) return randw;
        if (r[2] === 'write') return `${wonly} only`;
        return `${ronly} only`;
      };

      // List adds
      const added = current.filter((c) => !next.some((n) => n[1] === c[1]));
      if (added.length > 0) {
        added.forEach((r) => changes.push(
          `<div>added <mark>${r[1]}</mark> as ${relayReadAndWrite(r, 'added')}</div>`,
        ));
      }

      // List modified
      const modified = current.filter(
        (c) => next.filter((n) => n[1] === c[1]).some((n) => c[2] !== n[2]),
      );

      modified.forEach((r) => {
        const nv = next.find((n) => n[1] === r[1]);
        let s: string;
        if (!r[2]) {
          if (!!nv && nv[2] === 'read') s = '<mark class="added">write</mark> as well as read';
          else s = '<mark class="added">read</mark> as well as write';
        } else if (r[2] === 'read') {
          if (!nv) s = 'only read and no longer <mark class="removed">write</mark>';
          else s = '<mark class="added">read</mark> instead of <mark class="removed">write</mark>';
        } else if (!nv) s = 'only write and no longer <mark class="removed">read</mark>';
        else s = '<mark class="added">write</mark> instead of <mark class="removed">read</mark>';
        changes.push(`<div class="modified">modified <mark>${r[1]}</mark> to ${s}</div>`);
      });

      // List deletes
      const removed = next.filter((c) => !current.some((n) => n[1] === c[1]));
      if (removed.length > 0) {
        removed.forEach((r) => changes.push(
          `<div>removed <mark>${r[1]}</mark> which was ${relayReadAndWrite(r, 'removed')}</div>`,
        ));
      }
    }

    return {
      ago: e.created_at,
      changes,
      option: i === 0
        ? '<ins>Backup Complete<ins>'
        : `<a href="#" id="restore-${e.kind}-${i}" class="secondary" onclick="event.preventDefault()">Restore</a>`,
    };
  });

  // Cache the results
  changeCache.set(cacheKey, results);

  return results;
};

/**
 * Generate HTML for history table
 * @param history Array of events
 * @returns HTML string for history table
 */
export const generateHistoryTable = (history: Event[] | null): string => {
  if (!history || history.length === 0) return '<p>none</p>';

  let changes: VersionChange[];
  if (history[0].kind === 0) changes = generateMetadataChanges(history);
  else if (history[0].kind === 3) changes = generateContactsChanges(history as Kind3Event[]);
  else if (history[0].kind === 10002) changes = generateRelayChanges(history as Kind10002Event[]);
  else changes = [];

  return generateChangesTable(changes);
};

/**
 * Make contact references in history clickable
 * @param container The container element
 * @param onContactClick Callback function when a contact is clicked
 */
export const makeContactsClickable = (
  container: HTMLElement,
  onContactClick: (pubkey: string) => void,
): void => {
  const marks = container.querySelectorAll('mark[title]');

  marks.forEach((mark) => {
    const titleAttr = mark.getAttribute('title');
    if (titleAttr && titleAttr.length === 64) {
      // It's a pubkey
      const pubkey = titleAttr;
      mark.classList.add('clickable-contact');

      mark.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        onContactClick(pubkey);
      });
    }
  });
};

/**
 * Activate restore buttons for history events
 * @param history Array of events
 * @param afterRestore Callback function to run after restore
 */
export const activateRestoreButtons = (history: Event[] | null, afterRestore: () => void): void => {
  if (!history) return;

  history.forEach((e, i) => {
    if (i === 0) return;

    const eid = `restore-${e.kind}-${i}`;
    const el = document.getElementById(eid) as HTMLAnchorElement;
    if (!el) return;

    const { id, sig, ...unsigned } = e;
    unsigned.created_at = Math.floor(Date.now() / 1000);

    el.onclick = async (event) => {
      event.preventDefault();

      // Show loading state
      el.setAttribute('aria-busy', 'true');
      el.innerHTML = 'Restoring...';

      const r = await submitUnsignedEvent(unsigned, eid, 'Restored!');

      if (r) {
        // Add success indicator
        const tr = el.closest('tr');
        if (tr) {
          const successIndicator = document.createElement('div');
          successIndicator.className = 'restore-success';
          successIndicator.innerHTML = '<small>✓ Restored</small>';
          successIndicator.style.color = 'green';
          tr.appendChild(successIndicator);
        }

        setTimeout(afterRestore, 1000);
      }
    };
  });
};

/**
 * Load backup history into a container
 * @param RootElementID ID of container element
 * @param kind Event kind to load history for
 * @param onContactClick Optional callback for when contacts are clicked
 */
export const loadBackupHistory = (
  RootElementID: string,
  kind: 0 | 10002 | 3,
  onContactClick?: (pubkey: string) => void,
) => {
  const container = document.getElementById(RootElementID);
  if (!container) return;

  // Set loading state
  container.innerHTML = '<h4>Backup History</h4><p aria-busy="true">Loading history...</p>';

  // Use setTimeout to prevent UI blocking
  setTimeout(() => {
    const h = fetchCachedMyProfileEventHistory(kind);
    const table = generateHistoryTable(h);

    container.innerHTML = `<h4>Backup History</h4>${table}`;

    // Make contacts clickable if callback provided
    if (kind === 3 && onContactClick) {
      makeContactsClickable(container, onContactClick);
    }

    // Add CSS for clickable contacts
    if (!document.getElementById('contact-history-styles')) {
      const style = document.createElement('style');
      style.id = 'contact-history-styles';
      style.textContent = `
        .clickable-contact {
          cursor: pointer;
          text-decoration: none;
        }
        .clickable-contact:hover {
          text-decoration: underline;
        }
        .restore-success {
          margin-top: 5px;
        }
      `;
      document.head.appendChild(style);
    }

    // Activate restore buttons
    activateRestoreButtons(h, () => {
      loadBackupHistory(RootElementID, kind, onContactClick);
    });
  }, 0);
};
