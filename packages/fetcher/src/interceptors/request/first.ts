import {
  IFetcherConfig,
  TMethod
} from '../../types';

/**
 * 默认的第一个 request 拦截器
 * - 记录开始的时间
 * - 保证 method 存在且大写
 */
export default function requestInterceptorFirst(config: IFetcherConfig): Partial<IFetcherConfig> {
  const {
    method = 'GET'
  } = config;
  
  return {
    _timeStarted: Date.now(),
    method: method.toUpperCase() as TMethod
  };
}
