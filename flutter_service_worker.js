'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192_old.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512_old.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "18b2ef1490ff49b18e040ec91cc8b951",
"icons/Icon-192.png": "18b2ef1490ff49b18e040ec91cc8b951",
"icons/Icon-maskable-512.png": "c50a6963d86611b1eded84edf3bc9c8c",
"icons/Icon-512.png": "c50a6963d86611b1eded84edf3bc9c8c",
"icons/Icon-maskable-192_old.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512_old.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/fonts/MaterialIcons-Regular.otf": "8578d8d36ba0865a9533d8396d5cf841",
"assets/AssetManifest.bin.json": "8a50cbeca1be954f9a7722a894601ee3",
"assets/AssetManifest.bin": "27da6708f4652fc3250bc83b5697bebb",
"assets/AssetManifest.json": "ee67da7fbe49197aa83457278846ff71",
"assets/assets/images/doodle/icon_arrow_up.png": "9938a8d1f481849ce2e5ed3f61a57529",
"assets/assets/images/doodle/icon_lightbulb.png": "9c297eca2d29c03e6633c000b44aac87",
"assets/assets/images/doodle/icon_macbook.png": "2b41bfa4dce4a0be209bf3ce21685880",
"assets/assets/images/doodle/icon_clock.png": "6a05da8ac6444609c7780350a34ec7e0",
"assets/assets/images/doodle/icon_arrow_down.png": "68f81257fa5b0004df119c11e3838406",
"assets/assets/images/doodle/icon_code.png": "c8ae29e586490fb441c762b478aa3ca4",
"assets/assets/images/doodle/icon_braces.png": "bfc2d914e8d276019519d35a317a548b",
"assets/assets/images/doodle/icon_keyboard.png": "a33c1aaf024c78822249e013aab2a722",
"assets/assets/images/doodle/icon_mail.png": "f71eef4cf91ecdcfbe8aad956f3c727e",
"assets/assets/images/doodle/icon_music.png": "8671ebded98561acb5b82cad706153db",
"assets/assets/images/img_home.png": "69ff9c4841a4e6ad6167b2cf4d5b4354",
"assets/assets/images/contact/icon_whatsapp.png": "0bfa2f49a7c856aa367cf36358147519",
"assets/assets/images/contact/icon_linkedin.png": "9902e9718614dc2c3eb94c0e4e3dba89",
"assets/assets/images/contact/icon_github.png": "7deb6cd7a28d94105a9d2eafdc8a7e7f",
"assets/assets/images/contact/icon_email.png": "20f510736925b69cf79877a5192c0701",
"assets/assets/images/icon/icon_phone.png": "83c3cb69e61bcb740919486e0b4b0cdc",
"assets/assets/images/icon/icon_down_indicator.png": "e0caa05b06d12e4f5dc5817b608346fb",
"assets/assets/images/icon/icon_app_store.png": "1cba283a76716b3e31f0e1a0b6dacb39",
"assets/assets/images/icon/icon_home.png": "cd84823d45d3dc019d2efe2bf964b27f",
"assets/assets/images/icon/icon_person.png": "2f9f9a422284f31c035c39e9d62c463d",
"assets/assets/images/icon/icon_send.png": "154c32702d8f2b51e0c209f96807872d",
"assets/assets/images/icon/icon_woman.png": "ded94be8721ba6bae2661a6410be7d5a",
"assets/assets/images/icon/icon_play_store.png": "9c75499cedf59cb7051d786109ddc9bd",
"assets/assets/images/icon/icon_send2.png": "f975625c2979d2affe11b7980669023f",
"assets/assets/images/icon/icon_man.png": "51d232853259ddbc67ff6e68eceec3fe",
"assets/assets/images/profile_circle_bg.png": "c9124c3dc8e49cd696d908ed4225aaf5",
"assets/assets/images/img_contact_me.png": "8b08fd4b1ee15dfa9ee86663ccbc9fa9",
"assets/assets/images/img_about_me.png": "d56689654d172d7ef39113aece60e9ed",
"assets/assets/images/img_profile_circle_bg.png": "5879d17640c1080eab5ecc803eb3a38f",
"assets/assets/images/bg_doodle_items.png": "284a20d69aae62872e617c7c96e431bc",
"assets/assets/splash/splash.png": "c9453d0ec65066d8297b5f39700d6fa1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "9631bed38c27eebda4652bbe73b401d8",
"main.dart.js": "4730cf0469d487c441417c75baf2fc93",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"version.json": "4a6790013348351bda2f307c978319cb",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"flutter_bootstrap.js": "faffa5a1faf00a04ebaf5feb49ce619a",
"splash/img/light-3x.png": "8f140a24210d6088305e261dcbd202f9",
"splash/img/dark-4x.png": "2198de4d7a3e83d735724767a2725e1c",
"splash/img/light-1x.png": "f8b0c7c421da6725d53209eae6f41bda",
"splash/img/dark-1x.png": "f8b0c7c421da6725d53209eae6f41bda",
"splash/img/light-2x.png": "1d472e0beaafa4aecdd2d520df1e1a07",
"splash/img/dark-2x.png": "1d472e0beaafa4aecdd2d520df1e1a07",
"splash/img/dark-3x.png": "8f140a24210d6088305e261dcbd202f9",
"splash/img/light-4x.png": "2198de4d7a3e83d735724767a2725e1c",
"favicon.png": "e92d74b095533090dc60295befc688cd",
"index.html": "947a0e3645ac8bf557ba6b44b7298da8",
"/": "947a0e3645ac8bf557ba6b44b7298da8",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
