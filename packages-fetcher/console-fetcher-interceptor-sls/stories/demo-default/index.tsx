import React from 'react';

import {
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';
import {
  P
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import PkgInfo from '../pkg-info';
import {
  fetcher0,
  fetcher1
} from '../fetcher';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <P>SLS 账号 <code>flyinhighwj</code>，<a href="https://sls.console.aliyun.com/lognext/project/console-base/logsearch/dev" target="_blank" rel="noopener noreferrer">日志地址</a>。</P>
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
  </>;
}
