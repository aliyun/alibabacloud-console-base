/**
 * 绝对 URL tester 正则，提取 protocol（$1）和 host（$2）
 * 
 * 「A URL is considered absolute if it begins with "<protocol>://" or "//" (protocol-relative URL).
 * RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
 * by any combination of letters, digits, plus, period, or hyphen.」
 */
const REG_PROTOCOL_HOST_EXTRACTOR = /^(https?:)?\/\/([^/]+)/;

/**
 * 提取 protocol 和 host，如果能够提取到则说明 url 是绝对地址
 */
export default function getProtocolAndHost(url?: string): [string, string] | null {
  if (url && REG_PROTOCOL_HOST_EXTRACTOR.test(url)) {
    return [RegExp.$1, RegExp.$2];
  }
  
  return null;
}
