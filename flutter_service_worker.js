'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5f897f2d2fa777a5354bc23aec32a32b",
"index.html": "11602fa41ac4537036154416b3a49615",
"/": "11602fa41ac4537036154416b3a49615",
"main.dart.js": "600c2a21921825cc99444d6563c026ed",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "44194112e2c151a94c126e13667aa0c4",
"assets/AssetManifest.json": "f076e43064d263e975d94df866604579",
"assets/NOTICES": "913e688c96d2b61457e93a6c5aff5797",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "21d2889dd4a809e86bcd1a5180376d4f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "304b8006ebdd404c9d77bbf46b9d4472",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/triple_dot_loading.json": "c4804385512a9f5476bf32676950a77b",
"assets/assets/images/hooray.png": "461519ecfe471b0772dea19e81ffc752",
"assets/assets/images/no_items_found.json": "3cd31c61bbe4e5693b51d448fd9f85b9",
"assets/assets/images/illustration1.svg": "bdd64c32c73b850add593f6d70a24580",
"assets/assets/images/not_events.png": "ef26b83284f008e8317a6c7d34e7a0a2",
"assets/assets/images/HCK.png": "f05d84953fb015ffa09e06900b95ed1f",
"assets/assets/images/onboard_ill3.png": "43400112472b259a63f3c8f213c81349",
"assets/assets/images/onboard_ill2.png": "22ce8b47e7f448262ee517cefa9a94bf",
"assets/assets/images/herald_white_bars.png": "d1ecdb8c632a85124ed2a27d43693f0f",
"assets/assets/images/onboard_ill1.png": "668019e3eb8e23d695e8514b7dda5071",
"assets/assets/images/in_progress.json": "d29f0611ecc25d68df63e1a384b1a907",
"assets/assets/images/herald_white_bars_blurred.png": "3bf8a9d6d3d595d960f8d44f206a7fd1",
"assets/assets/images/searching1.json": "af1f2aaa90ebda09db3a0699732eb543",
"assets/assets/images/still_working.json": "fcf12a329bf99797f046f1c89d7109f1",
"assets/assets/images/account.webp": "61e1fc7e1b3486c6188e0276d32d5bac",
"assets/assets/images/illustration.png": "7b5c0bf1e9a54df8fbfe5228872ee7bf",
"assets/assets/images/account.png": "b097b8897283e51367eb8d9104187315",
"assets/assets/images/searching0.json": "f6016d8bfc974fa2541964fa8ed7dbbc",
"assets/assets/images/no_routine.png": "4b70fb383d65f854b6ad25de1b4a9332",
"assets/assets/images/celebration.png": "83974b2d4b9b5d8fac073ab069175233",
"assets/assets/images/apple.png": "0828b925d30bfe86b5e7fc9de9178a38",
"assets/assets/images/feedback_success.json": "cd4d5ac67870c618cdf669e0ec98ffc6",
"assets/assets/images/logo.png": "0f81951c816e85828d712ee51d5b16b4",
"assets/assets/images/photoshop_frame.png": "7b80a6a8ff90fdf99d373b15395bd00e",
"assets/assets/images/logo_good.png": "ce72bb2a7a9fc630d589983fc0597626",
"assets/assets/images/logo.jpeg": "f5d6b7e37872b7fa1ad27338af3a7a77",
"assets/assets/images/logo_1.png": "e0d461c1b66329792fa64c3dc9533249",
"assets/assets/images/booklogo.png": "974402eed2f6fef4bdd28c1f2d878944",
"assets/assets/images/searching.json": "3f6331ba8fe4aec8dab5da7b06eeddef",
"assets/assets/images/google.png": "c5dbeb98756b208a329b3e10b564195a",
"assets/assets/images/loading_books.json": "cbdcc94082a45ecd9378edb1d30b0ffa",
"assets/assets/images/hck_ing_group_logo.png": "d7998151415967ce2920a51b4492c214",
"assets/assets/images/no_events.png": "79445cdd59a2b90d9b9434f07fe1b8f0",
"assets/assets/images/searching_dark.json": "e6e2846b1fda789d8e59ec8da7ca6cec",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
