import React from 'react';

import {
  P
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';

import PkgInfo from '../pkg-info';
import {
  fetcher0,
  fetcher1
} from '../fetcher';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <P>！必要前置拦截器：<code>@alicloud/console-fetcher-interceptor-res-biz</code></P>
    <P>knob 选择带风控的 url 进行测试，去 <a href="https://oneapi.alibaba-inc.com/eapi/interface-manager?projectCode=boshit&apiName=risk&method=ALL" target="_blank" rel="noopener noreferrer">MOCK 平台</a> 下切换该接口不同场景进行测试</P>
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
  </>;
}
