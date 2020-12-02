"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _enum = require("./enum");

Object.keys(_enum).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _enum[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _enum[key];
    }
  });
});