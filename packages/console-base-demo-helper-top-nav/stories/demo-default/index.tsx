import React from 'react';

import DemoHelperTopNav from '../../src';
import pkgInfo from '../../package.json';

export default function DemoDefault(): JSX.Element {
  return <>
    <DemoHelperTopNav pkgInfo={pkgInfo} rightItems={[{
      key: 'right-1',
      label: 'right 1',
      tip: 'hello'
    }]}>
      <div>child 1</div>
      <div>child 2</div>
    </DemoHelperTopNav>
    <div>链接有全局样式</div>
    <div><a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">AliYun</a></div>
    <div><a href="https://www.taobao.com" target="_blank" rel="noopener noreferrer">TaoBao</a></div>
    <div><a href="https://www.tmall.com" target="_blank" rel="noopener noreferrer">TMall</a></div>
  </>;
}
