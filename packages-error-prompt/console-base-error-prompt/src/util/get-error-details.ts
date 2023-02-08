import {
  IErrorDetails,
  IFetcherErrorMimic
} from '../types';

/**
 * 自动从 FetcherError 提取详细信息
 * 
 * Fetcher 的错误中有很多有用的信息，可以从里边提取，但如果不是 fetcher 的错误，
 * 需要将信息展示到详情里边，需要自己塞一个 `details: IErrorDetails` 对象进去。
 */
export default function getErrorDetails(err?: IFetcherErrorMimic): IErrorDetails | undefined {
  const config = err?.config;
  
  if (!config) {
    return;
  }
  
  return {
    url: config.url,
    method: config.method,
    params: config.params,
    body: config.body
  };
}