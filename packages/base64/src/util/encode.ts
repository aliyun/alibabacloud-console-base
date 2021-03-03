import btoa from './btoa';
import utob from './utob';

function _encode(u: string): string {
  return btoa(utob(u));
}

/**
 * 支持 unicode 的 base64 编码，如果 uriSafe 为 true，则末尾的 `=` 会被抹掉，`+` 转成 `-`
 */
export default function encode(str: string, uriSafe?: boolean): string {
  const base64Str = _encode(String(str));
  
  return uriSafe ? base64Str.replace(/[+/]/g, m0 => (m0 === '+' ? '-' : '_')).replace(/=/g, '') : base64Str;
}
