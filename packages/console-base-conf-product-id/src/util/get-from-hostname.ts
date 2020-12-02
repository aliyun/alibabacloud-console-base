import normalizeProductId from './normalize-product-id';

/**
 * 从 hostname 中提取产品 ID
 */
export default function getFromHostname(hostname: string): string {
  const [productId] = hostname.split('.');
  
  return normalizeProductId(productId);
}
