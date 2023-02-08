import React, {
  useState
} from 'react';

import {
  H1,
  InputSwitch
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import InputSelect from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  const [stateDisabled, setStateDisabled] = useState<boolean>(false);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <InputSwitch {...{
      label: 'disabled',
      value: stateDisabled,
      onChange: setStateDisabled
    }} />
    <H1>有选项</H1>
    <InputSelect {...{
      disabled: stateDisabled,
      dataSource: [{
        label: '好的',
        value: true
      }, {
        label: '不好',
        value: false
      }]
    }} />
    <H1>无选项</H1>
    <InputSelect {...{
      disabled: stateDisabled,
      dataSource: []
    }} />
  </>;
}
