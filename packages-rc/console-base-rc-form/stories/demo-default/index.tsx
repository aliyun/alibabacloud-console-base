import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  InputText,
  InputTextarea,
  InputNumber,
  InputSwitch
} from '@alicloud/demo-rc-elements';

import Form from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  const [stateDense, setStateDense] = useState<boolean>();
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <Form {...{
      dense: stateDense,
      items: [{
        label: 'props.dense',
        content: <InputSwitch {...{
          value: stateDense,
          onChange: setStateDense
        }} />
      }, {
        label: '非输入框',
        content: '1234-567890-9876542-23456789',
        help: '这个东西来自哪里，用来做什么。'
      }, {
        label: 'InputText',
        content: <InputText />,
        help: '尽量对无法直观理解的输入进行说明。'
      }, {
        label: 'InputTextarea',
        content: <InputTextarea />
      }, {
        label: 'InputNumber',
        content: <InputNumber />
      }, {
        label: 'InputSwitch',
        content: <InputSwitch />
      }]
    }} />
  </>;
}
