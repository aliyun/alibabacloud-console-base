import React from 'react';

import {
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
    <H1>利用 oneapi.alibaba-inc.com 对非 OneConsole 接口进行 mock</H1>
    <FetcherDemoRcFetchers {...{
      urls: {
        SUCCESS: '/boshit/success',
        OSS_AJAX_BUCKET_LIST: '/oss/ajax/bucket/list.json',
        RAM_LIST_GROUPS: '/ram/ListGroups.json' // 实际上是 ram_next
      },
      fetcher0,
      fetcher1
    }} />
  </>;
}
