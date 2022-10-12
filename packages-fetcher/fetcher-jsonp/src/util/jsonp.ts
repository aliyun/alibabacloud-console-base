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

/**
 * 一个「纯」的 Promise 封装的 JSONP
 * 
 * 参考 https://github.com/camsong/fetch-jsonp
 */
export default function jsonp<T = void>(url = '', options: IJsonpOptions = {}): Promise<IJsonpResponse<T>> {
  const {
    timeout = 5000,
    charset,
    jsonpCallback = 'callback',
    jsonpCallbackFunction = generateCallbackName(),
    signal
  } = options;
  const scriptElement = document.createElement('script');
  let timeoutId: number | undefined;
  
  scriptElement.src = `${url}${url.indexOf('?') < 0 ? '?' : '&'}${jsonpCallback}=${jsonpCallbackFunction}`;
  
  if (charset) {
    scriptElement.setAttribute('charset', charset);
  }
  
  (document.head || document.getElementsByTagName('head')[0]).appendChild(scriptElement);
  
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
  
  /**
   * 当 abort 或 timeout 的时候，执行 cleanup，虽然 DOM 被移除了，但 JS 的加载还在继续，超时后还有可能加载完毕，
   * 需要避免这种情况下抛错
   */
  function cleanupPrematurely(): void {
    cleanup();
    
    (window as unknown as Record<string, () => void>)[jsonpCallbackFunction] = () => clearCallbackFn(jsonpCallbackFunction);
  }
  
  return new Promise<IJsonpResponse<T>>((resolve, reject) => {
    let returned = false;
    
    // 异步事件 1：回调
    (window as unknown as Record<string, (result: T) => void>)[jsonpCallbackFunction] = (result: T) => {
      if (returned) {
        return;
      }
      
      returned = true;
      resolve({
        ok: true,
        url,
        json: (): Promise<T> => Promise.resolve(result)
      });
      cleanup();
    };
    
    // 异步事件 2：超时
    if (timeout > 0) {
      timeoutId = window.setTimeout(() => {
        if (returned) {
          return;
        }
  
        returned = true;
        reject(createError(EJsonpError.TIMEOUT, `JSONP timeout after ${timeout}ms, url = ${url}`));
        cleanupPrematurely();
      }, timeout);
    }
  
    // 异步事件 3：abort，监听 signal 的 abort（和 fetch 一样）
    // https://developer.mozilla.org/en-US/docs/Web/API/AbortController
    if (signal) {
      signal.addEventListener('abort', () => {
        if (returned) {
          return;
        }
  
        returned = true;
        reject(createError('AbortError', `The JSONP was aborted, url = ${url}`));
        cleanupPrematurely();
      });
    }
    
    // 异步事件 3：404/500 等
    scriptElement.onerror = () => {
      if (returned) {
        return;
      }
      
      returned = true;
      reject(createError(EJsonpError.NETWORK, `JSONP failed, url = ${url}`));
      cleanup();
    };
  });
}
