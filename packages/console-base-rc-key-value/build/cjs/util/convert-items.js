"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertItems;

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _react = require("react");

function convertItems(o, ignoreEmpty) {
  if (!o) {
    return [];
  }

  var arr = Array.isArray(o) ? o : (0, _map2.default)(o, function (v, k) {
    return {
      k: k,
      v: v
    };
  }).map(function (kv) {
    if (!kv || typeof kv.v === 'function') {
      return null;
    }

    var k = kv.k,
        v = kv.v;
    var displayV = v;

    if (!(0, _isNil2.default)(v) && typeof v === 'string' && ! /*#__PURE__*/(0, _react.isValidElement)(v)) {
      displayV = String(displayV);
    }

    return {
      k: k,
      v: displayV
    };
  });
  return arr.filter(function (v) {
    if (!v) {
      return false;
    }

    return !((0, _isNil2.default)(v.v) && ignoreEmpty);
  });
}