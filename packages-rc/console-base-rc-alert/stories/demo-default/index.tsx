import React, {
  useState
} from 'react';
import styled from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  Hr,
  InputText,
  InputSwitch,
  RadioGroup
} from '@alicloud/demo-rc-elements';

import Alert, {
  AlertTheme
} from '../../src';
import PkgInfo from '../pkg-info';

const ScAlert = styled(Alert)`
  margin: 16px 4px;
`;

export default function DemoDefault(): JSX.Element {
  const [stateTitle, setStateTitle] = useState<string>('Alert Title');
  const [stateMessage, setStateMessage] = useState<string>('This is alert message which shall end with a punctuation mark.');
  const [stateTheme, setStateTheme] = useState<AlertTheme | undefined>();
  const [stateVisible, setStateVisible] = useState<boolean>(true);
  const [stateToast, setStateToast] = useState<boolean>(false);
  const [stateAutoClose, setStateAutoClose] = useState<boolean>(false);
  const [stateClosable, setStateClosable] = useState<boolean>(false);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <div>
      title = <InputText {...{
        value: stateTitle,
        onChange: setStateTitle
      }} />
      message = <InputText {...{
        value: stateMessage,
        onChange: setStateMessage
      }} />
    </div>
    <InputSwitch {...{
      label: 'props.visible',
      value: stateVisible,
      onChange: setStateVisible
    }} />
    <InputSwitch {...{
      label: 'props.toast',
      value: stateToast,
      onChange: setStateToast
    }} />
    <InputSwitch {...{
      label: 'props.autoClose',
      value: stateAutoClose,
      onChange: setStateAutoClose
    }} />
    <InputSwitch {...{
      label: 'props.closable',
      value: stateClosable,
      onChange: setStateClosable
    }} />
    <RadioGroup<AlertTheme | undefined> {...{
      label: 'props.theme',
      items: [{
        value: undefined,
        label: '(not set)'
      }, {
        value: AlertTheme.HELP,
        label: 'HELP'
      }, {
        value: AlertTheme.INFO,
        label: 'INFO'
      }, {
        value: AlertTheme.SUCCESS,
        label: 'SUCCESS'
      }, {
        value: AlertTheme.WARNING,
        label: 'WARNING'
      }, {
        value: AlertTheme.ERROR,
        label: 'ERROR'
      }, {
        value: AlertTheme.LOADING,
        label: 'LOADING'
      }],
      value: stateTheme,
      onChange: setStateTheme
    }} />
    <Hr />
    <ScAlert {...{
      title: stateTitle,
      message: stateMessage,
      theme: stateTheme,
      visible: stateVisible,
      toast: stateToast,
      closable: stateClosable,
      autoClose: stateAutoClose,
      onVisibleChange: setStateVisible
    }} />
  </>;
}
