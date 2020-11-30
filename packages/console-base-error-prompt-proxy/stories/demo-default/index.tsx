import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import ProxyMock from './proxy-mock';
import ChooseNTest from './choose-n-test';
import SpecialCases from './special-cases';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>错误弹窗代理</H1>
    <ProxyMock />
    <ChooseNTest />
    <SpecialCases />
  </>;
}
