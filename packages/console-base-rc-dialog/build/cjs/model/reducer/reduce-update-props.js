"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceUpdateProps;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 有限更新 props
 */
function reduceUpdateProps(state, payload) {
  var newUpdate = _objectSpread({}, state.propsUpdate);

  (0, _forEach2.default)(payload, function (v, k) {
    if (v === undefined || v === null) {
      // 允许通过传入 undefined / null 来复原初始值
      delete newUpdate[k];
    } else {
      newUpdate[k] = v;
    }
  });
  return (0, _immutabilityHelper.default)(state, {
    propsUpdate: {
      $set: newUpdate
    }
  });
}