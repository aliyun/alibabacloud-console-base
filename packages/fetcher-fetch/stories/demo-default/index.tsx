import React from 'react';

import {
  FetcherDemoConfig,
  FetcherDemoRcRequest
} from '@alicloud/fetcher-demo-helpers';

import fetch from '../../src';

function request({
  url = '',
  ...options
}: FetcherDemoConfig): Promise<unknown> {
  return fetch(url, options).then(response => response.json());
}

export default function DemoDefault(): JSX.Element {
  return <FetcherDemoRcRequest {...{
    request
  }} />;
}
