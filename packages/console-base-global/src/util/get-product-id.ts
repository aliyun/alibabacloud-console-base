import getGlobalVarFromWindow from './get-global-var-from-window';

export default function getProductId(): string {
  return getGlobalVarFromWindow()?.PRODUCT_ID || '';
}