import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  H1,
  InputNumber,
  InputSwitch
} from '@alicloud/demo-rc-elements';

import pkgInfo from '../../package.json';
import Rating from '../../src';

export default function DemoDefault(): JSX.Element {
  const [stateValue, setStateValue] = useState<number | undefined>(3);
  const [stateDisabled, setStateDisabled] = useState<boolean>(false);
  const [stateReadOnly, setStateReadOnly] = useState<boolean>(false);
  
  return <>
    <ThemeSwitcher />
    <H1>{pkgInfo.name}@{pkgInfo.version} TODO 暂时只读</H1>
    <div>
      <InputNumber {...{
        min: 0,
        max: 3,
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
    }} />
  </>;
}
