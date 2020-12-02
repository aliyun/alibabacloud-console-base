"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pruneForMessage;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * o 有可能带无法序列化的信息，比如 JSX、function 等，这种场景下 forApp.promptError 调用会报错
 * 所以这里对它简简单单做一下「净化」，但还是可能在 postMessage 的时候抛错，仍需要 try-catch
 */
function pruneForMessage(o) {
  if (!o) {
    return o;
  }

  var safeInfo = _objectSpread({}, o);

  Object.keys(safeInfo).forEach(function (v) {
    if (typeof safeInfo[v] === 'function') {
      delete safeInfo[v];
    }
  });
  return safeInfo;
}