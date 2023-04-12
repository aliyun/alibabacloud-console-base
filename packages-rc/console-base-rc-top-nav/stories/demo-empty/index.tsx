import React, {
  useState
} from 'react';

import {
  InputSwitch
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import TopNav, {
  TopNavProps
} from '../../src';
import PkgInfo from '../pkg-info';

const propsNull: TopNavProps = {
  dock: null,
  logo: null,
  menus: null,
  language: null,
  account: null,
  customLeft: null,
  customRight: null
};

export default function DemoEmpty(): JSX.Element {
  const [stateNullProps, setStateNullProps] = useState<boolean>(false);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    {stateNullProps ? <TopNav {...propsNull} /> : <TopNav />}
    <InputSwitch {...{
      label: 'null props',
      value: stateNullProps,
      onChange: setStateNullProps
    }} />
  </>;
}
