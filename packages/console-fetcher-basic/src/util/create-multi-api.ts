import {
  FetcherFnPost
} from '@alicloud/fetcher';

import {
  IFnConsoleApiMulti,
  IApiMultiAction,
  TApiMultiResult,
  IApiBodyMulti
} from '../types';
import {
  ETypeApiMulti
} from '../const';

import composeApiUrl from './compose-api-url';

function getApiUrl(type: ETypeApiMulti): string {
  switch (type) {
    case ETypeApiMulti.OPEN:
      return '/data/multiApi.json';
    default:
      throw new Error(`OneAPI type ${type} not supported!`);
  }
}

/**
 * OpenAPI 多 action 并发调用
 *
 * 仅支持「单产品单地域」的多 action 调用，不同产品不通过地域的 endpoint 不同，并发调用没办法复用 HTTP 层连接，没有太大的加速效果，
 * 这种情况直接通过前端 `Promise.all`。
 */
export default function createMultiApi(fetcherPost: FetcherFnPost, type: ETypeApiMulti): IFnConsoleApiMulti {
  const url = getApiUrl(type);
  
  return (product: string, actions: IApiMultiAction[]): Promise<TApiMultiResult> => fetcherPost<TApiMultiResult, IApiBodyMulti>(composeApiUrl(url, product, actions.map(v => v.action)), {
    product,
    actions: JSON.stringify(actions)
  });
}
