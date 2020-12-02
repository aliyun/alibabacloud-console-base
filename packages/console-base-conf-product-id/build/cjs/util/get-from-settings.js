"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFromSettings;

var _normalizeProductId = _interopRequireDefault(require("./normalize-product-id"));

/**
 * 从配置项获取
 */
function getFromSettings(productId) {
  if (productId && typeof productId === 'string') {
    return (0, _normalizeProductId.default)(productId);
  }
}