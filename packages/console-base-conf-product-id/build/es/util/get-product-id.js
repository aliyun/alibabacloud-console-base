import getFromSettings from './get-from-settings';
import getFromHostname from './get-from-hostname';
import getFromYundunHref from './get-from-yundun-href';
export default function getProductId() {
  var _ref = window,
      _ref$CONSOLE_BASE_SET = _ref.CONSOLE_BASE_SETTINGS,
      newSettings = _ref$CONSOLE_BASE_SET === void 0 ? {} : _ref$CONSOLE_BASE_SET,
      _ref$viewframeSetting = _ref.viewframeSetting,
      oldSettings = _ref$viewframeSetting === void 0 ? {} : _ref$viewframeSetting;
  var productId = getFromSettings(newSettings.PRODUCT_ID || oldSettings.productId);

  if (productId) {
    return productId;
  }

  productId = getFromHostname(location.hostname);

  if (productId === 'yundun') {
    productId = getFromYundunHref(location.href) || productId;
  }

  return productId;
}