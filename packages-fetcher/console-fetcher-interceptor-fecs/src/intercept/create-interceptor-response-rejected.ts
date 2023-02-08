import {
  FetcherConfig,
  FetcherResponse,
  FetcherError,
  FetcherFnRequest,
  FetcherFnInterceptResponseRejected
} from '@alicloud/fetcher';

import {
  ERROR_CODE_TOKEN_INVALID,
  ERROR_CODE_TOKEN_REFRESH_FAILED,
  ERROR_MESSAGE_TOKEN_REFRESH_FAILED,
  ERROR_CODE_TOKEN_AFTER_REFRESH,
  ERROR_MESSAGE_TOKEN_AFTER_REFRESH
} from '../const';
import {
  isFecs,
  refreshToken
} from '../util';

interface IFetcherConfig extends FetcherConfig {
  tokenRefreshed?: boolean;
}

async function interceptResponse(err: FetcherError, fetcherConfig: IFetcherConfig, _response: FetcherResponse | undefined, request: FetcherFnRequest): Promise<unknown> {
  if (!isFecs(fetcherConfig) || err?.code !== ERROR_CODE_TOKEN_INVALID) {
    throw err;
  }
  
  // 已经刷新过 token，且也刷新成功，但还是 token 不对，源错误修改 code 和 message 再外抛
  if (fetcherConfig.tokenRefreshed) {
    err.code = ERROR_CODE_TOKEN_AFTER_REFRESH;
    err.message = ERROR_MESSAGE_TOKEN_AFTER_REFRESH;
    
    throw err;
  }
  
  // 刷新后重新请求
  return refreshToken().then(() => {
    fetcherConfig.tokenRefreshed = true; // 避免无限循环
    
    return request(fetcherConfig);
  }, () => { // 刷新 token 失败，源错误修改 code 和 message 再外抛
    err.code = ERROR_CODE_TOKEN_REFRESH_FAILED;
    err.message = ERROR_MESSAGE_TOKEN_REFRESH_FAILED;
    
    throw err;
  });
}

/**
 * 处理 FECS 的返回，如果抛错说 TOKEN 错误，则刷新 token 并重新再请求一次
 */
export default function createInterceptorResponseRejected(): FetcherFnInterceptResponseRejected<IFetcherConfig> {
  return interceptResponse;
}
