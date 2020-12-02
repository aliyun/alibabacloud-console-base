import normalizeProductId from './normalize-product-id';
/**
 * 覆盖云盾系列控制台，它们的规则是 yundun.console.aliyun.com?p=xx 中的 xx
 */

export default function getFromYundunHref(href) {
  try {
    var productId = new URL(href).searchParams.get('p');
    return productId ? normalizeProductId(productId) : '';
  } catch (err) {
    return '';
  }
}