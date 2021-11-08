<<<<<<< HEAD
self.addEventListener("install",(e=>{self.skipWaiting()})),self.addEventListener("activate",(e=>{e.waitUntil(self.clients.claim()),self.registration.unregister().then((()=>{console.log("NGSW Safety Worker - unregistered old service worker")}))}));
=======
self.addEventListener("install",(e=>{self.skipWaiting()})),self.addEventListener("activate",(e=>{e.waitUntil(self.clients.claim()),e.waitUntil(self.registration.unregister().then((()=>{console.log("NGSW Safety Worker - unregistered old service worker")}))),e.waitUntil(caches.keys().then((e=>{const t=e.filter((e=>/^ngsw:/.test(e)));return Promise.all(t.map((e=>caches.delete(e))))})))}));
>>>>>>> 6eedd748c47c2569326938b60dc80bc63c08fa1b
