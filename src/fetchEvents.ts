import { Event, UnsignedEvent } from 'nostr-tools';
import { sanitize } from 'isomorphic-dompurify';
import { localStorageGetItem, localStorageSetItem } from './LocalStorage';
import { publishEventToRelay, requestEventsFromRelays } from './RelayManagement';

// In-memory cache to reduce localStorage reads/writes
const eventCache: { [key: string]: Event[] } = {};
const profileCache: { [pubkey: string]: { [kind: number]: Event } } = {};

/**
 * Check when events were last fetched from relays
 * @returns Timestamp of last fetch or null if never fetched
 */
export const lastFetchDate = (): number | null => {
  const d = localStorageGetItem('my-profile-last-fetch-date');
  if (d === null) return null;
  return Number(d);
};

// Track if we've fetched data in the current session
let fetchedthissession: boolean = false;

/**
 * Update the timestamp of the last fetch from relays
 */
export const updateLastFetchDate = (): void => {
  fetchedthissession = true;
  localStorageSetItem('my-profile-last-fetch-date', Date.now().toString());
};

/**
 * Check when profile was last updated
 * @returns Timestamp of last update or null if never updated
 */
export const lastUpdateDate = (): number | null => {
  const d = localStorageGetItem('my-profile-last-update-date');
  if (d === null) return null;
  return Number(d);
};

/**
 * Update the timestamp of the last profile update
 */
export const updateLastUpdateDate = (): void => {
  localStorageSetItem('my-profile-last-update-date', Date.now().toString());
};

/**
 * Check if profile data is up-to-date in this session
 * @returns True if data has been fetched in this session
 */
export const isUptodate = (): boolean => fetchedthissession;

/**
 * Check if we have the latest profile data
 * @returns True if the last fetch happened after the last update (with a 10s buffer)
 */
export const hadLatest = (): boolean => {
  if (!isUptodate()) return false;
  const f = lastFetchDate();
  const u = lastUpdateDate();
  return !(u === null || f === null || u > (f - 10000));
};

/**
 * Store a profile event in cache and localStorage
 * @param event Event to store
 * @returns true if stored, false if duplicate, wrong kind or wrong pubkey
 */
export const storeMyProfileEvent = (event: Event): boolean => {
  // Throw if no pubkey in localStorage
  if (localStorageGetItem('pubkey') === null) {
    throw new Error('storeMyProfileEvent no pubkey in localStorage');
  }

  // Return false if unsupported kind or from a different pubkey
  if (
    !(event.kind === 0 || event.kind === 2 || event.kind === 10002 || event.kind === 3)
    || event.pubkey !== localStorageGetItem('pubkey')
  ) return false;

  const arrayname = `my-profile-event-${event.kind}`;

  // Initialize cache if needed
  if (!eventCache[arrayname]) {
    const ls = localStorageGetItem(arrayname);
    eventCache[arrayname] = ls === null ? [] : JSON.parse(ls) as Event[];
  }

  // Check if event already exists in cache
  if (eventCache[arrayname].some((e) => e.id === event.id)) return false;

  // Add event to cache
  eventCache[arrayname].push(event);

  // Efficiently update localStorage
  localStorageSetItem(arrayname, JSON.stringify(eventCache[arrayname]));

  // Update last updated date
  updateLastUpdateDate();

  return true;
};

/**
 * Get event history for a given kind from cache
 * @param kind Event kind to retrieve
 * @returns Array of events sorted by creation date, or null if none found
 */
export const fetchCachedMyProfileEventHistory = (
  kind: 0 | 2 | 10002 | 3,
): null | [Event, ...Event[]] => {
  // Get array name
  const arrayname = `my-profile-event-${kind}`;

  // Use cached data if available
  if (!eventCache[arrayname]) {
    const ls = localStorageGetItem(arrayname);
    // Return null if no events are cached
    if (ls === null) return null;

    // Parse and cache events
    eventCache[arrayname] = JSON.parse(ls) as Event[];
  }

  // Return null if the array is empty
  if (eventCache[arrayname].length === 0) return null;

  // Return sorted events array
  return eventCache[arrayname].sort((x, y) => y.created_at - x.created_at) as [Event, ...Event[]];
};

