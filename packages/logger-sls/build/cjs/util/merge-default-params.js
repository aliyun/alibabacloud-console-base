"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = mergeDefaultParams;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 整合默认参数
 */
function mergeDefaultParams(factoryDefaultParams, defaultParams) {
  if (!defaultParams || !factoryDefaultParams) {
    return factoryDefaultParams || defaultParams;
  }

  if (typeof factoryDefaultParams === 'function' || typeof defaultParams === 'function') {
    return function () {
      var paramsDefaultInFactory = typeof factoryDefaultParams === 'function' ? factoryDefaultParams() : factoryDefaultParams;
      var paramsDefault = typeof defaultParams === 'function' ? defaultParams() : defaultParams;
      return _objectSpread(_objectSpread({}, paramsDefaultInFactory), paramsDefault);
    };
  }

  return _objectSpread(_objectSpread({}, factoryDefaultParams), defaultParams);
}