import normalizeProductId from './normalize-product-id';
/**
 * 从配置项获取
 */

export default function getFromSettings(productId) {
  if (productId && typeof productId === 'string') {
    return normalizeProductId(productId);
  }
}