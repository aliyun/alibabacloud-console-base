"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  confFeature: true,
  confLinkGen: true
};
Object.defineProperty(exports, "confFeature", {
  enumerable: true,
  get: function get() {
    return _confFeature.default;
  }
});
Object.defineProperty(exports, "confLinkGen", {
  enumerable: true,
  get: function get() {
    return _confLinkGen.default;
  }
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _consoleOneConfig.default;
  }
});

var _confFeature = _interopRequireDefault(require("./util/conf-feature"));

var _confLinkGen = _interopRequireDefault(require("./util/conf-link-gen"));

var _consoleOneConfig = _interopRequireWildcard(require("@alicloud/console-one-config"));

Object.keys(_consoleOneConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _consoleOneConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _consoleOneConfig[key];
    }
  });
});