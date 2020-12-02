import React from 'react';

import {
  P,
  Button
} from '@alicloud/demo-rc-elements';

import createLogger from '../../src';

const sls = createLogger({
  project: 'boshit-test-sls',
  endpoint: 'cn-hangzhou.log.aliyuncs.com',
  logstore: 'nbtest',
  defaultParams() {
    return {
      fuck: Date.now()
    };
  }
});

function testSls(): void {
  sls('@alicloud/logger-sls');
  sls.debug('@alicloud/logger-sls/debug');
  sls.log('@alicloud/logger-sls/log');
  sls.info('@alicloud/logger-sls/info');
  sls.warn('@alicloud/logger-sls/warn');
  sls.error('@alicloud/logger-sls/error');
  sls.fatal('@alicloud/logger-sls/fatal');
  sls.biz('@alicloud/logger-sls/biz');
}

export default function DemoDefault(): JSX.Element {
  return <>
    <P>看 Console</P>
    <Button onClick={testSls}>TEST</Button>
  </>;
}
