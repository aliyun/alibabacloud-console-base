import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Breadcrumb from '../../src';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
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
