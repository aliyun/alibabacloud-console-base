interface IBizJson<T = void> {
  code?: string;
  message?: string;
  data?: T;
}

interface IError extends Error {
  code?: string;
  name: string;
  config: unknown;
}

/**
 * 专门用于 demo 的 biz 拦截器
 * 
 * 使用 `fetcher.interceptResponse(fetcherDemoInterceptorBiz)`
 */
export default function fetcherDemoInterceptorBiz(json: IBizJson, config: unknown): unknown {
  const {
    code,
    data
  } = json;
  
  if (code === '200') {
    return data;
  }
  
  const error: IError = new Error(json.message || code || '__UNKNOWN__') as IError;
  
  error.code = code;
  error.name = 'BizErrorDemo';
  error.config = config;
  
  throw error;
}
