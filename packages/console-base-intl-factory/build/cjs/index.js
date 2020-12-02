"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _factory.default;
  }
});

var _consoleBaseIntlFactoryBasic = require("@alicloud/console-base-intl-factory-basic");

Object.keys(_consoleBaseIntlFactoryBasic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _consoleBaseIntlFactoryBasic[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _consoleBaseIntlFactoryBasic[key];
    }
  });
});

var _factory = _interopRequireDefault(require("./util/factory"));