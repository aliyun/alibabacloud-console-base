import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import InputTextarea from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <InputTextarea />
  </>;
}