/**
 * Get the most recent event for a given kind
 * @param kind Event kind to retrieve
 * @returns Most recent event or null if none found
 */
export const fetchCachedMyProfileEvent = (kind: 0 | 2 | 10002 | 3): null | Event => {
  const a = fetchCachedMyProfileEventHistory(kind);
  if (a === null) return null;
  return a[0];
};

/**
 * Get relays from kind 10002 event or use defaults
 * @returns Array of relay URLs
 */
const getRelays = () => {
  const e = fetchCachedMyProfileEvent(10002);
  const myrelays = !e ? [] : e.tags.filter((t) => t[0] === 'r').map((r) => r[1]);

  // Return minimum of 3 relays, filling in with default relays (removing duplicates)
  return myrelays.length > 3 ? myrelays : [...new Set([
    ...myrelays,
    'wss://hist.nostr.land',
    'wss://relay.damus.io',
    'wss://nostr-pub.wellorder.net',
    'wss://purplepag.es',
    'wss://relay.nos.social',
    'wss://relay.nostr.band',
    'wss://relay.snort.social',
  ])].slice(0, 3);
};

/**
 * Fetch profile events from relays or cache
 * @param pubkey Public key to fetch events for
 * @param profileEventProcesser Callback function to process events
 */
export const fetchMyProfileEvents = async (
  pubkey: string,
  profileEventProcesser: (event: Event) => void,
): Promise<void> => {
  // Skip fetching if data is up-to-date
  if (!isUptodate()) {
    const starterRelays = getRelays();
    let additionalRelaysFound = false;

    // Fetch events from relays
    await requestEventsFromRelays([pubkey], (event: Event) => {
      // Track if we find additional write relays
      if (event.kind === 10002) {
        const existingRelays = new Set(starterRelays);
        const newWriteRelays = event.tags
          .filter((t) => t[0] === 'r' && (!t[2] || t[2] === 'write'))
          .map((t) => t[1])
          .filter((relay) => !existingRelays.has(relay));

        if (newWriteRelays.length > 0) {
          additionalRelaysFound = true;
        }
      }

      // Store event and process it
      storeMyProfileEvent(event);
      profileEventProcesser(event);
    }, starterRelays, [0, 2, 10002, 3]);

    // Fetch again with expanded relay list if needed
    if (additionalRelaysFound) {
      const newRelayList = getRelays(); // This will now include any new relays found

      // Only fetch again if we have a different relay list
      if (JSON.stringify(newRelayList) !== JSON.stringify(starterRelays)) {
        await requestEventsFromRelays([pubkey], (event: Event) => {
          storeMyProfileEvent(event);
          profileEventProcesser(event);
        }, newRelayList, [0, 2, 10002, 3]);
      }
    }

    // Update last fetch timestamp
    updateLastFetchDate();
  } else {
    // Load from cache
    [0, 2, 10002, 3].forEach((k) => {
      const e = fetchCachedMyProfileEvent(k as 0 | 2 | 10002 | 3);
      if (e !== null) profileEventProcesser(e);
    });
  }
};

/**
 * Store user profile events in memory cache
 * @param event Event to store
 */
const storeProfileEvent = (event: Event) => {
  if (!profileCache[event.pubkey]) profileCache[event.pubkey] = {};
  if (
    // No event of kind for pubkey
    !profileCache[event.pubkey][event.kind]
    // Newer event of kind received
    || profileCache[event.pubkey][event.kind].created_at < event.created_at
  ) {
    // Store it
    profileCache[event.pubkey][event.kind] = event;
  }
};

/**
 * Fetch profile events for all contacts
 */
export const fetchMyContactsProfileEvents = async () => {
  const c = fetchCachedMyProfileEvent(3);
  if (!c || c.tags.length === 0) return;

  // Filter for contacts not already in cache
  const required = c.tags
    .filter((t) => t[0] === 'p')
    .map((t) => t[1])
    .filter((pubkey) => !profileCache[pubkey]);

  if (required.length > 0) {
    await requestEventsFromRelays(
      required,
      storeProfileEvent,
      getRelays(),
      [0, 10002, 3],
    );
  }
};

