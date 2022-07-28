/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "acda8f37fd07c94137378c4f84dec74d"
  },
  {
    "url": "assets/css/0.styles.557b7b3b.css",
    "revision": "f0026045730d19d531ef50a956d56d05"
  },
  {
    "url": "assets/img/github.7b75d8da.jpg",
    "revision": "7b75d8da3d508bde8530ea5c941e32cd"
  },
  {
    "url": "assets/img/intro.958453e1.png",
    "revision": "958453e110d1385bff23c3acb5ad33af"
  },
  {
    "url": "assets/img/pause.25b6e58f.png",
    "revision": "25b6e58f3ad07d8d201887d503f540d6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.aaae39e9.js",
    "revision": "624ef355886baeba8f4ccb24972d1b4e"
  },
  {
    "url": "assets/js/11.4570689e.js",
    "revision": "0a54937de73524fc3dcbf4e54fb69250"
  },
  {
    "url": "assets/js/12.a9275858.js",
    "revision": "605693279843d6c7bda5abcf9dd267c4"
  },
  {
    "url": "assets/js/13.d81923fb.js",
    "revision": "994e0cc4fe44660b980389b160c77db6"
  },
  {
    "url": "assets/js/14.909498fe.js",
    "revision": "ac995af69704eac1b0b041991c018059"
  },
  {
    "url": "assets/js/15.8b1705dc.js",
    "revision": "4a192c3b129093376950d696058d6309"
  },
  {
    "url": "assets/js/16.e1f111e8.js",
    "revision": "c0a4ef55c6db6035f41642a4877adb08"
  },
  {
    "url": "assets/js/17.0a404166.js",
    "revision": "ffd28895279cf71eb0e7696359a3fa2b"
  },
  {
    "url": "assets/js/18.6be0e7a1.js",
    "revision": "459d113822f1ef79192692191368a013"
  },
  {
    "url": "assets/js/19.28815b8e.js",
    "revision": "939d1d7e547664c7af61d0edbaad7785"
  },
  {
    "url": "assets/js/2.ce41a3cc.js",
    "revision": "bc5939099dc16a4a90a29ab0be711078"
  },
  {
    "url": "assets/js/20.356ad57c.js",
    "revision": "371f5a349b97432a484b70d22ed422ea"
  },
  {
    "url": "assets/js/21.7e05d7b4.js",
    "revision": "58b6a6e2e137f58803def1d39b7823d5"
  },
  {
    "url": "assets/js/22.2db34286.js",
    "revision": "28c789f1342a41b853d52b227e6d0b37"
  },
  {
    "url": "assets/js/23.0431a3b4.js",
    "revision": "87dbf5849968e469fd914de979765d52"
  },
  {
    "url": "assets/js/24.f53172a3.js",
    "revision": "f47cb7fd748d18aaa285a1110cbe12f7"
  },
  {
    "url": "assets/js/25.0a4c572c.js",
    "revision": "f6e8f950da6946b7d5f8967e391894e1"
  },
  {
    "url": "assets/js/26.1a83e269.js",
    "revision": "82442ac66d8c2f567710d0678623cdea"
  },
  {
    "url": "assets/js/27.11273255.js",
    "revision": "27807902a1bfae8f23224567169ded19"
  },
  {
    "url": "assets/js/3.94c1c2b2.js",
    "revision": "cb57db6797ba56860768346f2dff67e2"
  },
  {
    "url": "assets/js/4.b63ce234.js",
    "revision": "212ec46c21943bacb08d03fc2fcffe41"
  },
  {
    "url": "assets/js/5.3418d711.js",
    "revision": "e49deeb2aabe58835473735a9e55e195"
  },
  {
    "url": "assets/js/6.6712526b.js",
    "revision": "9f7ba622943eadbb19b4e89b992feae5"
  },
  {
    "url": "assets/js/7.be476639.js",
    "revision": "1c1c4435b9c4d7855fa1d27d79ef0842"
  },
  {
    "url": "assets/js/8.8a9305f5.js",
    "revision": "516d1a94e2c342ce2507b3a21009a7e2"
  },
  {
    "url": "assets/js/9.354ab891.js",
    "revision": "0b3c3cc2fa547559a9a9ae2d402bc893"
  },
  {
    "url": "assets/js/app.a18aaf3e.js",
    "revision": "4d9b87373fbca999a102e7da6942ce09"
  },
  {
    "url": "configuration/docker-configuration.html",
    "revision": "ff71163dca743e59fe201576fa563683"
  },
  {
    "url": "configuration/error-handling.html",
    "revision": "8d47b3ee0058cdc5bc9a627889ca8d1f"
  },
  {
    "url": "configuration/exception-handling.html",
    "revision": "81b6cdeb1427bfbe9b553c9ce93cfa8c"
  },
  {
    "url": "configuration/index.html",
    "revision": "f102d10ec67106b8af03a3a226c1e075"
  },
  {
    "url": "developer/custom-inspectors.html",
    "revision": "67bdf42f3de1d767cf34367cbedc9cf1"
  },
  {
    "url": "developer/server-spec.html",
    "revision": "42e72a0843f96d0b05e331a0d927ab60"
  },
  {
    "url": "helpers/index.html",
    "revision": "c6801132e01e4c375ec46800071a2f5d"
  },
  {
    "url": "helpers/vd.html",
    "revision": "de7263fb5d69bbe33bf0bd1bcdede708"
  },
  {
    "url": "helpers/vdd.html",
    "revision": "624169f4d39ad9d11660d1103fd9975d"
  },
  {
    "url": "helpers/xr.html",
    "revision": "8b118b999776482298f5e03ab794f392"
  },
  {
    "url": "helpers/xri.html",
    "revision": "f253498ee8f3ca01d943fc962af6f75f"
  },
  {
    "url": "helpers/xrr.html",
    "revision": "cf381a74d66dedbf34d3b5a0490bc730"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "446093aadb7cb1ac2cc0d63dfc504a2d"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "4b31c8180393ef4e7ef0268526a39802"
  },
  {
    "url": "index.html",
    "revision": "02ece07111182772d35499daa4d56613"
  },
  {
    "url": "introduction/contributing.html",
    "revision": "5d681af4555ee38909ced89c9633559b"
  },
  {
    "url": "introduction/index.html",
    "revision": "6f2ad35a0ab3cb91d532e2edd4730c06"
  },
  {
    "url": "introduction/installation.html",
    "revision": "a991953c36a3bf9bf19d4de71efe6e48"
  },
  {
    "url": "introduction/why-xr.html",
    "revision": "f9144159dbe25032a6740bffc6281385"
  },
  {
    "url": "logo.svg",
    "revision": "e86ba77cd18569d687c5e22b7e48bcf3"
  },
  {
    "url": "server/docker.html",
    "revision": "b9f6b20621207ae70fe3c170dbc230bf"
  },
  {
    "url": "server/index.html",
    "revision": "de50bce8234913f6b441a0db29f70846"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
