"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createLoggerFactory", {
  enumerable: true,
  get: function get() {
    return _createFactory.default;
  }
});
exports.default = void 0;

var _createLogger = _interopRequireDefault(require("./factory/create-logger"));

var _createFactory = _interopRequireDefault(require("./factory/create-factory"));

var _default = _createLogger.default;
exports.default = _default;