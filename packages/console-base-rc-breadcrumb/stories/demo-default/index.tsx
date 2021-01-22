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
        label: 'Fuck',
        href: '/fuck'
      }, {
        label: 'You',
        href: '/you'
      }, {
        label: 'Any Time'
      }]
    }} />
  </>;
}
