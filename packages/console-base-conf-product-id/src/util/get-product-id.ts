import getFromSettings from './get-from-settings';
import getFromHostname from './get-from-hostname';
import getFromYundunHref from './get-from-yundun-href';

interface IWindow extends Window {
  CONSOLE_BASE_SETTINGS?: {
    PRODUCT_ID?: string;
  };
  viewframeSetting?: {
    productId?: string;
  };
}

export default function getProductId(): string {
  const {
    CONSOLE_BASE_SETTINGS: newSettings = {},
    viewframeSetting: oldSettings = {}
  } = window as IWindow;
  let productId = getFromSettings(newSettings.PRODUCT_ID || oldSettings.productId);
  
  if (productId) {
    return productId;
  }
  
  productId = getFromHostname(location.hostname);
  
  if (productId === 'yundun') {
    productId = getFromYundunHref(location.href) || productId;
  }
  
  return productId;
}
