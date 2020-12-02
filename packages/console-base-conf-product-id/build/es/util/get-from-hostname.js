import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import normalizeProductId from './normalize-product-id';
/**
 * 从 hostname 中提取产品 ID
 */

export default function getFromHostname(hostname) {
  var _hostname$split = hostname.split('.'),
      _hostname$split2 = _slicedToArray(_hostname$split, 1),
      productId = _hostname$split2[0];

  return normalizeProductId(productId);
}