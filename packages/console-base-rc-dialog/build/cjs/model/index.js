"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Provider: true,
  Context: true
};
Object.defineProperty(exports, "Provider", {
  enumerable: true,
  get: function get() {
    return _provider.default;
  }
});
Object.defineProperty(exports, "Context", {
  enumerable: true,
  get: function get() {
    return _provider.Context;
  }
});

var _provider = _interopRequireWildcard(require("./provider"));

var _hook = require("./hook");

Object.keys(_hook).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hook[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hook[key];
    }
  });
});