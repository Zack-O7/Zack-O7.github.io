'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7f6dab1e3b62035cb6f629bd51ff5a58",
"assets/AssetManifest.bin.json": "7a271526dc32e630767418a3b5921c35",
"assets/AssetManifest.json": "ea03b4285463ac9f080cbb736fe5b471",
"assets/assets/3d/glb/about.glb": "4febb9f95f64a5a97ae6927951f64fa5",
"assets/assets/3d/glb/about_myself_in_cube.glb": "58ca1ba5ef1274c70eda61fd3a1c8346",
"assets/assets/3d/glb/about_myself_in_cube6.1.glb": "a9b30b4b95806b42379075c4f8958b1d",
"assets/assets/3d/glb/about_myself_in_cube6.2.glb": "6edd37b9f246b32a7987db8f70b7eaee",
"assets/assets/3d/glb/c++_logo.glb": "832d5a83279a47e8ce638719925c9afd",
"assets/assets/3d/glb/dart_logo.glb": "23a63ee885437eb96e9688991b5453e5",
"assets/assets/3d/glb/dart_logo_with_name.glb": "96653ecee37a5f7dc8d6c565126c8352",
"assets/assets/3d/glb/flutter_logo_bg_b.glb": "0af8e57a45df320a5141a5ccc17aad98",
"assets/assets/3d/glb/flutter_logo_bg_b_with_name.glb": "17d9a6dc68abfa00b63ce81452b034be",
"assets/assets/3d/glb/flutter_logo_bg_w.glb": "8ad4a49da93885970db50d9d4627cad0",
"assets/assets/3d/glb/flutter_logo_bg_w_with_name.glb": "fe870572874abcd009b93be80b79b7b6",
"assets/assets/3d/glb/git_logo_bg_b.glb": "5a8ab3d0a57870d3afc8fcae1ff8cfc1",
"assets/assets/3d/glb/git_logo_bg_b_with_name.glb": "6f28128660192feeb6e6cf92462e9941",
"assets/assets/3d/glb/git_logo_bg_w.glb": "4d0d3e420d523dc1ce0eec691a32a78e",
"assets/assets/3d/glb/git_logo_bg_w_with_name.glb": "8029672224380e82b83fb64330c88a31",
"assets/assets/3d/glb/nodejs_logo_bg_b.glb": "b87469d32e3150184689a83d4a6f37be",
"assets/assets/3d/glb/nodejs_logo_bg_b_with_name.glb": "552950e6c1adb9953857a85b4d9346ea",
"assets/assets/3d/glb/nodejs_logo_bg_w.glb": "37149df4e9d019b20d7aaa53e1d92f87",
"assets/assets/3d/glb/nodejs_logo_bg_w_with_name.glb": "925a5bdcab0c407a00770e79613a790c",
"assets/assets/3d/glb/sqlite_logo.glb": "bb63e5ed87e92e061bc80a863139852a",
"assets/assets/3d/glb/sqlite_logo_with_name.glb": "a7f8728441ff29cff67e7c0053b3dd9c",
"assets/assets/images/about.svg": "10f84cf2d115f47b2182555e2cfe7b10",
"assets/assets/images/about2.svg": "eb055989c98f4c68c6d12cbdfe800f9d",
"assets/assets/images/about3.svg": "4dfdd54b648c5ca62670965bd0c126ff",
"assets/assets/images/about4.svg": "33503085c248c433d77d133ae2cc8069",
"assets/assets/images/about5.svg": "2a1bdf250ad0099e99eb6a830b8bc70e",
"assets/assets/images/abstract_design.psd": "b922ec469ce74e94185433072c31e3bb",
"assets/assets/images/abstract_design1.png": "2918653c5a96afa7552e366357f9bd19",
"assets/assets/images/abstract_design_cyan.png": "494a20a905e71af7193d90321f32681d",
"assets/assets/images/abstract_design_g.png": "6c1f4018795bd475fd7763a40868eb8c",
"assets/assets/images/bg-with-wire-mesh.png": "6bc88d78fc8a98feb6f984c2cf10db2b",
"assets/assets/images/bg-with-wire-mesh2.png": "ff2b2b4c0f11ff7b30e84436f24e86f3",
"assets/assets/images/boy.gif": "81b71c1797eedc3707ac16f7a0ed937e",
"assets/assets/images/circle-green.png": "3445eedbe3a5ffd1dc6ea6cdc82addc9",
"assets/assets/images/hollogram.png": "431ebe6c37eb1c778d23604dc0351a2c",
"assets/assets/images/info.gif": "5f14325ea518e2004cff0c3d1c3f6a24",
"assets/assets/images/info.png": "08608be97709721b54e26f59771b5a2c",
"assets/assets/images/My3.png": "4a8da5f5db878c9abf3825e5b1c48bd3",
"assets/assets/images/safe_logo.png": "1b7bb3af402cec197cc7b3f710a409a1",
"assets/assets/images/soften_logo.png": "911687cef262edebf6a2cdb013dd73d3",
"assets/assets/lottie/about.json": "34ff1afb1731f506007a92d2f86e0d0a",
"assets/assets/lottie/bg_design_blue.json": "c3b02653ff10026c3bfe30ec786fc6a1",
"assets/assets/lottie/bg_design_green.json": "c3b02653ff10026c3bfe30ec786fc6a1",
"assets/assets/lottie/bg_design_lgreen.json": "c3b02653ff10026c3bfe30ec786fc6a1",
"assets/assets/lottie/coding.json": "77545623bfee2036577c6360378d058e",
"assets/assets/lottie/contact_bg.json": "f2292d9278417c805d0b0a3e9b734687",
"assets/assets/lottie/contact_tab.json": "6ae0276a3378d5abacf46b732153e023",
"assets/assets/lottie/contact_tab2.json": "8bb4ce35db7e360e61186e4903c4e7b7",
"assets/assets/lottie/contact_wg.json": "85f371990dbb5176a850bef3fa23a634",
"assets/assets/lottie/laptop.json": "69a6c5fafe9da4a187305124763b9e73",
"assets/assets/lottie/working.json": "15b9f0be6d18b4335e99bbb8b8677d03",
"assets/assets/rive/helix_loader.riv": "33c6538b8365bb026d67a99571e18895",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "83590e490b32c2bb32f308678d0da783",
"assets/NOTICES": "0424aece549a362d5afc14d94ee23b98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "4226392bee9372f20a688343e51e7b54",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
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
"index.html": "1acc9365db94aaa3c1402f65f07a5ea8",
"/": "1acc9365db94aaa3c1402f65f07a5ea8",
"main.dart.js": "6f8dc66556898df7e8b7b24ed89f43ac",
"manifest.json": "0b8e5d2ba9c8f6145416bdd4761d16e9",
"version.json": "700999db9d6e3c14bef125acfc93b4b7"};
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
