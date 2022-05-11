import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  H1
} from '@alicloud/demo-rc-elements';

import InputSwitch from '../../src';

export default function DemoDefault(): JSX.Element {
  const [stateValue, setStateValue] = useState<boolean>(true);
  
  return <>
    <ThemeSwitcher />
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
