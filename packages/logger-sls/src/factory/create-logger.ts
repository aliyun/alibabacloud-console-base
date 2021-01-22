import {
  IFactoryOptions,
  ILogOptionsQuick,
  ILogOptions,
  IFnLog
} from '../types';
import getSystemParams from '../util/get-system-params';
import logPipe from '../util/log-pipe';

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
    apiVersion,
    defaultParams,
    onBeforeSend
  } = factoryOptions;
  const pipe = logPipe(project, endpoint, logstore, apiVersion);
  
  function sls<I = void>(topic: string, info?: I, options: ILogOptions = {}): void {
    if (onBeforeSend && onBeforeSend(factoryOptions) === false) {
      return;
    }
    
    const paramsDefault = typeof defaultParams === 'function' ? defaultParams() : defaultParams;
    
    pipe(topic, {
      __topic__: topic,
      GROUP: options.group || 'LOG',
      ...getSystemParams(),
      ...paramsDefault,
      ...info
    }, options.instant);
  }
  
  sls.debug = <I = void>(topic: string, info?: I, options?: ILogOptionsQuick): void => sls<I>(topic, info, {
    ...options,
    group: 'DEBUG'
  });
  sls.log = <I = void>(topic: string, info?: I, options?: ILogOptionsQuick): void => sls<I>(topic, info, {
    ...options,
    group: 'LOG'
  });
  sls.info = <I = void>(topic: string, info?: I, options?: ILogOptionsQuick): void => sls<I>(topic, info, {
    ...options,
    group: 'INFO'
  });
  sls.warn = <I = void>(topic: string, info?: I, options?: ILogOptionsQuick): void => sls<I>(topic, info, {
    ...options,
    group: 'WARN'
  });
  sls.error = <I = void>(topic: string, info?: I, options?: ILogOptionsQuick): void => sls<I>(topic, info, {
    ...options,
    group: 'ERROR'
  });
  sls.fatal = <I = void>(topic: string, info?: I, options?: ILogOptionsQuick): void => sls<I>(topic, info, {
    ...options,
    group: 'FATAL'
  });
  sls.biz = <I = void>(topic: string, info?: I, options?: ILogOptionsQuick): void => sls<I>(topic, info, {
    ...options,
    group: 'BIZ'
  });
  
  return sls;
}
