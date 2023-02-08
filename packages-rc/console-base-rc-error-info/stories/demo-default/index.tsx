import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  InputSwitch
} from '@alicloud/demo-rc-elements';

import ErrorInfo from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  const [stateMessageShouldShow, setStateMessageShouldShow] = useState(false);
  const [stateFoldable, setStateFoldable] = useState(true);
  const [stateFolded, setStateFolded] = useState(false);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <InputSwitch {...{
      label: 'props.messageShouldShow',
      value: stateMessageShouldShow,
      onChange: setStateMessageShouldShow
    }} />
    <InputSwitch {...{
      label: 'props.foldable',
      value: stateFoldable,
      onChange: setStateFoldable
    }} />
    <InputSwitch {...{
      label: 'props.folded',
      value: stateFolded,
      onChange: setStateFolded
    }} />
    <ErrorInfo {...{
      error: {
        code: 'TestCode',
        requestId: 'i-4M-50M3-R39U357-1D',
        message: '这里错了，我们认为是这么个原因。<a href="//help.aliyun.com" target="_blank">文档</a>'
      },
      messageShouldShow: stateMessageShouldShow,
      foldable: stateFoldable,
      folded: stateFolded,
      onFoldedChange: setStateFolded
    }} />
  </>;
}
