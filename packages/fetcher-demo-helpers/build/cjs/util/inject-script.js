"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectScript;

function injectScript(src) {
  var sc = document.createElement('script');
  sc.src = src; // 不要随便加 crossorigin 否则会报「CORS Missing Allow Origin」

  document.head.appendChild(sc);
}