import React, {
  useEffect
} from 'react';

import {
  H2,
  List
} from '@alicloud/demo-rc-elements';

import {
  mockSecToken,
  mockCollina,
  mockUmId
} from '../../util';

/**
 * 模拟安全参数所需的全局依赖
 */
export default function FetcherDemoRcMockSecurity(): JSX.Element {
  useEffect(() => {
    mockSecToken();
    mockCollina();
    mockUmId();
  }, []);
  
  return <>
    <H2>安全参数 Mocking</H2>
    <List>
      <><strong>sec_token</strong> 已用 OneConsole 标准模式注入</>
      <><strong>collina</strong> 脚本 <code>uab.js</code> 已注入</>
      <><strong>umid</strong> 脚本 <code>um.js</code> 已注入</>
    </List>
  </>;
}
