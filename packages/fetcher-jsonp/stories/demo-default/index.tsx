import React from 'react';

import {
  FetcherDemoConfig,
  FetcherDemoRcRequest
} from '@alicloud/fetcher-demo-helpers';

import jsonp from '../../src';

function testWithFetch({
  url,
  timeout
}: FetcherDemoConfig): Promise<unknown> {
  return jsonp(url, {
    timeout
  }).then(response => response.json());
}

export default function DemoDefault(): JSX.Element {
  return <FetcherDemoRcRequest {...{
    request: testWithFetch
  }} />;
}
