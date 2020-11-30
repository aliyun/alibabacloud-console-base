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

import ProxyMock from './proxy-mock';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>fetcher proxy</H1>
    <ProxyMock />
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
  </>;
}
