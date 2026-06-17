// Service worker desactivado intencionalmente.
// Se mantiene el archivo para desregistrar versiones anteriores
// que pudieron interferir con los datos de la app.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
