import {
  IFetcherConfig,
  IFetcherError,
  IFetcherErrorExtendedInfo
} from '../types';

/**
 * 创建 FetcherError 它一定得有 config 属性
 */
export default function createFetcherError<C extends IFetcherConfig = IFetcherConfig>(fetcherConfig: C, name: string, message?: string, info?: IFetcherErrorExtendedInfo): IFetcherError<C> {
  const error = new Error(message) as IFetcherError<C>;
  
  error.config = fetcherConfig;
  error.name = name;
  
  if (info) {
    if (info.title) {
      error.title = info.title;
    }
    
    if (info.code) {
      error.code = info.code;
    }
    
    if (info.requestId) {
      error.requestId = info.requestId;
    }
    
    if (info.responseData) {
      error.responseData = info.responseData;
    }
  }
  
  return error;
}