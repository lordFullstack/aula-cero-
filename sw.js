/* Service worker de Aula: guarda la app en caché para que funcione sin internet.
   Si cambias cualquier archivo de la app, sube el número de VERSION. */
const VERSION = 'aula-v0.1.0';
const ASSETS = [
  './', './index.html', './seed.js', './manifest.webmanifest',
  './vendor/react.production.min.js', './vendor/react-dom.production.min.js',
  './vendor/babel.min.js', './vendor/highlight.min.js', './vendor/github-dark.min.css',
  './icons/icon-192.png', './icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  // Páginas: primero la red (para recibir actualizaciones), si no hay internet, la caché.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  // Archivos estáticos: primero la caché.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    if (r.ok) { const copy = r.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return r;
  })));
});
