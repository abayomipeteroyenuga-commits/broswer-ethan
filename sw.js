const CACHE_NAME='open-browser-v3.0.0';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(CORE)));self.skipWaiting()});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('open-browser-')&&k!==CACHE_NAME).map(k=>caches.delete(k)));await self.clients.claim()})())});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;const url=new URL(req.url);if(url.origin!==self.location.origin)return;
 if(req.mode==='navigate'){event.respondWith((async()=>{try{const res=await fetch(req,{cache:'no-store'});if(res.ok){const c=await caches.open(CACHE_NAME);c.put('./index.html',res.clone())}return res}catch{return(await caches.match('./index.html'))||Response.error()}})());return}
 event.respondWith((async()=>{const cached=await caches.match(req);try{const res=await fetch(req);if(res.ok&&res.type==='basic'){const c=await caches.open(CACHE_NAME);await c.put(req,res.clone())}return res}catch{return cached||Response.error()}})())
});
self.addEventListener('message',event=>{if(event.data==='SKIP_WAITING')self.skipWaiting()});
