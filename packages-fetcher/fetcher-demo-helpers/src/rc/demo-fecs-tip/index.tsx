import React from 'react';

import {
  H1,
  P,
  List
} from '@alicloud/demo-rc-elements';

export default function FetcherDemoRcFecsTip(): JSX.Element {
  return <>
    <H1>关于 FECS 本地开发</H1>
    <P>这里用到了 FECS 提供的接口，如果 <strong>接口调不通或报错</strong>，你需要：</P>
    <List ordered>
      <>绑定 <code>fecs.console.aliyun.com</code> 预发；</>
      <>本地 IP 绑 <code>*.console.aliyun.com</code>；</>
      <>在正式环境下登录。</>
    </List>
    <P>具体请看 <a href="https://yuque.antfin-inc.com/docs/share/c5d0fea5-0626-444f-a58f-2e92575589a1" target="_blank" rel="noopener noreferrer">FESC 本地开发</a>。</P>
  </>;
}
