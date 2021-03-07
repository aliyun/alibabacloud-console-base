import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Markdown from '../../src';

import source from './_source';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <Markdown source={source} />
  </>;
}
