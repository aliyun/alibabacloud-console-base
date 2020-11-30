import {
  REG_ATOB,
  B64TAB
} from '../const';

/**
 * window 自带的 atob 和 btoa https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
 * 
 * - atob base64 解码
 * - btoa base64 编码
 * 
 * 注意：
 * 
 * - 不支持 unicode，`btoa/atob` 对汉字（或汉字标点）等会报错
 *   + FF → DOMException: String contains an invalid character
 *   + CH → DOMException: Failed to execute 'atob' on 'Window': The string to be decoded contains characters outside of the Latin1 range.
 *   + SF → InvalidCharacterError: The string contains invalid characters. 
 * - 这两个方法有些奇怪，可以把它从 window 上脱离出来调用，但不能把它挂到某对象下面调用，否则会报错
 *   + FF → TypeError: 'atob' called on an object that does not implement interface Window 
 *   + CH → TypeError: Illegal invocation
 *   + SF → TypeError: Can only call Window.btoa on instances of Window
 */

function atobPolyfill(a: string): string {
  return a.replace(REG_ATOB, cccc => {
    const len = cccc.length;
    const padLen = len % 4;
    const n = (len > 0 ? B64TAB[cccc.charAt(0)] << 18 : 0) | (len > 1 ? B64TAB[cccc.charAt(1)] << 12 : 0) | (len > 2 ? B64TAB[cccc.charAt(2)] << 6 : 0) | (len > 3 ? B64TAB[cccc.charAt(3)] : 0);
    
    const chars = [
      fromCharCode(n >>> 16),
      fromCharCode((n >>> 8) & 0xff),
      fromCharCode(n & 0xff)
    ];
    
    chars.length -= [0, 0, 2, 1][padLen];
    
    return chars.join('');
  });
}

export default typeof window !== 'undefined' && window.atob ? window.atob : atobPolyfill;
