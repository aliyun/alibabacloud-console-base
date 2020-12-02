"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFromYundunHref;

var _normalizeProductId = _interopRequireDefault(require("./normalize-product-id"));

/**
 * 覆盖云盾系列控制台，它们的规则是 yundun.console.aliyun.com?p=xx 中的 xx
 */
function getFromYundunHref(href) {
  try {
    var productId = new URL(href).searchParams.get('p');
    return productId ? (0, _normalizeProductId.default)(productId) : '';
  } catch (err) {
    return '';
  }
}