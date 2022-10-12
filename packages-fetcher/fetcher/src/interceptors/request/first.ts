import {
  IFetcherConfig
} from '../../types';
import {
  generateConfigId
} from '../../util';

/**
 * 默认的第一个 request 拦截器
 * 
 * - 创建 id（可以被后续拦截器用于缓存、合并等骚操作）
 * - 记录创建的时间（不一定是真正开始请求的时间，真正开始请求的时间放在最末一个请求拦截器里）
 * - 保证 method 存在且大写
 */
export default function requestInterceptorFirst(fetcherConfig: IFetcherConfig): Partial<IFetcherConfig> {
  const method = typeof fetcherConfig.method === 'string' ? fetcherConfig.method.toUpperCase() : 'GET';
  
  fetcherConfig.method = method; // 为了 _id...
  
  return {
    _id: generateConfigId(fetcherConfig),
    _timeCreated: Date.now(),
    method
  };
}
