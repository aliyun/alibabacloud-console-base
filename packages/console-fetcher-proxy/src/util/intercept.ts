import {
  Fetcher
} from '@alicloud/console-fetcher';

import createInterceptorRequest from './create-interceptor-request';

export default function intercept(fetcher: Fetcher): void {
  // 优先级为 1，这样它会第一时间执行并跳过所有的 request interceptor，因为它不能在 cacheLocal 和 merger 之后
  fetcher.interceptRequest(1, createInterceptorRequest());
}
