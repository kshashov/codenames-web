'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/config": "5071f16d07a1b6a20d338b51fb31222d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "455bfbb9f30c81a179ad246bbc9b6476",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "23902942935643f7dc6ca7b38b082980",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03aa9b20a1de383e653f912d414dfca4",
".git/logs/refs/heads/master": "03aa9b20a1de383e653f912d414dfca4",
".git/logs/refs/remotes/origin/main": "657f4829eece7898ca7e2bc5de981ec2",
".git/logs/refs/remotes/origin/master": "aad2aec2094a0da3c3a4d524bd27108d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0d/a8700411fab8150d1c374a3580aafeadd1dab4": "8eb79f6a9239b4f432e3b2c9dfb3d9b0",
".git/objects/0e/8b6c9350084fbdd4230090df135821f4813985": "370a55989ee1ee19166d634b5abda3d7",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/12/89e78a0930a877bc6d4ef6807c06ee5bd4ef66": "8e16f2377a563387903613fc39cde4c9",
".git/objects/17/4ae269f802217d5f164d3624c9f46a21b4e03c": "66a568ac04103534074f193a1829226f",
".git/objects/1c/7416419f062f1e6f93ff01fe9d7f299ce03e65": "6a2e76c759245673d0736d1b2b069a32",
".git/objects/1d/c9f20b286956cfb590ed03efd55321f249f15c": "8fdd5b42994a14dd5e05b4691af72b2a",
".git/objects/1e/8f5b6f0d25fa2ef31bb55dfdcf583df8eb0e94": "61e516d4e562b03ec86f2c117e9b16ef",
".git/objects/26/70d687dd8eb98c19b7d3c4ee4ae8d71dac001a": "2600927fd2be54634ae3923eadbb143c",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/9764ec5d1474ce56e538013718a67369298551": "73ffb201b6d5478201b0e792b281bd3a",
".git/objects/31/0c0eae1c7377e3327bcea0529b6d87e30e5784": "c33d47d216bfc8ffad2f1abe6b201426",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3e/5ae74c6ee63a72f6c7e9dfaff4bc2b2c4ed52d": "2791776108dad27f6fa2c9e062925c2d",
".git/objects/42/16db2e417150cd184d9e4a78399077284df468": "f674408e05e6448191a1144b37f733ae",
".git/objects/43/7b2f7528ea9371be861703e80a4bf5bbcc0347": "421b11e0dea83d707abdee9aa90a8c1a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/078b54c125a4d32e9dae328e93ed9cb34d2bbc": "6a561191666b9fecf1cbdace33ccc15c",
".git/objects/4d/47e0175f36d2b7844e50969fb214f1fd202ad1": "b10c18e184f7f16da31846c1debc4047",
".git/objects/4e/0225747c2049cbee706046c7841a2ecedb555e": "e918520a3fe24ec831c00c5b1ce9883e",
".git/objects/59/99e306d9474d764a158d240a5032fec0114fd5": "4491716f360258604a8b8e4d4c1a59db",
".git/objects/5c/9450d41dc6a7df0cd25ebe4430879fef6a6106": "a9f51975acc2f46b55966a8b67b50c15",
".git/objects/63/0a13f8ed5288805a688c34d93a466775284892": "48ace8452a1ebe980a7ccd7ed6b12d18",
".git/objects/63/2d9d10649cc5034384ae7c6b6a083558c7c9af": "36f2f9b01c84b14bd7c8842c0134a9a6",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/76/679d2420c5a74860142bc5678095506d6a87da": "117f9460ab568a19bf5fd11b9e78343e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/c79331c8e559539a08ba44a42d54927e147bc0": "0b953293549546a5e7daddc871df0c65",
".git/objects/7f/6ef2edb9b528b55d67cf2e7eb33bd18fbf31af": "0b928cbfaa84aa56d13150ba5ee3da80",
".git/objects/81/9cca2a838719a41d6ee8b553f9e0b8aad4792d": "ca4ec1efdf9d1a9250a4923f083b93c0",
".git/objects/88/2ab25bd7c136ef7f0a260a99056deb8186dec7": "b7b9e03885e8f35a9fa5e4362c35cc85",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/c84d02dd36a34f62298c7a1067defd8e4b9cf8": "4890bb5713f845d5e7f94e0c949cd792",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/9d/0521a1bc203d75066311fb17712ffdf6270e69": "37f69e33821a59b52e0c23e2372a9b8e",
".git/objects/a0/1ad0a574cf6f13a5281000aa960884786337eb": "01c34a049fcd7cbc39ffa5689b6a8797",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/c877a53132f84b1d13a8385c6aef0922418fbf": "5c9ba9ee125034720560bbb70ecf43a6",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/3251be15e0019c6ae5ac1956ec15c6aad56789": "52b721d51e80cb9fbd500a7ff1ca105f",
".git/objects/ae/a03fbe53235d50839e91f7ea825d9ae63be56f": "3b017cfdc945848f453ee683d056a056",
".git/objects/ae/e4b3b5feabf72d283ad59de6c19f5e80a8c072": "be29a46056a5c91bd3844156a4171f67",
".git/objects/b1/f88fdf2d14d2fcd7815b24a4784488046f835c": "c772142e752f96d81c9b4c4c3eb94133",
".git/objects/b2/599caff558500ab1d14c23e319127dd2ceb917": "3b06e4d08d3d8a7198a5d6a5f421195c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b8e2b4cbfb7519db8404819bf3f0f20b4cfc88": "3ce9e6fe7d8235fa8e3dc195554403bf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/44359da33eeff40a431d79032bbc335caf8b49": "6e2e1fa924a707bdf16827676d86b377",
".git/objects/bc/4b9bdb79f200910a9d4efcfa296ae6c811b2dd": "7109a9e76dae5b8e661946b8cdec00e1",
".git/objects/bf/ceda5e99d1bb3a468db9a529903d40342e70a2": "a6b18007f4f232be8fb2ce1da0c6da2c",
".git/objects/bf/fbc532ea526b1d65d8c29d652a5dff17841bd9": "768c1d86ee22a21f50c30ebaf58d8980",
".git/objects/c1/e19d0cff6e32cd68d46295d998fd08cb501560": "063cc94fcf3b3f2338ede65eb04f6de9",
".git/objects/c8/9b838be9a0d4070170d9cebe424304d70a6db4": "ec1bea152e430cfc7f15f82216484f7a",
".git/objects/c8/b3553254dd548e6cac14014359859b17703e68": "03b9157c08e49841e4f632cadead69c5",
".git/objects/cf/5659d302bfc03033143ab7a4f6dbffdd079a9c": "f0f5305a99cf47ce3fbfc6d6892026dc",
".git/objects/d6/34750aa2b120ab89873c18a3fdbdd1956f49c5": "8dbe205a2aac6d3b6c0c25a2f21a0aaa",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/622474f9467a2361bd635d3715736b03905bc7": "1780d82c383ef506d78eeb6a874d2dfa",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/bdeede4b955429d5412d50986dcb8186b83da1": "61db2ae687cfd50c590fc86c1ae6946f",
".git/objects/e9/c55ee969cac7f0ff06f45699fcde75e90a5ce1": "b160e6182b2bb63ac154a72dfdda9d42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e68b6ab9290481448b2e05194fd2d8c1290487": "5ccbaef0334010e2f81558138c23912e",
".git/objects/ed/423c2d1fbe949f056f19deff419c8dd8cb0c33": "f92f51f99bb69b3ef4d2c120ff65e5d8",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/master": "7a7d85d3728e39e6a174cee00673aafa",
".git/refs/remotes/origin/main": "3caec7ee39f65e3d85f14937bbc75515",
".git/refs/remotes/origin/master": "7a7d85d3728e39e6a174cee00673aafa",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "d82cafa79f72af2cc8a9dc9213d8a114",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25ef7479fb7325dd4f4e459d40ccce0d",
"/": "25ef7479fb7325dd4f4e459d40ccce0d",
"LICENSE": "55e3fca9aa22492557f2c01f64aebc68",
"main.dart.js": "5c59137cf7a58d75aaa5ea66022313a0",
"manifest.json": "484e3229fc38bb38f061d8e10b42eab0",
"README.md": "5133ef5050cb53cddee788d496eedd3f",
"version.json": "85d83e26f38432245eb10e4e495ce22a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
