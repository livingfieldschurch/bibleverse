
const CACHE = "bible-memory-v2";
const FILES = ["./","./index.html","./styles.css","./verses.js","./manifest.webmanifest","./living-fields-logo.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("fetch", e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));

self.addEventListener("push", event => {
  let data = {};

  if (event.data) {
    try {
      data = event.data.json();
    } catch {
      data = { body: event.data.text() };
    }
  }

  const title = data.title || "Living Fields Church";
  const options = {
    body: data.body || "Your Bible memory verse is ready.",
    icon: "./living-fields-logo.png",
    badge: "./living-fields-logo.png",
    data: {
      url: data.url || "./"
    }
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

self.addEventListener("notificationclick", event => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
