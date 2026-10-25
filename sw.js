// Versi cache: NAIKKAN nombor ini setiap kali fail projek diubah.
const CACHE_NAME = 'menu-dm-kvsp1-v3';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './calendar.js',
  './app.js',
  './manifest.webmanifest',
  './favicon.svg',
  './logo-kvsp1.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

// Network-first: pengguna sentiasa dapat versi terkini apabila dalam talian;
// cache hanya digunakan sebagai sandaran luar talian.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(req, { cache: 'no-cache' }).then((response) => {
      if (response && response.ok) {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, clone));
      }
      return response;
    }).catch(() => caches.match(req).then((cached) => cached || (req.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});
