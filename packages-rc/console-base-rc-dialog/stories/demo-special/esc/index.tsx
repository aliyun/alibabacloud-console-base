import React from 'react';

import {
  H1,
  P,
  Button
} from '@alicloud/demo-rc-elements';

import {
  open
} from '../../../src';

import Content from './content';

export default function Esc(): JSX.Element {
  return <>
    <H1>ESC</H1>
    <P>当页面上有 <code>.next-overlay-wrapper.opened</code> 的元素时需要组织 dialog 被 ESC 关闭</P>
    <Button {...{
      onClick: () => open({
        title: 'Mocking Fusion',
        content: <Content />,
        buttons: ['button 1', 'button 2']
      })
    }}>Open Dialog</Button>
  </>;
}
