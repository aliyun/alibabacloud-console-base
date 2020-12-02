import React, {
  useEffect
} from 'react';

import {
  H2
} from '@alicloud/demo-rc-elements';

import injectScript from '../../util/inject-script';

interface IWindow extends Window {
  __bl?: {
    config: {
      pid: string; // ARMS pid，每个控制台产品不一样，测试用 ad45dhvr9m@6594c08d3216a5d
      uid?: string; // 用户 ID
      tag?: string; // channel
      imgUrl?: string; // 固定 https://arms-retcode.aliyuncs.com/r.png?
      release?: string;
      environment?: 'production' | 'pre' | 'daily';
      useFmp?: boolean;
      disableHook?: boolean;
      enableSPA?: boolean;
      // parseResponse?:(): object;
    };
  };
}

/**
 * 模拟埋入 arms 脚本
 * 文档：<https://yuque.antfin-inc.com/console/fzmkgr/smqpr2>
 */
export default function DemoInjectArms(): JSX.Element {
  useEffect(() => {
    if ((window as IWindow).__bl) {
      return;
    }
    
    (window as IWindow).__bl = {
      config: {
        pid: 'ad45dhvr9m@6594c08d3216a5d',
        imgUrl: 'https://arms-retcode.aliyuncs.com/r.png?',
        uid: 'UID',
        tag: 'TAG',
        // release: '1.3.4',
        environment: 'daily',
        disableHook: true
      }
    };
    
    injectScript('https://retcode.alicdn.com/retcode/bl.js');
  }, []);
  
  return <>
    <H2>ARMS Mocking</H2>
    <div><strong>ARMS</strong> 脚本 <code>bl.js</code> 已注入</div>
  </>;
}
