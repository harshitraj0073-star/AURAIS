/* NEXORA service worker — offline-first caching for the installable PWA. */
const CACHE = 'nexora-v5';

/* Prerendered on install so the app still boots with no network. */
const ASSETS = ['./', './index.html', './style.css', './script.js', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];

/* Core files are served NETWORK-FIRST. Cache-first would pin every returning
   visitor to whatever assets were live when they first arrived — a new deploy
   would never reach them until they cleared site data manually. Network-first
   keeps the offline fallback but always prefers the latest build. */
const NETWORK_FIRST = ['index.html', 'style.css', 'script.js'];

function isNetworkFirst(url) {
  let path;
  try { path = new URL(url).pathname; } catch (e) { return false; }
  if (path.endsWith('/') || path.endsWith('/index.html')) return true;
  return NETWORK_FIRST.some(name => path.endsWith('/' + name));
}

function putInCache(request, response) {
  if (response && response.status === 200 && response.type === 'basic') {
    const copy = response.clone();
    caches.open(CACHE).then(cache => cache.put(request, copy)).catch(() => {});
  }
  return response;
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
      .catch(() => { /* local assets only — a failed fetch must not block install */ })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const offlineFallback = () => caches.match('./index.html');

  if (isNetworkFirst(event.request.url)) {
    event.respondWith(
      fetch(event.request)
        .then((response) => putInCache(event.request, response))
        .catch(offlineFallback)
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => putInCache(event.request, response))
        .catch(offlineFallback);
    })
  );
});
