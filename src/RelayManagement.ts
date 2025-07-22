import { Event, SimplePool } from 'nostr-tools';

// Use a singleton pattern for the SimplePool to reuse connections
const pool = new SimplePool();

// Track active connections to avoid duplicate connections
const activeRelays = new Set<string>();

/**
 * Request events from specified relays with improved connection management
 * @param pubkeys - Array of public keys to filter events by
 * @param eventProcesser - Callback function to process events
 * @param relays - Array of relay URLs
 * @param kinds - Array of event kinds to filter by
 * @returns Promise that resolves when EOSE is received
 */
export const requestEventsFromRelays = async (
  pubkeys: string[],
  eventProcesser: (event: Event) => void,
  relays: string[],
  kinds: number[],
) => {
  // Filter out duplicate relays
  const uniqueRelays = [...new Set(relays)];

  // Create subscription
  const sub = pool.sub(
    uniqueRelays,
    [{
      kinds,
      authors: pubkeys,
    }],
  );

  // Process events and resolve on EOSE
  return new Promise<void>((r) => {
    sub.on('event', (event: Event) => {
      if (
        pubkeys.indexOf(event.pubkey) !== -1
        && kinds.indexOf(event.kind) !== -1
      ) {
        eventProcesser(event);
      }
    });

    sub.on('eose', () => {
      // Close subscription but keep pool connections alive for reuse
      sub.unsub();
      r();
    });
  });
};

/**
 * Publish an event to specified relays with improved error handling
 * @param event - The event to publish
 * @param relays - Array of relay URLs to publish to
 * @returns Promise that resolves to true if successful, false otherwise
 */
export const publishEventToRelay = async (event: Event, relays: string[]): Promise<boolean> => {
  // Filter out duplicate relays
  const uniqueRelays = [...new Set(relays)];

  try {
    const pub = pool.publish(uniqueRelays, event);
    return await new Promise((r) => {
      // Set a timeout to prevent hanging if relays don't respond
      const timeout = setTimeout(() => r(false), 10000);

      pub.on('ok', () => {
        clearTimeout(timeout);
        r(true);
      });

      pub.on('failed', () => {
        clearTimeout(timeout);
        r(false);
      });
    });
  } catch (error) {
    console.error('Error publishing event:', error);
    return false;
  }
};

/**
 * Close all connections in the pool when they're no longer needed
 * (e.g., when switching pages or logging out)
 */
export const closeAllConnections = (): void => {
  pool.close();
  activeRelays.clear();
};
