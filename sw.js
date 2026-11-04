/* Offline support for Home Lab Roadmap.
   Change CACHE_VERSION whenever you edit any file, so installed copies pick up the update. */
const CACHE_VERSION = "v3";
const CACHE = "homelab-roadmap-" + CACHE_VERSION;
const SHELL = [
  "./",
  "index.html",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "icon-maskable-512.png",
  "apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) { return cache.addAll(SHELL); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) {
        return k.indexOf("homelab-roadmap-") === 0 && k !== CACHE;
      }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

/* Serve from cache right away, refresh it in the background. Works for the
   page itself and for the Google Fonts files once they have been loaded once. */
self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;
  var url = new URL(req.url);
  var sameOrigin = url.origin === self.location.origin;
  var fonts = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !fonts) return;

  event.respondWith(
    caches.open(CACHE).then(function (cache) {
      return cache.match(req, { ignoreSearch: sameOrigin }).then(function (hit) {
        var refresh = fetch(req).then(function (res) {
          if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
          return res;
        }).catch(function () { return hit; });
        if (hit) return hit;
        return refresh.then(function (res) {
          if (res) return res;
          if (req.mode === "navigate") return cache.match("index.html");
          return Response.error();
        });
      });
    })
  );
});
