import normalizeProductId from './normalize-product-id';

/**
 * 从 hostname 中提取产品 ID
 */
function getFromHostname(hostname: string): string {
  const [productId] = hostname.split('.');
  
  return normalizeProductId(productId);
}

export default function getFromUrl(href: string, base?: string): string {
  let productId = '';
  
  try {
    const url = new URL(href, base); // new URL 不要写第二个参数
    
    productId = getFromHostname(url.hostname);
    
    // 云盾系列控制台，它们的规则是 yundun.console.aliyun.com?p=xx 中的 xx
    if (productId === 'yundun') {
      const p = url.searchParams.get('p');
      
      if (p) {
        productId = normalizeProductId(p);
      }
    }
  } catch (err) {
    return '';
  }
  
  return productId;
}
