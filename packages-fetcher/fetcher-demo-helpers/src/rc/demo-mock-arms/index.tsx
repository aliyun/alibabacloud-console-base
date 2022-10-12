import React, {
  useEffect
} from 'react';

import {
  H2
} from '@alicloud/demo-rc-elements';

import {
  mockArms
} from '../../util';

export default function DemoMockArms(): JSX.Element {
  useEffect(mockArms, []);
  
  return <>
    <H2>ARMS Mocking</H2>
    <div><strong>ARMS</strong> 脚本 <code>bl.js</code> 已注入</div>
  </>;
}
