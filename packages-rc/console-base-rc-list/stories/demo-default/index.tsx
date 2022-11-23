import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import List from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H1>UL</H1>
    <List>
      <a href="//www.aliyun.com" target="_blank" rel="noopener noreferrer">www.aliyun.com</a>
      <a href="//www.alibaba.com" target="_blank" rel="noopener noreferrer">www.alibaba.com</a>
    </List>
    <H1>OL</H1>
    <List ordered>
      <a href="//www.aliyun.com" target="_blank" rel="noopener noreferrer">www.aliyun.com</a>
      <a href="//www.alibaba.com" target="_blank" rel="noopener noreferrer">www.alibaba.com</a>
    </List>
    <H1>.map</H1>
    <List>
      {['//www.aliyun.com', '//www.alibaba.com'].map(v => <a key={v} href={v} target="_blank" rel="noopener noreferrer">{v}</a>)}
    </List>
  </>;
}
