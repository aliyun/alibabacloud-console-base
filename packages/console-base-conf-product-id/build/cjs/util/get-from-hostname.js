"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFromHostname;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _normalizeProductId = _interopRequireDefault(require("./normalize-product-id"));

/**
 * 从 hostname 中提取产品 ID
 */
function getFromHostname(hostname) {
  var _hostname$split = hostname.split('.'),
      _hostname$split2 = (0, _slicedToArray2.default)(_hostname$split, 1),
      productId = _hostname$split2[0];

  return (0, _normalizeProductId.default)(productId);
}