import React from 'react';

import {
  P,
  Button
} from '@alicloud/demo-rc-elements';

import sls from '../_sls';

function testSls(): void {
  sls('@alicloud/logger-sls');
}

function testSlsDebug(): void {
  sls.debug('@alicloud/logger-sls/debug');
}

function testSlsLog(): void {
  sls.log('@alicloud/logger-sls/log');
}

function testSlsInfo(): void {
  sls.info('@alicloud/logger-sls/info');
}

function testSlsWarn(): void {
  sls.warn('@alicloud/logger-sls/warn');
}

function testSlsError(): void {
  sls.error('@alicloud/logger-sls/error');
}

function testSlsFatal(): void {
  sls.fatal('@alicloud/logger-sls/fatal');
}

function testSlsBiz(): void {
  sls.biz('@alicloud/logger-sls/biz');
}

function testSlsMultiple(): void {
  testSls();
  testSlsDebug();
  testSlsLog();
  testSlsInfo();
  testSlsWarn();
  testSlsError();
  testSlsFatal();
  testSlsBiz();
}

export default function DemoDefault(): JSX.Element {
  return <>
    <P>看 Console</P>
    <Button onClick={testSlsMultiple}>testSlsMultiple</Button>
    <Button onClick={testSls}>testSls</Button>
    <Button onClick={testSlsDebug}>testSlsDebug</Button>
    <Button onClick={testSlsLog}>testSlsLog</Button>
    <Button onClick={testSlsInfo}>testSlsInfo</Button>
    <Button onClick={testSlsWarn}>testSlsWarn</Button>
    <Button onClick={testSlsError}>testSlsError</Button>
    <Button onClick={testSlsFatal}>testSlsFatal</Button>
    <Button onClick={testSlsBiz}>testSlsBiz</Button>
  </>;
}
