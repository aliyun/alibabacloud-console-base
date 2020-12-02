import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/**
 * 标准化产品 ID
 * 
 * * 全小写
 * * 去掉前后缀
 *   - 去掉 `pre-` 前缀
 *   - 去掉 `-` 后边的后缀，这些后缀可能有 `-pre`、`-intl`、`-<region>` 后缀
 *   - 去掉 `4xx` 后缀，包括但不局限于 虚商 - 4service、政务云 - 4bjzwy、金融云 - 4finance
 *   - 去掉升级用的 `new`（`renew` 不会误伤） 和 `next`
 */
export default function normalizeProductId(possibleId) {
  // 剔除前缀，必须先做
  var productId = possibleId.toLowerCase().replace(/^pre-/, ''); // 剔除后缀

  var _productId$split = productId.split('-');

  var _productId$split2 = _slicedToArray(_productId$split, 1);

  productId = _productId$split2[0];
  productId = productId.replace(/4\w+/, ''); // 4xx 后缀

  productId = productId.replace(/next$/, ''); // 升级 1
  // 避免误伤 renew

  if (productId !== 'renew') {
    productId = productId.replace(/new$/, ''); // 升级 2
  }

  return productId;
}