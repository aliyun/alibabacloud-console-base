import getFromSettings from './get-from-settings';
import getFromUrl from './get-from-url';

interface IWindow extends Window {
  CONSOLE_BASE_SETTINGS?: {
    PRODUCT_ID?: string;
  };
  viewframeSetting?: {
    productId?: string;
  };
}

/**
 * 获取当前产品的产品 ID
 * 
 * 1. 优先从 console-base 的配置项获取
 * 2. 但是，console-base 力求做「无配」的，所以需要可以从 url 提取，主要是 hostname 的第一段
 * 3. 但 云盾 都是以 ?p=xx 来表示产品的
 * 4. 从 url 提取的 ID 可能会有奇怪的后缀，需要干掉
 */
export default function parseProductId(): string {
  const {
    CONSOLE_BASE_SETTINGS: newSettings = {},
    viewframeSetting: oldSettings = {}
  } = window as IWindow;
  
  return getFromSettings(newSettings.PRODUCT_ID || oldSettings.productId) || getFromUrl(location.href);
}
