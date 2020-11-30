import React from 'react';

import {
  P,
  Button
} from '@alicloud/demo-rc-elements';

import sls from '../../src';

function testSls(): void {
  sls('@alicloud/console-base-log-sls');
  sls.debug('@alicloud/console-base-log-sls/debug');
  sls.log('@alicloud/console-base-log-sls/log');
  sls.info('@alicloud/console-base-log-sls/info');
  sls.warn('@alicloud/console-base-log-sls/warn');
  sls.error('@alicloud/console-base-log-sls/error');
  sls.fatal('@alicloud/console-base-log-sls/fatal');
  sls.biz('@alicloud/console-base-log-sls/biz');
}

export default function DemoDefault(): JSX.Element {
  return <>
    <P>看 Console</P>
    <Button onClick={testSls}>TEST</Button>
  </>;
}
