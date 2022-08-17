import React from 'react';

import {
  FetcherDemoRcMockSecurity,
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
