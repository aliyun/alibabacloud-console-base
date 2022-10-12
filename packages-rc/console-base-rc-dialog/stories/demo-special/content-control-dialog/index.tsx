import React from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import {
  open,
  slide,
  slideUp
} from '../../../src';

import Content from './content';

const props = {
  title: '内容控制 Dialog',
  content: <Content />,
  buttons: ['好的', '不好']
};

export default function DemoSpecial(): JSX.Element {
  return <>
    <H1>测试内容控制 Dialog</H1>
    <Button {...{
      onClick: () => open(props)
    }}>open</Button>
    <Button {...{
      onClick: () => slide(props)
    }}>slide</Button>
    <Button {...{
      onClick: () => slideUp(props)
    }}>slideUp</Button>
  </>;
}
