// Service Worker básico para permitir instalación de PWA
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      // Si falla la red, intenta buscar en caché (vacío por ahora)
      return caches.match(event.request);
    })
  );
});