/**
 * Get cached profile event for a specific pubkey and kind
 * @param pubkey Public key to get event for
 * @param kind Event kind to get
 * @returns Event or null if not found
 */
export const fetchCachedProfileEvent = (pubkey: string, kind: 0 | 10002 | 3): Event | null => {
  if (localStorageGetItem('pubkey') === pubkey) return fetchCachedMyProfileEvent(kind);
  if (!profileCache[pubkey]) return null;
  if (!profileCache[pubkey][kind]) return null;
  return profileCache[pubkey][kind];
};

/**
 * Get all cached profile events of a specific kind
 * @param kind Event kind to get
 * @returns Array of events
 */
export const fetchAllCachedProfileEvents = (
  kind: 0 | 10002 | 3,
): Event[] => Object.keys(profileCache)
  .filter((p) => !!profileCache[p][kind])
  .map((p) => profileCache[p][kind]);

/**
 * Fetch profile events for multiple pubkeys
 * @param pubkeys Array of public keys
 * @param kind Event kind to fetch
 * @param relays Optional array of relays to use
 * @returns Array of events or nulls
 */
export const fetchProfileEvents = async (
  pubkeys: [string, ...string[]],
  kind: 0 | 10002 | 3,
  relays?: string[] | null,
): Promise<[(Event | null), ...(Event | null)[]]> => {
  // Filter out pubkeys already in cache
  const notcached = pubkeys.filter((p) => !fetchCachedProfileEvent(p, kind));

  if (notcached.length > 0) {
    await requestEventsFromRelays(
      notcached,
      storeProfileEvent,
      relays || getRelays(),
      [0, 10002, 3],
    );
  }

  // Return events for all requested pubkeys
  return pubkeys.map(
    (p) => fetchCachedProfileEvent(p, kind),
  ) as [(Event | null), ...(Event | null)[]];
};

/**
 * Fetch profile event for a single pubkey
 * @param pubkey Public key to fetch event for
 * @param kind Event kind to fetch
 * @param relays Optional array of relays to use
 * @returns Event or null if not found
 */
export const fetchProfileEvent = async (
  pubkey: string,
  kind: 0 | 10002 | 3,
  relays?: string[] | null,
): Promise<Event | null> => {
  const r = await fetchProfileEvents([pubkey], kind, relays);
  return r[0];
};

/**
 * Get the most popular petname for a contact among all contacts
 * @param pubkey Public key to get petname for
 * @returns Sanitized petname or null if none found
 */
export const getContactMostPopularPetname = (pubkey: string): string | null => {
  // Count petnames for this pubkey across all contacts
  const petnamecounts: { [petname: string]: number } = Object.keys(profileCache)
    .map((pk) => {
      if (!profileCache[pk][3]) return null;
      const petnametag = profileCache[pk][3].tags.find((t) => t[1] === pubkey && t[3]);
      if (petnametag) return sanitize(petnametag[3]);
      return null;
    })
    .reduce((pv, c) => {
      if (!c) return pv;
      if (!pv[c]) return { ...pv, [c]: 1 };
      return { ...pv, [c]: pv[c] + 1 };
    }, {} as { [petname: string]: number });

  if (Object.keys(petnamecounts).length === 0) return null;

  // Return most frequent petname
  return sanitize(
    Object.keys(petnamecounts).sort((a, b) => petnamecounts[b] - petnamecounts[a])[0],
  );
};

/**
 * Get my petname for a specific user
 * @param pubkey Public key to get petname for
 * @returns Sanitized petname or null if none found
 */
export const getMyPetnameForUser = (pubkey: string): string | null => {
  const e = fetchCachedMyProfileEvent(3);
  if (e) {
    const mypetname = e.tags.find((t) => t[1] === pubkey && t[3]);
    if (mypetname) return sanitize(mypetname[3]);
  }
  return null;
};

