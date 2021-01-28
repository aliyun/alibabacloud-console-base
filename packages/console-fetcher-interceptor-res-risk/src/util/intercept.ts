import {
  Fetcher
} from '@alicloud/fetcher';

import {
  IRiskConfig
} from '../types';

import createInterceptorResponseRejected from './create-interceptor-response-rejected';

export default function intercept(fetcher: Fetcher, o?: IRiskConfig): () => void {
  return fetcher.interceptResponse(undefined, createInterceptorResponseRejected(o));
}
