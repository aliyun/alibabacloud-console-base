import {
  IFactoryOptions,
  ILogOptionsQuick,
  ILogOptions,
  IFnLog,
  IFnLogQuick, ILogInfo
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
    delay: factoryDelay,
    defaultParams,
    onBeforeSend
  } = factoryOptions;
  const pipe = logPipe(project, endpoint, logstore, apiVersion);
  const ONCE: Record<string, 1> = {};
  
  /**
   * 检查是否需要忽略
   */
  function checkIfIgnore(sampling?: number, onceKey?: string): boolean {
    // onBeforeSend 阻止发送
    if (onBeforeSend && onBeforeSend(factoryOptions) === false) { // 不能 simplify to !onBeforeSend(factoryOptions)
      return true;
    }
    
    // 只需要发送一次，已发送过，则忽略
    if (onceKey && ONCE[onceKey]) {
      return true;
    }
    
    // 采样，`(0, 1)` 开区间
    if (typeof sampling === 'number' && sampling > 0 && sampling < 1) {
      return Math.random() > sampling;
    }
    
    return false;
  }
  
  function sls<I = void>(topic: string, info?: I, {
    group = 'LOG',
    sampling = factorySampling,
    delay = factoryDelay,
    once,
    instant
  }: ILogOptions = {}): void {
    const onceKey: string | undefined = getOnceKey(topic, once);
    
    if (checkIfIgnore(sampling, onceKey)) {
      return;
    }
    
    if (onceKey) {
      ONCE[onceKey] = 1;
    }
    
    const logInfo: ILogInfo = {
      __topic__: topic,
      GROUP: group,
      ...getSystemParams(),
      ...typeof defaultParams === 'function' ? defaultParams() : defaultParams,
      ...info
    };
    
    if (!instant && typeof delay === 'number' && delay > 0) {
      setTimeout(() => pipe(topic, logInfo), delay);
    } else {
      pipe(topic, logInfo, instant);
    }
  }
  
  function creteQuickFn(group: string): IFnLogQuick {
    return <I = void>(topic: string, info?: I, options?: ILogOptionsQuick): void => sls<I>(topic, info, {
      ...options,
      group
    });
  }
  
  sls.debug = creteQuickFn('DEBUG');
  sls.log = creteQuickFn('LOG');
  sls.info = creteQuickFn('INFO');
  sls.warn = creteQuickFn('WARN');
  sls.error = creteQuickFn('ERROR');
  sls.fatal = creteQuickFn('FATAL');
  sls.biz = creteQuickFn('BIZ');
  
  return sls;
}
