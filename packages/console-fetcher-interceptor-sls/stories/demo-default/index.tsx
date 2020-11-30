import React from 'react';

import {
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';
import {
  H1,
  P
} from '@alicloud/demo-rc-elements';

import {
  fetcher0,
  fetcher1
} from '../fetcher';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>发送错误时发送 SLS</H1>
    <P>SLS 账号 <code>flyinhighwj</code>，<a href="https://sls.console.aliyun.com/lognext/project/console-base/logsearch/dev" target="_blank">日志地址</a>。</P>
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
  </>;
}
