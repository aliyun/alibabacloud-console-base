import React from 'react';

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
    <PkgInfo />
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
