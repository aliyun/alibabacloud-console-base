/* eslint-disable no-console */
import React, {
  useState
} from 'react';

import {
  H1,
  Button,
  PreJson,
  Hr
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import Dialog, {
  DialogProps,
  open,
  slide,
  slideUp
} from '../../src';
import PkgInfo from '../pkg-info';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateYes, setStateYes] = useState<boolean>(false);
  const [stateProps, setStateProps] = useState<Partial<DialogProps>>({});
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
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
    <Hr />
    <PreJson o={stateProps} />
    {stateYes ? <Dialog {...{
      ...stateProps,
      onClose() {
        setStateYes(false);
      }
    }} /> : null}
  </>;
}
