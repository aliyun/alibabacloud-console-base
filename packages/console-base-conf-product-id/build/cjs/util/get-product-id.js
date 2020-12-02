"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getProductId;

var _getFromSettings = _interopRequireDefault(require("./get-from-settings"));

var _getFromHostname = _interopRequireDefault(require("./get-from-hostname"));

var _getFromYundunHref = _interopRequireDefault(require("./get-from-yundun-href"));

function getProductId() {
  var _ref = window,
      _ref$CONSOLE_BASE_SET = _ref.CONSOLE_BASE_SETTINGS,
      newSettings = _ref$CONSOLE_BASE_SET === void 0 ? {} : _ref$CONSOLE_BASE_SET,
      _ref$viewframeSetting = _ref.viewframeSetting,
      oldSettings = _ref$viewframeSetting === void 0 ? {} : _ref$viewframeSetting;
  var productId = (0, _getFromSettings.default)(newSettings.PRODUCT_ID || oldSettings.productId);

  if (productId) {
    return productId;
  }

  productId = (0, _getFromHostname.default)(location.hostname);

  if (productId === 'yundun') {
    productId = (0, _getFromYundunHref.default)(location.href) || productId;
  }

  return productId;
}