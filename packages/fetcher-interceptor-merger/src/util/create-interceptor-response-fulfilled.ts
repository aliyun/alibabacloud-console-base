import _cloneDeep from 'lodash/cloneDeep';

import {
  FetcherFnInterceptResponseFulfilled
} from '@alicloud/fetcher';

import {
  IFetcherConfigExtendedForResponse
} from '../types';

import mergerResolve from './merger/resolve';

export default function createInterceptorResponseFulfilled(): FetcherFnInterceptResponseFulfilled<IFetcherConfigExtendedForResponse> {
  return (data: unknown, {
    merger
  }: IFetcherConfigExtendedForResponse): unknown => {
    if (merger) {
      mergerResolve(merger.key, data);
    }
    
    return _cloneDeep(data); // 避免第一个请求对 data 做了 mutation 而影响到后续的结果
  };
}
