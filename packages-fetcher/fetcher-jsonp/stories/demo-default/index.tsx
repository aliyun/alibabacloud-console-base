import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
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
    <ThemeSwitcher />
    <PkgInfo />
    <FetcherDemoRcRequest {...{
      request: testWithFetch
    }} />
  </>;
}
