import React from 'react';

import {
  FetcherDemoRcMockSecurity,
  FetcherDemoRcFetchers
} from '@alicloud/fetcher-demo-helpers';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import PkgInfo from '../pkg-info';
import {
  fetcher0,
  fetcher1
} from '../fetcher';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <FetcherDemoRcMockSecurity />
    <FetcherDemoRcFetchers {...{
      defaultConfig: {
        method: 'POST'
      },
      fetcher0,
      fetcher1
    }} />
  </>;
}
