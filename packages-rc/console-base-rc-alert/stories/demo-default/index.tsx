import React, {
  useState
} from 'react';
import styled from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  Hr,
  Form,
  InputText,
  InputTextarea,
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
  const [stateDense, setStateDense] = useState<boolean>(false);
  const [stateToast, setStateToast] = useState<boolean>(false);
  const [stateAutoClose, setStateAutoClose] = useState<boolean>(false);
  const [stateClosable, setStateClosable] = useState<boolean>(false);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <Form {...{
      dense: true,
      items: [{
        label: 'props.title',
        content: <InputText {...{
          value: stateTitle,
          onChange: setStateTitle
        }} />
      }, {
        label: 'props.message',
        content: <InputTextarea {...{
          value: stateMessage,
          onChange: setStateMessage
        }} />
      }, {
        label: 'props.visible',
        content: <InputSwitch {...{
          value: stateVisible,
          onChange: setStateVisible
        }} />
      }, {
        label: 'props.toast',
        content: <InputSwitch {...{
          value: stateToast,
          onChange: setStateToast
        }} />
      }, {
        label: 'props.dense',
        content: <InputSwitch {...{
          value: stateDense,
          onChange: setStateDense
        }} />
      }, {
        label: 'props.autoClose',
        content: <InputSwitch {...{
          value: stateAutoClose,
          onChange: setStateAutoClose
        }} />
      }, {
        label: 'props.closable',
        content: <InputSwitch {...{
          value: stateClosable,
          onChange: setStateClosable
        }} />
      }, {
        label: 'props.theme',
        content: <RadioGroup<AlertTheme | undefined> {...{
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
      }]
    }} />
    <Hr />
    <ScAlert {...{
      title: stateTitle,
      message: stateMessage,
      theme: stateTheme,
      visible: stateVisible,
      toast: stateToast,
      dense: stateDense,
      closable: stateClosable,
      autoClose: stateAutoClose,
      onVisibleChange: setStateVisible
    }} />
  </>;
}
