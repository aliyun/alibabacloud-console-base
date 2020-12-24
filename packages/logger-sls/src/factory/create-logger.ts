import qs from 'qs';

import fetch from '@alicloud/fetcher-fetch';

import {
  IFactoryOptions,
  ILogOptionsQuick,
  ILogOptions,
  IFnLog
} from '../types';
import getSystemParams from '../util/get-system-params';

function noop(): void {} // eslint-disable-line @typescript-eslint/no-empty-function

function doLog(logUrl: string): void {
  fetch(logUrl, {
    timeout: 20000,
    // SLS 如果要启用 web log，必须 CORS，但不允许带 cookie，所以不可用 `include`，否则会报错：
    // 「Credential is not supported if the CORS header ‘Access-Control-Allow-Origin’ is ‘*’」
    credentials: 'omit'
  }).catch(noop);
}
/**
 * 创建 SLS 日志方法，一般直接用于项目。
 * 
 * 参考：Web Tracking <https://help.aliyun.com/document_detail/31752.html>
 */
export default function createLogger(factoryOptions: IFactoryOptions): IFnLog {
  const {
    project,
    endpoint,
    logstore,
    apiVersion = '0.6.0',
    defaultParams,
    suppressTime = 10000,
    onBeforeSend
  } = factoryOptions;
  const BASE_LOG_URL = `//${project}.${endpoint}/logstores/${logstore}/track`;
  // suppressTime 规定的时间内积压的日志，将被定时器设置为 null，null 之后就不再积压，而是立即上报
  let suppressedLogUrls: string[] | null = [];
  
  // 压制时间之后，上报积压的日志，并把 suppressedLogUrls 设置为 null 取消压制
  window.setTimeout(() => {
    if (suppressedLogUrls) {
      suppressedLogUrls.forEach(doLog);
      suppressedLogUrls = null;
    }
  }, suppressTime);
  
  function sls<P = void>(topic: string, params?: P, options: ILogOptions = {}): void {
    if (onBeforeSend && onBeforeSend(factoryOptions) === false) {
      return;
    }
    
    const paramsDefault = typeof defaultParams === 'function' ? defaultParams() : defaultParams;
    const logUrl = `${BASE_LOG_URL}?${qs.stringify({
      APIVersion: apiVersion,
      GROUP: options.group || 'LOG',
      ...getSystemParams(),
      ...paramsDefault,
      ...params,
      __topic__: topic
    })}`;
    
    if (suppressedLogUrls && !options.instant) {
      suppressedLogUrls.push(logUrl);
    } else {
      doLog(logUrl);
    }
  }
  
  sls.debug = <P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void => sls<P>(topic, params, {
    ...options,
    group: 'DEBUG'
  });
  sls.log = <P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void => sls<P>(topic, params, {
    ...options,
    group: 'LOG'
  });
  sls.info = <P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void => sls<P>(topic, params, {
    ...options,
    group: 'INFO'
  });
  sls.warn = <P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void => sls<P>(topic, params, {
    ...options,
    group: 'WARN'
  });
  sls.error = <P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void => sls<P>(topic, params, {
    ...options,
    group: 'ERROR'
  });
  sls.fatal = <P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void => sls<P>(topic, params, {
    ...options,
    group: 'FATAL'
  });
  sls.biz = <P = void>(topic: string, params?: P, options?: ILogOptionsQuick): void => sls<P>(topic, params, {
    ...options,
    group: 'BIZ'
  });
  
  return sls;
}
