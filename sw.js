const CACHE_NAME = 'hub-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/css/style.css',
  '/js/theme.js',
  '/icon.png',
  '/modules/formulare/detailing.html',
  '/modules/formulare/generator.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const accept = req.headers.get('accept') || '';
  const isHtml = req.mode === 'navigate' || accept.includes('text/html');

  event.respondWith(
    (async () => {
      if (isHtml) {
        try {
          const networkRes = await fetch(req);
          const cache = await caches.open(CACHE_NAME);
          cache.put(req, networkRes.clone());
          return networkRes;
        } catch (e) {
          const cached = await caches.match(req);
          if (cached) return cached;
          return caches.match('/index.html');
        }
      }

      const cached = await caches.match(req);
      if (cached) return cached;

      const networkRes = await fetch(req);
      return networkRes;
    })()
  );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});
