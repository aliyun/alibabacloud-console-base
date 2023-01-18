import React from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  P,
  Button
} from '@alicloud/demo-rc-elements';

import errorPrompt from '../../src';
import PkgInfo from '../pkg-info';

function testExtra(): void {
  errorPrompt(new Error('some message'), {
    message: '覆盖的 message',
    button: {
      label: '增加的 Button'
    }
  });
}

export default function DemoExtra(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <P>通过 extra 参数可以覆盖 message 或增加 button</P>
    <Button onClick={testExtra}>使用 extra</Button>
  </>;
}
