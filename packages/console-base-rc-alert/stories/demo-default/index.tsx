import React, {
  useState
} from 'react';
import styled from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  InputSwitch
} from '@alicloud/demo-rc-elements';

import Alert, {
  AlertTheme
} from '../../src';

const ScAlert = styled(Alert)`
  margin: 16px 4px;
`;

export default function DemoDefault(): JSX.Element {
  const [stateToast, setStateToast] = useState<boolean>(false);
  
  return <>
    <ThemeSwitcher />
    <InputSwitch {...{
      label: 'props.toast',
      value: stateToast,
      onChange: setStateToast
    }} />
    <ScAlert {...{
      title: 'Alert Title (No theme)',
      message: 'This is the alert message.',
      toast: stateToast
    }} />
    <ScAlert {...{
      theme: AlertTheme.HELP,
      title: 'Alert Title',
      message: 'This is the alert message.',
      toast: stateToast
    }} />
    <ScAlert {...{
      theme: AlertTheme.INFO,
      title: 'Alert Title',
      message: 'This is the alert message.',
      toast: stateToast
    }} />
    <ScAlert {...{
      theme: AlertTheme.SUCCESS,
      title: 'Alert Title',
      message: 'This is the alert message.',
      toast: stateToast
    }} />
    <ScAlert {...{
      theme: AlertTheme.WARNING,
      title: 'Alert Title',
      message: 'This is the alert message.',
      toast: stateToast
    }} />
    <ScAlert {...{
      theme: AlertTheme.ERROR,
      title: 'Alert Title',
      message: 'This is the alert message.',
      toast: stateToast
    }} />
    <ScAlert {...{
      theme: AlertTheme.LOADING,
      title: 'Alert Title',
      message: 'This is the alert message.',
      toast: stateToast
    }} />
  </>;
}
