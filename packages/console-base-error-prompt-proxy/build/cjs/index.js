"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _proxy.default;
  }
});

var _consoleBaseErrorPrompt = require("@alicloud/console-base-error-prompt");

Object.keys(_consoleBaseErrorPrompt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _consoleBaseErrorPrompt[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _consoleBaseErrorPrompt[key];
    }
  });
});

var _proxy = _interopRequireDefault(require("./util/proxy"));