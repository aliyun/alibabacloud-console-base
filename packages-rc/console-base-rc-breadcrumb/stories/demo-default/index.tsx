import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import Breadcrumb from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <Breadcrumb {...{
      items: [{
        label: 'Home',
        href: '/home'
      }, {
        label: 'Yuck',
        href: '/yuck'
      }, {
        label: 'Fou',
        href: '/fou'
      }, {
        label: 'Any Time'
      }]
    }} />
  </>;
}
