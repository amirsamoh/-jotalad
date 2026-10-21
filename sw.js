// service worker ขั้นต่ำ เพื่อให้ติดตั้งเป็นแอปได้ (ไม่แคชข้อมูล)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
