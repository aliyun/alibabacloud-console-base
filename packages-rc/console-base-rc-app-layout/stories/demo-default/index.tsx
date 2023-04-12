import React, {
  useState
} from 'react';

import {
  InputSwitch
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import AppLayout from '../../src';
import PkgInfo from '../pkg-info';
import {
  NAV
} from '../const';

export default function DemoDefault(): JSX.Element {
  const [stateCollapsed, setStateCollapsed] = useState(false);
  
  return <AppLayout {...{
    asideNavProps: {
      ...NAV,
      collapsed: stateCollapsed,
      onCollapsedChange: setStateCollapsed
    }
  }}>
    <ThemeSwitcher />
    <PkgInfo />
    <InputSwitch {...{
      label: 'props.asideNavProps.collapsed',
      value: stateCollapsed,
      onChange: setStateCollapsed
    }} />
  </AppLayout>;
}
