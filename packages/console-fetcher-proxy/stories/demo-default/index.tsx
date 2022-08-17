import React from 'react';

import {
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';

import {
  fetcher0,
  fetcher1
} from '../fetcher';
import PkgInfo from '../pkg-info';

import ProxyMock from './proxy-mock';

export default function DemoDefault(): JSX.Element {
  return <>
    <PkgInfo />
    <ProxyMock />
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
  </>;
}
