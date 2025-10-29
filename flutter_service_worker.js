'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "888483df48293866f9f41d3d9274a779",
"icons/Icon-512.png": "c50a6963d86611b1eded84edf3bc9c8c",
"icons/Icon-maskable-512.png": "c50a6963d86611b1eded84edf3bc9c8c",
"icons/Icon-192.png": "18b2ef1490ff49b18e040ec91cc8b951",
"icons/Icon-maskable-192_old.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192_old.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512_old.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512_old.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "18b2ef1490ff49b18e040ec91cc8b951",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "93c16feb104623f64576fb44ca84ba4e",
"/": "93c16feb104623f64576fb44ca84ba4e",
"splash/img/light-4x.png": "2198de4d7a3e83d735724767a2725e1c",
"splash/img/dark-4x.png": "2198de4d7a3e83d735724767a2725e1c",
"splash/img/dark-3x.png": "8f140a24210d6088305e261dcbd202f9",
"splash/img/dark-1x.png": "f8b0c7c421da6725d53209eae6f41bda",
"splash/img/dark-2x.png": "1d472e0beaafa4aecdd2d520df1e1a07",
"splash/img/light-1x.png": "f8b0c7c421da6725d53209eae6f41bda",
"splash/img/light-3x.png": "8f140a24210d6088305e261dcbd202f9",
"splash/img/light-2x.png": "1d472e0beaafa4aecdd2d520df1e1a07",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "0124e394e4e9217537e01d88ba24c471",
"assets/assets/splash/splash.png": "c9453d0ec65066d8297b5f39700d6fa1",
"assets/assets/images/img_profile_circle_bg.png": "5879d17640c1080eab5ecc803eb3a38f",
"assets/assets/images/doodle/icon_arrow_down.png": "68f81257fa5b0004df119c11e3838406",
"assets/assets/images/doodle/icon_braces.png": "bfc2d914e8d276019519d35a317a548b",
"assets/assets/images/doodle/icon_arrow_up.png": "9938a8d1f481849ce2e5ed3f61a57529",
"assets/assets/images/doodle/icon_music.png": "8671ebded98561acb5b82cad706153db",
"assets/assets/images/doodle/icon_clock.png": "6a05da8ac6444609c7780350a34ec7e0",
"assets/assets/images/doodle/icon_lightbulb.png": "9c297eca2d29c03e6633c000b44aac87",
"assets/assets/images/doodle/icon_code.png": "c8ae29e586490fb441c762b478aa3ca4",
"assets/assets/images/doodle/icon_mail.png": "f71eef4cf91ecdcfbe8aad956f3c727e",
"assets/assets/images/doodle/icon_macbook.png": "2b41bfa4dce4a0be209bf3ce21685880",
"assets/assets/images/doodle/icon_keyboard.png": "a33c1aaf024c78822249e013aab2a722",
"assets/assets/images/img_home.png": "69ff9c4841a4e6ad6167b2cf4d5b4354",
"assets/assets/images/img_about_me.png": "d56689654d172d7ef39113aece60e9ed",
"assets/assets/images/bg_doodle_items.png": "284a20d69aae62872e617c7c96e431bc",
"assets/assets/images/icon/icon_play_store.png": "9c75499cedf59cb7051d786109ddc9bd",
"assets/assets/images/icon/icon_send.png": "154c32702d8f2b51e0c209f96807872d",
"assets/assets/images/icon/icon_woman.png": "ded94be8721ba6bae2661a6410be7d5a",
"assets/assets/images/icon/icon_down_indicator.png": "e0caa05b06d12e4f5dc5817b608346fb",
"assets/assets/images/icon/icon_home.png": "cd84823d45d3dc019d2efe2bf964b27f",
"assets/assets/images/icon/icon_man.png": "51d232853259ddbc67ff6e68eceec3fe",
"assets/assets/images/icon/icon_send2.png": "f975625c2979d2affe11b7980669023f",
"assets/assets/images/icon/icon_app_store.png": "1cba283a76716b3e31f0e1a0b6dacb39",
"assets/assets/images/icon/icon_person.png": "2f9f9a422284f31c035c39e9d62c463d",
"assets/assets/images/icon/icon_phone.png": "83c3cb69e61bcb740919486e0b4b0cdc",
"assets/assets/images/img_contact_me.png": "8b08fd4b1ee15dfa9ee86663ccbc9fa9",
"assets/assets/images/img_profile_circle_bg_2.png": "fcd70580ba7f2932701d7cc9dc79bdca",
"assets/assets/images/profile_circle_bg.png": "c9124c3dc8e49cd696d908ed4225aaf5",
"assets/assets/images/contact/icon_linkedin.png": "9902e9718614dc2c3eb94c0e4e3dba89",
"assets/assets/images/contact/icon_email.png": "20f510736925b69cf79877a5192c0701",
"assets/assets/images/contact/icon_github.png": "7deb6cd7a28d94105a9d2eafdc8a7e7f",
"assets/assets/images/contact/icon_whatsapp.png": "0bfa2f49a7c856aa367cf36358147519",
"assets/fonts/MaterialIcons-Regular.otf": "8578d8d36ba0865a9533d8396d5cf841",
"assets/NOTICES": "a51d81749fa54e4c2952b29afdbdca8e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "911261115662684980f99eca43f629d2",
"assets/AssetManifest.json": "adcb3b2b1b03b2f5f54271843764480e",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"favicon.png": "e92d74b095533090dc60295befc688cd",
"flutter_bootstrap.js": "8e2973ac2dfebf58e2cca7985e7d3310",
"version.json": "633351b02e8da2b2842c0972056e7eb8",
"main.dart.js": "61cb04fea88be7394087530d05fc5a41"};
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
