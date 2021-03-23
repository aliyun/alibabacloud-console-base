import React, {
  useEffect
} from 'react';

import {
  H2
} from '@alicloud/demo-rc-elements';
import {
  installBl
} from '@alicloud/arms';

/**
 * 模拟埋入 arms 脚本
 * 文档：<https://yuque.antfin-inc.com/console/fzmkgr/smqpr2>
 */
export default function DemoInjectArms(): JSX.Element {
  useEffect(() => {
    installBl('ad45dhvr9m@6594c08d3216a5d', 'UID', {
      tag: 'TAG',
      environment: 'daily',
      disableHook: true
    });
  }, []);
  
  return <>
    <H2>ARMS Mocking</H2>
    <div><strong>ARMS</strong> 脚本 <code>bl.js</code> 已注入</div>
  </>;
}
