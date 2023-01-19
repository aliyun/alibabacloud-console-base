import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import InputSelect from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <InputSelect {...{
      dataSource: [{
        label: '好的',
        value: true
      }, {
        label: '不好',
        value: false
      }]
    }} />
    <InputSelect {...{
      dataSource: []
    }} />
  </>;
}
