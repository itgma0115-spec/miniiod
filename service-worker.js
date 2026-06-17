const CACHE_NAME = "minii-od-v8";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js?v=parent-mode-0d501ed",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
    )).then(() => self.clients.claim()).then(() => self.clients.matchAll({ type: "window" })).then((clients) => {
      clients.forEach((client) => {
        const url = new URL(client.url);
        if (!url.searchParams.has("sw-refresh")) {
          url.searchParams.set("sw-refresh", CACHE_NAME);
          client.navigate(url.href).catch(() => {});
        }
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  const sameOrigin = url.origin === location.origin;
  const shouldRefresh = sameOrigin && (
    event.request.mode === "navigate" ||
    event.request.destination === "script" ||
    event.request.destination === "style" ||
    event.request.destination === "document"
  );

  if (shouldRefresh) {
    event.respondWith(
      fetch(event.request).then((response) => {
        const copy = response.clone();
        if (response.ok) {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        const copy = response.clone();
        if (response.ok && sameOrigin) {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    })
  );
});
