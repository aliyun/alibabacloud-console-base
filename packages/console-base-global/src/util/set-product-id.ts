import getGlobalVar from './get-global-var';

/**
 * 设置当前产品
 */
export default function setProductId(productId = ''): void {
  getGlobalVar().PRODUCT_ID = productId;
}