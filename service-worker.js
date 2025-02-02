const CACHE_NAME = 'quran-app-v1';
const API_CACHE = 'quran-api-cache-v1';

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/quran-data.js',
    'https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap'
];

// Install Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(STATIC_ASSETS))
    );
});

// Activate Service Worker
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME && name !== API_CACHE)
                    .map(name => caches.delete(name))
            );
        })
    );
});

// Fetch Event Handler
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);
    
    // Handle API requests
    if (url.pathname.includes('/api.alquran.cloud/')) {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    const clonedResponse = response.clone();
                    caches.open(API_CACHE)
                        .then(cache => cache.put(event.request, clonedResponse));
                    return response;
                })
                .catch(() => {
                    return caches.match(event.request);
                })
        );
        return;
    }
    
    // Handle static assets
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const clonedResponse = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, clonedResponse));
                        return response;
                    });
            })
    );
});
