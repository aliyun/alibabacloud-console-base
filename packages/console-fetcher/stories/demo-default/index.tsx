import React from 'react';

import {
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';

import {
  fetcher0,
  fetcher1
} from '../fetcher';

export default function DemoDefault(): JSX.Element {
  return <FetcherDemoRcFetchers {...{
    fetcher0,
    fetcher1
  }} />;
}
