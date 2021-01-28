import React from 'react';

import {
  FetcherDemoRcRequest
} from '@alicloud/fetcher-demo-helpers';

import {
  request
} from '../fetcher';
import CacheStorage from '../cache-storage';

export default function DemoDefault(): JSX.Element {
  return <>
    <FetcherDemoRcRequest {...{
      request
    }} />
    <CacheStorage />
  </>;
}
