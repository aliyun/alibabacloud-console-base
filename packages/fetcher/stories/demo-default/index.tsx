import React from 'react';

import {
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';

import {
  fetcher0,
  fetcher1
} from '../fetcher';

import OtherTests from './other-tests';

export default function DemoDefault(): JSX.Element {
  return <>
    <FetcherDemoRcFetchers {...{
      fetcher0,
      fetcher1
    }} />
    <OtherTests />
  </>;
}
