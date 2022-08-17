import React from 'react';

import {
  FetcherDemoRcFetchers,
  FetcherDemoRcMockArms
} from '@alicloud/fetcher-demo-helpers';

import PkgInfo from '../pkg-info';
import {
  fetcher0,
  fetcher1
} from '../fetcher';

export default function DemoDefault(): JSX.Element {
  return <>
    <PkgInfo />
    <FetcherDemoRcMockArms />
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
  </>;
}
