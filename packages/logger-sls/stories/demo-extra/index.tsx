import React, {
  useEffect
} from 'react';

import {
  P,
  Button
} from '@alicloud/demo-rc-elements';

import sls from '../_sls';

function testSlsOnLoad(): void {
  sls('@alicloud/logger-sls/on-load');
}

function testSlsInstant(): void {
  sls('@alicloud/logger-sls/instant', {
    type: 'instant',
    hello: 'world'
  }, {
    instant: true
  });
}

function testSlsOnce(): void {
  sls('@alicloud/logger-sls/once', undefined, {
    once: true
  });
}

function testSlsOnceCustom(): void {
  sls('@alicloud/logger-sls/once-custom', undefined, {
    once: 'hello'
  });
}

function testSlsOnceCustom2(): void {
  sls('@alicloud/logger-sls/once-custom2', undefined, {
    once: 'hello'
  });
}

function testSlsSampling(): void {
  sls('@alicloud/logger-sls/sampling', undefined, {
    sampling: 0.1
  });
}

export default function DemoExtra(): JSX.Element {
  useEffect(() => {
    testSlsOnLoad(); // 会延时发送
    testSlsInstant(); // 立即发送
  }, []);
  
  return <>
    <P>看 Console</P>
    <Button onClick={testSlsInstant}>testSlsInstant</Button>
    <Button onClick={testSlsOnce}>testSlsOnce</Button>
    <Button onClick={testSlsOnceCustom}>testSlsOnceCustom</Button>
    <Button onClick={testSlsOnceCustom2}>testSlsOnceCustom2</Button>
    <Button onClick={testSlsSampling}>testSlsSampling</Button>
  </>;
}
