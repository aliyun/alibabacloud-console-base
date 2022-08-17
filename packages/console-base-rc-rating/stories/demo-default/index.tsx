import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  InputNumber,
  InputSwitch
} from '@alicloud/demo-rc-elements';

import PkgInfo from '../pkg-info';
import Rating from '../../src';

export default function DemoDefault(): JSX.Element {
  const [stateValue, setStateValue] = useState<number | undefined>(3);
  const [stateDisabled, setStateDisabled] = useState<boolean>(false);
  const [stateReadOnly, setStateReadOnly] = useState<boolean>(false);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <div>
      <InputNumber {...{
        min: 0,
        max: 5,
        value: stateValue,
        onChange: setStateValue
      }} />
      <br />
      <InputSwitch {...{
        label: 'props.disabled TODO 未实现',
        value: stateDisabled,
        onChange: setStateDisabled
      }} />
      <InputSwitch {...{
        label: 'props.readOnly TODO 未实现',
        value: stateReadOnly,
        onChange: setStateReadOnly
      }} />
    </div>
    <Rating {...{
      disabled: stateDisabled,
      readOnly: stateReadOnly,
      value: stateValue
      // onChange: setStateValue // TODO 未实现
    }} /> should be middle aligned
  </>;
}
