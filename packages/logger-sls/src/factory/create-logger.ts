import {
  IFactoryOptions,
  ILogOptionsQuick,
  ILogOptions,
  IFnLog
} from '../types';
import getSystemParams from '../util/get-system-params';
import logPipe from '../util/log-pipe';

function getOnceKey(topic: string, once?: true | string): string | undefined {
  if (!once) {
    return;
  }
  
  if (once === true) {
    return topic;
  }
  
  return `${topic}~${once}`;
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
    sampling: factorySampling,
    defaultParams,
    onBeforeSend
  } = factoryOptions;
  const pipe = logPipe(project, endpoint, logstore, apiVersion);
  const ONCE: Record<string, 1> = {};
  
  // 检查是否上报
  function checkIfIgnore(instant?: boolean, sampling?: number, onceKey?: string): boolean {
    // onBeforeSend 阻止发送
    if ((onBeforeSend && onBeforeSend(factoryOptions) === false)) { // 不能 simplify to !onBeforeSend(factoryOptions)
      return true;
    }
    
    // 已发送过，且只需要发送一次，则忽略
    if (onceKey && ONCE[onceKey]) {
      return true;
    }
    
    // instant 将忽略 sampling
    if (instant) {
      return false;
    }
    
    if (typeof sampling === 'number' && sampling > 0 && sampling < 1) {
      return Math.random() > sampling;
    }
    
    return false;
  }
  
  function sls<I = void>(topic: string, info?: I, {
    group = 'LOG',
    sampling = factorySampling,
    instant,
    once
  }: ILogOptions = {}): void {
    const onceKey: string | undefined = getOnceKey(topic, once);
    
    if (checkIfIgnore(instant, sampling, onceKey)) {
      return;
    }
    
    if (onceKey) {
      ONCE[onceKey] = 1;
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
