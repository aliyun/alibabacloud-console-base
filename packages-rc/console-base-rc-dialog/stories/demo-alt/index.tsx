/* eslint-disable no-console */
import React from 'react';

import {
  H1,
  Button
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import {
  alert,
  confirm,
  prompt
} from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H1>替代 <code>window.alert</code></H1>
    <Button {...{
      onClick: () => alert('alert message as string').then(console.info)
    }}>内容是字符串</Button>
    <Button {...{
      onClick: () => alert(<div>message as JSX and type info</div>, {
        type: 'info'
      }).then(console.info)
    }}>内容是 JSX 且 info 样式</Button>
    <Button {...{
      onClick: () => alert('alert message as string', {
        type: 'success'
      }).then(console.info)
    }}>success 样式</Button>
    <Button {...{
      onClick: () => alert('alert message as string', {
        type: 'error'
      }).then(console.info)
    }}>error 样式</Button>
    <Button {...{
      onClick: () => alert('alert message as string', {
        type: 'error'
      }).then(console.info)
    }}>alert - error</Button>
    <H1>替代 <code>window.confirm</code></H1>
    <Button {...{
      onClick: () => confirm('confirm message as string?').then(console.info)
    }}>confirm</Button>
    <Button {...{
      onClick: () => confirm('confirm message as string?', {
        type: 'alert'
      }).then(console.info)
    }}>confirm - alert</Button>
    <Button {...{
      onClick: () => confirm('confirm message as string?', {
        type: 'error'
      }).then(console.info)
    }}>confirm - error</Button>
    <H1>替代 <code>window.prompt</code></H1>
    <Button {...{
      onClick: () => prompt().then(console.info)
    }}>prompt</Button>
    <Button {...{
      onClick: () => prompt({
        title: '可以加标题',
        message: '可以加说明',
        placeholder: '可以加 placeholder',
        minLength: 10,
        maxLength: 20,
        asTextarea: true
      }, {
        ok: '自定义'
      }).then(console.info)
    }}>prompt</Button>
  </>;
}
