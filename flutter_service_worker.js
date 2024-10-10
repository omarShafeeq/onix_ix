'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6ab8a9fbf9365f2e65d38ceb3fbf6d07",
"assets/AssetManifest.bin.json": "3380e2ca25d24d3afc0128b64eb397a7",
"assets/AssetManifest.json": "852740c70a42cae569d10b810d5847ed",
"assets/assets/fonts/Cairo-Bold.ttf": "e558b6a116119d88b796afd3254cc864",
"assets/assets/fonts/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/ReadexPro-Light.ttf": "e857817431deb388a64a1765dce7fc3a",
"assets/assets/fonts/ReadexPro-Medium.ttf": "9fcf5e657533a95bccde973662918f6f",
"assets/assets/fonts/ReadexPro-Regular.ttf": "9b71940fede1d4126e456b7e19f03d29",
"assets/assets/fonts/ReadexPro-SemiBold.ttf": "72348d0ce734e904e654a514779bd4c6",
"assets/assets/icons/back_app_bar.svg": "70305763951c578e2faa3a3cade320c2",
"assets/assets/icons/back_side_menu.png": "74c0ffc0178be68e8160008fc1c1fd83",
"assets/assets/icons/icon_back_app_bar.png": "bd1819f4633ce73b1fe136b20f05a353",
"assets/assets/icons/icon_control_panel.png": "9201d6f8481591892acf0f243f2660a7",
"assets/assets/icons/icon_customer_order.png": "0414dff062c57ffee6252ad5dbee4da5",
"assets/assets/icons/icon_list_tile.png": "b722e1e9986931f35fb32f7a67312274",
"assets/assets/icons/icon_manage_account.png": "0fa8805e5b82ce7e02b1382c94e9713f",
"assets/assets/icons/icon_manage_assets.png": "b35e5eab9532031a450e78989cfc7fa6",
"assets/assets/icons/icon_manage_customer_sales.png": "7a27061c0a02f3baad75d37f0ac7cd4d",
"assets/assets/icons/icon_manage_hajj_umrah%2520.png": "66ffca8aff427349e0a531c2655f542e",
"assets/assets/icons/icon_manage_hospital.png": "4ff32f9a16c774485a201edb237c876f",
"assets/assets/icons/icon_manage_human_capital.png": "aa9a810d88f2142efc1e892083842279",
"assets/assets/icons/icon_manage_logistics.png": "1b2c5695501364f129a49f92683117b4",
"assets/assets/icons/icon_manage_marketing_resource.png": "1b69d60863897529c2091420297dbdab",
"assets/assets/icons/icon_manage_plan.png": "219aa8001d576e2557bfcbc326ba22bd",
"assets/assets/icons/icon_manage_poin_sale.png": "401b99b24615e5cc465587accb3babd1",
"assets/assets/icons/icon_manage_project.png": "d6715b957c8ec07e080a88b842cd2709",
"assets/assets/icons/icon_manage_property.png": "8ad3bcf6c69713d79140f2bd9b10b4bf",
"assets/assets/icons/icon_manage_reservation.png": "b1a3ae926ce4b01a7ffd15cae37bb9e2",
"assets/assets/icons/icon_manage_supplier_purchasing.png": "f974bbee7587deaba081280b40a4d57c",
"assets/assets/icons/icon_manage_warehouse.png": "9b7eff98197cbfbf7993ac91144bdd82",
"assets/assets/icons/icon_point_sales.svg": "5abc74ca98a4b1a7ee7c7007e47546d3",
"assets/assets/icons/image_app_bar.png": "5950088cbb4355556f3ec793b1fab613",
"assets/assets/icons/instance.png": "8cd9d7e80986035c6034fd3001d1e22a",
"assets/assets/icons/logo_onix_ix.png": "5586c5a0430dc5722a4640f141516e98",
"assets/assets/icons/menu_app_bar.png": "2a8af39eeaa8aee6b137d069e56f9956",
"assets/assets/images/pdf_image.png": "832adf31435f6f1e24183b8a84544ff2",
"assets/FontManifest.json": "35f5920b19fd8f9c9daaa19260f956ef",
"assets/fonts/MaterialIcons-Regular.otf": "bf0d9550e68718d0b8b1ec91dd2d8b2f",
"assets/NOTICES": "97c814901ac0c8658ba250ab3cf826d3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "9567d9443f972606d842bc4a8688f8c4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "76ba2283c596338bd1fc7ef58090e167",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "81e1d8992b3b7eb937a028aa483d7613",
"/": "81e1d8992b3b7eb937a028aa483d7613",
"main.dart.js": "2ba134b62779b6ab3019cea20c39a9f7",
"manifest.json": "2e1cb9e003cca78c350e07987d89fd13",
"version.json": "427d2b3d1b8b9dd8fb858a8492d728b0"};
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