/**
 * Get my relay for a specific user
 * @param pubkey Public key to get relay for
 * @returns Relay URL or null if none found
 */
export const getMyRelayForUser = (pubkey: string): string | null => {
  const e = fetchCachedMyProfileEvent(3);
  if (e) {
    const relay = e.tags.find((t) => t[1] === pubkey && t[2] && t[2] !== '');
    if (relay) return relay[2];
  }
  return null;
};

/**
 * Check if a user is in my contacts
 * @param pubkey Public key to check
 * @returns True if user is a contact, false if not, null if contacts not loaded
 */
export const isUserMyContact = (pubkey: string): boolean | null => {
  const e = fetchCachedMyProfileEvent(3);
  if (e) {
    if (e.tags.some((t) => t[1] === pubkey)) return true;
    return false;
  }
  return null;
};

/**
 * Get sanitized contact name
 * @param pubkey Public key to get name for
 * @returns Sanitized name
 */
export const getContactName = (pubkey: string): string => {
  // Check if it's my own pubkey
  if (localStorageGetItem('pubkey') === pubkey) {
    const m = fetchCachedMyProfileEvent(0);
    if (m) {
      const { name } = JSON.parse(m.content);
      if (name) return sanitize(name);
    }
  } else {
    // Check my petname for contact
    const mypetname = getMyPetnameForUser(pubkey);
    if (mypetname) return mypetname;

    // Check their kind 0 name
    if (profileCache[pubkey]) {
      if (profileCache[pubkey][0]) {
        const { name, display_name } = JSON.parse(profileCache[pubkey][0].content);
        if (name) return sanitize(name);
        if (display_name) return sanitize(display_name);
      }
    }
  }

  // Check most popular petname
  const popularpetname = getContactMostPopularPetname(pubkey);
  if (popularpetname) return `${popularpetname} (?)`;

  // Return shortened pubkey
  return `${pubkey.substring(0, 10)}...`;
};

/**
 * Publish an event to all relevant relays
 * @param event Event to publish
 * @returns True if successful, false otherwise
 */
export const publishEvent = async (event: Event): Promise<boolean> => {
  storeMyProfileEvent(event);

  // Get all relevant relays
  const relays = [
    ...getRelays(),
    'wss://nostr.mutinywallet.com', // blastr
    'wss://purplepag.es',
    'wss://relay.nos.social',
    'wss://relay.nostr.band',
    'wss://relay.snort.social',
  ];

  // Use a Set to remove duplicates
  const uniqueRelays = [...new Set(relays)];

  return publishEventToRelay(event, uniqueRelays);
};

/**
 * Submit an unsigned event for signing and publishing
 * @param e Unsigned event to submit
 * @param ElementId ID of the button or anchor element
 * @param innerHTMLAfterSuccess What the button should read after success
 * @returns True if published, false otherwise
 */
export const submitUnsignedEvent = async (
  e: UnsignedEvent,
  ElementId: string,
  innerHTMLAfterSuccess: string = 'Update',
): Promise<boolean> => {
  const b = document.getElementById(ElementId) as HTMLButtonElement | HTMLAnchorElement;
  if (!b) return false;

  // Set loading status
  b.setAttribute('disabled', '');
  b.setAttribute('aria-busy', 'true');
  b.innerHTML = 'Signing...';

  // Check if nostr extension is available
  if (!window.nostr) return new Promise((r) => { r(false); });

  try {
    // Sign event
    const ne = await window.nostr.signEvent(e);

    // Update button
    b.innerHTML = 'Sending...';

    // Publish
    const r = await publishEvent(ne);

    // Update button
    b.removeAttribute('aria-busy');
    b.innerHTML = 'Received by Relays!';

    // Reset button after delay
    setTimeout(() => {
      b.innerHTML = innerHTMLAfterSuccess;
      b.removeAttribute('disabled');
    }, 1000);

    return r;
  } catch (error) {
    console.error('Error signing or publishing event:', error);

    // Reset button
    b.removeAttribute('aria-busy');
    b.removeAttribute('disabled');
    b.innerHTML = 'Error! Try again';

    return false;
  }
};
