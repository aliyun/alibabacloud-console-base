import React from 'react';

import {
  FetcherDemoConfig,
  FetcherDemoRcRequest
} from '@alicloud/fetcher-demo-helpers';

import jsonp from '../../src';
import PkgInfo from '../pkg-info';

function testWithFetch({
  url,
  timeout
}: FetcherDemoConfig): Promise<unknown> {
  return jsonp(url, {
    timeout
  }).then(response => response.json());
}

export default function DemoDefault(): JSX.Element {
  return <>
    <PkgInfo />
    <FetcherDemoRcRequest {...{
      request: testWithFetch
    }} />
  </>;
}
