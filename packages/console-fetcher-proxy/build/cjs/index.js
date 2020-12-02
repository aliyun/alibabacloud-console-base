"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createFetcher: true
};
Object.defineProperty(exports, "createFetcher", {
  enumerable: true,
  get: function get() {
    return _createFetcher.default;
  }
});
exports.default = void 0;

var _createFetcher = _interopRequireDefault(require("./util/create-fetcher"));

var _consoleFetcher = require("@alicloud/console-fetcher");

Object.keys(_consoleFetcher).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _consoleFetcher[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _consoleFetcher[key];
    }
  });
});

var _default = (0, _createFetcher.default)();

exports.default = _default;