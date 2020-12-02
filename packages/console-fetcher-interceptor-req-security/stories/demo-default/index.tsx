import React from 'react';

import {
  FetcherDemoRcMockSecurity,
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';
import {
  H1
} from '@alicloud/demo-rc-elements';

import {
  fetcher0,
  fetcher1
} from '../fetcher';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>在类 POST 请求的 body 中自动添加 <code>collina</code>、<code>sec_token</code>、<code>umid</code> 参数</H1>
    <FetcherDemoRcMockSecurity />
    <FetcherDemoRcFetchers {...{
      defaultConfig: {
        method: 'POST'
      },
      fetcher0,
      fetcher1
    }} />
  </>;
}
