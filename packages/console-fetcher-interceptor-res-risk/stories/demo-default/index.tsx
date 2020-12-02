import React from 'react';

import {
  H1,
  P
} from '@alicloud/demo-rc-elements';
import {
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';

import {
  fetcher0,
  fetcher1
} from '../fetcher';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>风控！！</H1>
    <P>！必要前置拦截器：<code>@alicloud/console-fetcher-interceptor-res-biz</code></P>
    <P>knob 选择带风控的 url 进行测试，去 <a href="https://mocks.alibaba-inc.com/project/boshit/risk" target="_blank" rel="noopener noreferrer">mocks</a> 下切换该接口不同场景进行测试</P>
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
  </>;
}
