"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _settingsCommon = require("./settings-common");

Object.keys(_settingsCommon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _settingsCommon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settingsCommon[key];
    }
  });
});

var _settingsRegion = require("./settings-region");

Object.keys(_settingsRegion).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _settingsRegion[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settingsRegion[key];
    }
  });
});

var _settingsResourceGroup = require("./settings-resource-group");

Object.keys(_settingsResourceGroup).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _settingsResourceGroup[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settingsResourceGroup[key];
    }
  });
});

var _settingsToolkit = require("./settings-toolkit");

Object.keys(_settingsToolkit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _settingsToolkit[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settingsToolkit[key];
    }
  });
});