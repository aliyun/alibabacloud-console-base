import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import Markdown from '../../src';
import PkgInfo from '../pkg-info';

import source from './_source';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <Markdown source={source} />
  </>;
}
