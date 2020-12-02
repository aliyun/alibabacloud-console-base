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
    <H1>数据接口业务处理器</H1>
    <P>阿里云的数据接口规范：code + data。code 为 200（通常是字符串）的时候业务成功，需要返回 data，否则失败，抛错。</P>
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
  </>;
}
