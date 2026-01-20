// SafetyFirst.AI Service Worker
const CACHE_NAME = 'safetyfirst-v1';
const urlsToCache = [
  '/',
  '/safetyfirst-pwa.html',
  '/manifest.json'
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Strategy: Network First, Cache Fallback
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Clone the response
        const responseToCache = response.clone();
        
        // Cache successful responses
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        
        return response;
      })
      .catch(() => {
        // Network failed, try cache
        return caches.match(event.request).then((response) => {
          if (response) {
            return response;
          }
          
          // If not in cache, return offline page
          return new Response(
            '<html><body style="font-family:sans-serif;text-align:center;padding:50px;"><h1>⚠️ You\'re Offline</h1><p>Please check your internet connection</p></body></html>',
            {
              headers: { 'Content-Type': 'text/html' }
            }
          );
        });
      })
  );
});

// Background Sync (for offline message queuing)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(syncMessages());
  }
});

async function syncMessages() {
  // Get queued messages from IndexedDB
  // Send them when back online
  // This would be implemented based on your needs
  console.log('Syncing offline messages...');
}

// Push Notifications (optional future feature)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New safety alert',
    icon: '/icon-192.png',
    badge: '/badge-72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now()
    },
    actions: [
      {
        action: 'view',
        title: 'View'
      },
      {
        action: 'close',
        title: 'Close'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('SafetyFirst.AI', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'view') {
    clients.openWindow('/');
  }
});
