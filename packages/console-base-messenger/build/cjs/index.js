"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "EToolkitIdSystem", {
  enumerable: true,
  get: function get() {
    return _const.EToolkitIdSystem;
  }
});
exports.forConsoleBase = exports.forApp = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _const = require("./const");

var _appBroadcast = _interopRequireDefault(require("./messenger/app-broadcast"));

var _appSubscribe = _interopRequireDefault(require("./messenger/app-subscribe"));

var _consoleBaseBroadcast = _interopRequireDefault(require("./messenger/console-base-broadcast"));

var _consoleBaseSubscribe = _interopRequireDefault(require("./messenger/console-base-subscribe"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 给控制台使用
 */
var forApp = _objectSpread(_objectSpread({}, _appBroadcast.default), _appSubscribe.default);
/**
 * 给 console-base 使用
 */


exports.forApp = forApp;

var forConsoleBase = _objectSpread(_objectSpread({}, _consoleBaseBroadcast.default), _consoleBaseSubscribe.default);

exports.forConsoleBase = forConsoleBase;