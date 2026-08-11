
const CACHE = "bible-memory-v2";
const FILES = ["./","./index.html","./styles.css","./verses.js","./manifest.webmanifest","./living-fields-logo.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
