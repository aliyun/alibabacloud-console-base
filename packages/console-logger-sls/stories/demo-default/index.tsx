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
      xx: Date.now()
    };
  }
});

function testSls(): void {
  sls('@alicloud/console-logger-sls');
  sls.debug('@alicloud/console-logger-sls/debug');
  sls.log('@alicloud/console-logger-sls/log');
  sls.info('@alicloud/console-logger-sls/info');
  sls.warn('@alicloud/console-logger-sls/warn');
  sls.error('@alicloud/console-logger-sls/error');
  sls.fatal('@alicloud/console-logger-sls/fatal');
  sls.biz('@alicloud/console-logger-sls/biz');
}

export default function DemoDefault(): JSX.Element {
  return <>
    <P>看 Console</P>
    <Button onClick={testSls}>TEST</Button>
  </>;
}
