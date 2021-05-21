/* eslint-disable no-console */
import React, {
  useState
} from 'react';

import {
  H1,
  Button,
  PreJson
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Dialog, {
  DialogProps,
  DialogPropsAlert,
  DialogPropsConfirm,
  DialogPropsPrompt,
  open,
  slide,
  slideUp,
  alert,
  confirm,
  prompt
} from '../../src';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateYes, setStateYes] = useState<boolean>(false);
  const [stateProps, setStateProps] = useState<Partial<DialogProps>>({});
  
  return <>
    <ThemeSwitcher />
    <Knobs onChange={setStateProps} />
    <H1>基础用法</H1>
    <Button {...{
      onClick: () => setStateYes(true)
    }}>as component</Button>
    <Button {...{
      onClick: () => open(stateProps)
    }}>as promise</Button>
    <H1>快速方法：<code>open</code>、<code>slide</code>、<code>slideUp</code></H1>
    <Button {...{
      onClick: () => open(stateProps).then(console.info)
    }}>open</Button>
    <Button {...{
      onClick: () => slide(stateProps).then(console.info)
    }}>slide</Button>
    <Button {...{
      onClick: () => slideUp(stateProps).then(console.info)
    }}>slideUp</Button>
    <H1>原生 <code>alert</code>、<code>confirm</code>、<code>prompt</code> 的替代方法</H1>
    <Button {...{
      onClick: () => alert(stateProps as DialogPropsAlert).then(console.info)
    }}>alert</Button>
    <Button {...{
      onClick: () => alert(stateProps as DialogPropsAlert, {
        type: 'info'
      }).then(console.info)
    }}>alert - info</Button>
    <Button {...{
      onClick: () => alert(stateProps as DialogPropsAlert, {
        type: 'success'
      }).then(console.info)
    }}>alert - success</Button>
    <Button {...{
      onClick: () => alert(stateProps as DialogPropsAlert, {
        type: 'error'
      }).then(console.info)
    }}>alert - error</Button>
    <Button {...{
      onClick: () => confirm(stateProps as unknown as DialogPropsConfirm).then(console.info)
    }}>confirm</Button>
    <Button {...{
      onClick: () => prompt(stateProps as unknown as DialogPropsPrompt<any>).then(console.info)
    }}>prompt</Button>
    <PreJson o={stateProps} />
    {stateYes ? <Dialog {...{
      ...stateProps,
      onClose() {
        setStateYes(false);
      }
    }} /> : null}
  </>;
}
