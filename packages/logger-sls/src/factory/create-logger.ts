import {
  IFactoryOptions,
  ILogOptionsQuick,
  ILogOptions,
  IFnLog
} from '../types';
import getSystemParams from '../util/get-system-params';
import logPipe from '../util/log-pipe';

/**
 * 采样率检查，如果是 instant 则忽略采样率设置
 */
function checkSampling(instant?: boolean, factorySampling = 1, sampling = factorySampling): boolean {
  if (instant) {
    return true;
  }
  
  if (sampling > 0 && sampling < 1) {
    return Math.random() <= sampling;
  }
  
  return true;
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
    apiVersion,
    sampling,
    defaultParams,
    onBeforeSend
  } = factoryOptions;
  const pipe = logPipe(project, endpoint, logstore, apiVersion);
  
  function sls<I = void>(topic: string, info?: I, {
    group = 'LOG',
    sampling: optionSampling,
    instant
  }: ILogOptions = {}): void {
    if ((onBeforeSend && onBeforeSend(factoryOptions) === false) || !checkSampling(instant, sampling, optionSampling)) {
      return;
    }
    
    pipe(topic, {
      __topic__: topic,
      GROUP: group,
      ...getSystemParams(),
      ...(typeof defaultParams === 'function' ? defaultParams() : defaultParams),
      ...info
    }, instant);
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
