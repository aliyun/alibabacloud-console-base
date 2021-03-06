import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';
import {
  FetcherDemoRcMockSecurity,
  FetcherDemoRcMockArms,
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';

import {
  fetcher0,
  fetcher1
} from '../fetcher';

import ConsoleApiTest from './console-api-test';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>Mock</H1>
    <FetcherDemoRcMockSecurity />
    <FetcherDemoRcMockArms />
    <H1>非 Console API 方法测试</H1>
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
    <ConsoleApiTest />
  </>;
}
