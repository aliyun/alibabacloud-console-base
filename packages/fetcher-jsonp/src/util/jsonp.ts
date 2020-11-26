import {
  IJsonpOptions,
  IJsonpResponse
} from '../types';
import {
  EJsonpError
} from '../const';

import createError from './create-error';
import generateCallbackName from './generate-callback-name';
import clearCallbackFn from './clear-callback-fn';

const head = document.head || document.getElementsByTagName('head')[0];

/**
 * 一个「纯」的 Promise 封装的 JSONP
 * 
 * 参考 https://github.com/camsong/fetch-jsonp
 */
export default function jsonp<T = void>(url = '', {
  timeout = 5000,
  charset,
  jsonpCallback = 'callback',
  jsonpCallbackFunction = generateCallbackName()
}: IJsonpOptions = {}): Promise<IJsonpResponse<T>> {
  const scriptElement = document.createElement('script');
  let timeoutId: number | undefined;
  
  scriptElement.src = `${url}${url.indexOf('?') < 0 ? '?' : '&'}${jsonpCallback}=${jsonpCallbackFunction}`;
  
  if (charset) {
    scriptElement.setAttribute('charset', charset);
  }
  
  head.appendChild(scriptElement);
  
  // 清除全局污染
  function cleanup(): void {
    clearCallbackFn(jsonpCallbackFunction);
    
    // 清除 script DOM
    if (scriptElement.parentNode) {
      scriptElement.parentNode.removeChild(scriptElement);
    }
    
    // 清除 timeout
    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutId = undefined;
    }
  }
  
  return new Promise<IJsonpResponse<T>>((resolve, reject) => {
    // create a callback function
    window[jsonpCallbackFunction] = (result: T) => {
      resolve({
        ok: true,
        url,
        json: (): Promise<T> => Promise.resolve(result)
      });
      
      cleanup();
    };
    
    if (timeout > 0) {
      timeoutId = window.setTimeout(() => {
        reject(createError(EJsonpError.TIMEOUT, `JSONP timeout after ${timeout}ms`));
        
        cleanup();
        
        // 虽然 DOM 被移除了，但 JS 的加载还在继续，超时后还有可能加载完毕，需要避免这种情况下抛错
        // 注意这行一定要放在 cleanup 之后
        window[jsonpCallbackFunction] = () => clearCallbackFn(jsonpCallbackFunction);
      }, timeout);
    }
    
    // Caught if got 404/500
    scriptElement.onerror = () => {
      reject(createError(EJsonpError.NETWORK, `jsonp('${url}') failed`));
      
      cleanup();
    };
  });
}
