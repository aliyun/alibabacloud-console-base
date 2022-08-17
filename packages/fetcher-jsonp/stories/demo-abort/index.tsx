import React, {
  useState,
  useCallback
} from 'react';

import {
  URLS
} from '@alicloud/fetcher-demo-helpers';
import {
  Button,
  PrePromise
} from '@alicloud/demo-rc-elements';

import jsonp from '../../src';
import PkgInfo from '../pkg-info';

// 失败 - 事件顺序：Abort 时间 → 成功时间 → 超时时间，所以一般会 Abort
function testJsonpAbort(abortTime = 40, timeout = 2000): Promise<unknown> {
  const abortController = new AbortController();
  
  setTimeout(() => {
    abortController.abort();
  }, abortTime);
  
  return jsonp(URLS.SUCCESS, {
    signal: abortController.signal,
    timeout
  }).then(response => response.json());
}

// 失败 - 事件顺序：超时 → abort → 回调
function testJsonpTimeoutAbortSuccess(): Promise<unknown> {
  return testJsonpAbort(30, 20);
}

// 成功 - 事件顺序：回调 → 超时 → abort
function testJsonpSuccessTimeoutAbort(): Promise<unknown> {
  return testJsonpAbort(3000);
}

export default function DemoAbort(): JSX.Element {
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>();
  
  const handleTest1 = useCallback(() => setStatePromise(testJsonpAbort()), []);
  const handleTest2 = useCallback(() => setStatePromise(testJsonpTimeoutAbortSuccess()), []);
  const handleTest3 = useCallback(() => setStatePromise(testJsonpSuccessTimeoutAbort()), []);
  
  return <>
    <PkgInfo />
    <Button onClick={handleTest1}>失败：Abort 时间 → 成功时间 → 超时时间</Button>
    <Button onClick={handleTest2}>失败：超时时间 → Abort 时间 → 成功时间</Button>
    <Button onClick={handleTest3}>成功：成功时间 → 超时时间 → Abort 时间</Button>
    <PrePromise promise={statePromise} />
  </>;
}
