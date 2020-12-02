"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _basic = require("./_basic");

Object.keys(_basic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _basic[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _basic[key];
    }
  });
});

var _promisify = require("./_promisify");

Object.keys(_promisify).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _promisify[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _promisify[key];
    }
  });
});