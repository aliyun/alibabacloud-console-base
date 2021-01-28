import {
  Fetcher
} from '@alicloud/console-fetcher';

import createInterceptorRequest from './create-interceptor-request';

export default function intercept(fetcher: Fetcher): void {
  fetcher.interceptRequest(createInterceptorRequest());
}
