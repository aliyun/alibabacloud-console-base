import {
  IFactoryOptions,
  ILogOptionsQuick,
  ILogOptions,
  ILogInfo,
  IFnLog,
  IFnLogQuick
} from '../types';
import {
  getSystemParams,
  logPipe
} from '../util';

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
    topicPrefix,
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
  
  function sls(topic: string): void;
  function sls(topic: string, info: undefined | null, options?: ILogOptions): void;
  function sls<I>(topic: string, info: I, options?: ILogOptions): void;
  
  function sls<I = void>(topic: string, info?: I, {
    group = 'LOG',
    sampling = factorySampling,
    delay = factoryDelay,
    once,
    instant
  }: ILogOptions = {}): void {
    const finalTopic = topicPrefix ? `${topicPrefix}${topic}` : topic;
    const onceKey: string | undefined = getOnceKey(finalTopic, once);
    
    if (checkIfIgnore(sampling, onceKey)) {
      return;
    }
    
    if (onceKey) {
      ONCE[onceKey] = 1;
    }
    
    const logInfo: ILogInfo = {
      __topic__: finalTopic,
      GROUP: group,
      ...getSystemParams(),
      ...typeof defaultParams === 'function' ? defaultParams() : defaultParams,
      ...info
    };
    
    if (!instant && typeof delay === 'number' && delay > 0) {
      setTimeout(() => pipe(finalTopic, logInfo), delay);
    } else {
      pipe(finalTopic, logInfo, instant);
    }
  }
  
  function creteQuickFn(group: string): IFnLogQuick {
    return (topic: string, info?: unknown, options?: ILogOptionsQuick): void => sls(topic, info, {
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
