"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeConfig;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _normalizeHeaders = _interopRequireDefault(require("../util/normalize-headers"));

var _mergeParams = _interopRequireDefault(require("../util/merge-params"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 将多个 config 进行合并
 */
function mergeConfig(config) {
  var finalConfig = _objectSpread({}, config);

  finalConfig.headers = (0, _normalizeHeaders.default)(finalConfig.headers);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  args.forEach(function (partialConfig) {
    (0, _forEach2.default)(partialConfig, function (v, k) {
      if (v === undefined) {
        return;
      }

      switch (k) {
        case 'headers':
          // header 会做 merge
          finalConfig.headers = _objectSpread(_objectSpread({}, finalConfig.headers), (0, _normalizeHeaders.default)(v));
          break;

        case 'params':
          // 参数和 body 也会做 merge
          finalConfig.params = (0, _mergeParams.default)([finalConfig[k], v]);
          break;

        case 'body':
          finalConfig.body = (0, _mergeParams.default)([finalConfig[k], v]);
          break;

        default:
          // 其他，替换
          finalConfig[k] = v;
          break;
      }
    });
  });
  return finalConfig;
}