import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  FetcherDemoConfig,
  FetcherDemoRcRequest
} from '@alicloud/fetcher-demo-helpers';

import fetch from '../../src';
import PkgInfo from '../pkg-info';

function request({
  url = '',
  ...options
}: FetcherDemoConfig): Promise<unknown> {
  return fetch(url, options).then(response => response.json());
}

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <FetcherDemoRcRequest {...{
      request
    }} />
  </>;
}
