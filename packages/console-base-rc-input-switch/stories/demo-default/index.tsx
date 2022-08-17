import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  H1
} from '@alicloud/demo-rc-elements';

import InputSwitch from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  const [stateValue, setStateValue] = useState<boolean>(true);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H1>InputSwitch 测试</H1>
    <InputSwitch {...{
      label: 'one',
      value: stateValue,
      onChange: setStateValue
    }} />
    <InputSwitch {...{
      label: 'two',
      disabled: true,
      value: stateValue,
      onChange: setStateValue
    }} />
  </>;
}
