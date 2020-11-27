import React from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';

import {
  open
} from '../../../src';

import Content from './content';

export default function Focus(): JSX.Element {
  return <>
    <H1>焦点管理</H1>
    <Button {...{
      onClick: () => open({
        title: '内容有焦点区',
        content: <Content />,
        buttons: ['button 1', 'button 2']
      })
    }}>内容有焦点区</Button>
    <Button {...{
      onClick: () => open({
        title: '内容无焦点区',
        content: '当内容没有任何可获得焦点的元素时，会使用内容之外的 Dialog 上的元素，这里，X 将获得焦点。'
      })
    }}>内容无焦点区</Button>
    <Button {...{
      onClick: () => open({
        title: '内容无焦点区 2',
        content: '当内容没有任何可获得焦点的元素时，会使用内容之外的 Dialog 上的元素，这里，第一个按钮将获得焦点。',
        buttons: ['button 111', 'button 222', 'button 333']
      })
    }}>内容无焦点区 2</Button>
    <Button {...{
      onClick: () => open({
        title: '按 ESC 关闭',
        content: '当内容没有任何可获得焦点的元素时，Dialog 没有 X，也没有按钮，会 focus Dialog 本体。',
        closable: false,
        esc: -1
      })
    }}>内容无焦点区 3</Button>
  </>;
}
