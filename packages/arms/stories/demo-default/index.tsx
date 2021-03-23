import React, {
  useState,
  useCallback
} from 'react';

import {
  H1,
  P,
  PreJson,
  Button
} from '@alicloud/demo-rc-elements';

import {
  ArmsBlConfigBeforeReady,
  getBlConfig,
  installBl,
  armsSetConfig,
  armsSetPage,
  armsSetCommonInfo,
  armsCustom,
  armsApi,
  armsError,
  armsSpeed,
  armsSum,
  armsAvg,
  armsPercent,
  armsResource
} from '../../src';

function testInstallBl(): void {
  installBl('ad45dhvr9m@6594c08d3216a5d', 'UID', {
    tag: 'TAG',
    environment: 'daily'
  });
  
  // 如果没有安装，这两条日志会在安装完成后发送，用以测试 pipe 功能
  armsApi('/api/when-install', true, 1);
  armsError(new Error('when install'));
}

function testArmsSetConfig(): void {
  armsSetConfig({
    disabled: true
  });
}

function testArmsSetConfig2(): void {
  armsSetConfig({
    disabled: false
  });
}

function testArmsSetPage(): void {
  armsSetPage('boshit-page');
}

function testArmsSetCommonInfo(): void {
  armsSetCommonInfo({
    common1: 'hello world',
    common2: 'left right'
  });
}

function testArmsCustom(): void {
  armsCustom({
    custom1: 'i do not know',
    custom2: 'i do not care'
  });
}

function testArmsApi(): void {
  armsApi('/api/success', true, 1234);
  armsApi('/api/fail', false, 4321);
}

function testArmsError(): void {
  armsError('message in string 1');
  armsError('message in string 2', new Error());
  armsError('message in string 3', {
    filename: 'the-filename',
    lineno: 1,
    colno: 1111
  });
  armsError(new Error('message in error 1'));
  armsError(new Error('message in error 2'), new Error());
  armsError(new Error('message in error 3'), {
    filename: 'the-filename-2',
    lineno: 2,
    colno: 2222
  });
  armsError({
    message: 'message in object 1',
    name: 'ErrorObjectError',
    hello: 'world'
  });
  armsError({
    message: 'message in object 2',
    name: 'ErrorObjectError',
    hello: 'world'
  }, new Error());
  armsError({
    message: 'message in object 3',
    name: 'ErrorObjectError',
    hello: 'world'
  }, {
    filename: 'the-filename-2',
    lineno: 3,
    colno: 3333
  });
}

function testArmsSpeed(): void {
  armsSpeed('s0', 123);
  armsSpeed('s1', 1234);
  armsSpeed('s2', 12345);
}

function testArmsSum(): void {
  armsSum('boshit-sum', 123);
}

function testArmsAvg(): void {
  armsAvg('boshit-avg', 1234);
}

function testArmsPercent(): void {
  armsPercent('boshit-percent', 'boshit-percent-sub', 0.1);
}

function testArmsResource(): void {
  armsResource({
    begin: Date.now(),
    dom: 123,
    load: 1234,
    res: performance.getEntriesByType('resource'),
    dl: location.href
  });
}

export default function DemoDefault(): JSX.Element {
  const [stateConfig, setStateConfig] = useState<ArmsBlConfigBeforeReady | undefined>();
  
  const handleGetConfig = useCallback(() => setStateConfig(getBlConfig()), [setStateConfig])
  
  return <>
    <H1>安装</H1>
    <P>安装 <code>bl.js</code> 后才可以测试下边的功能，只会安装一次，安装后会有 <code>per → api → error → pv</code> 四条日志，<code>per / pv</code> 是默认发送的，<code>api / error</code> 是用来测试 pipe 的。</P>
    <Button onClick={testInstallBl}>installBl</Button>
    <Button onClick={handleGetConfig}>getBlConfig</Button>
    <PreJson o={stateConfig} />
    <H1>测试设置</H1>
    <Button onClick={testArmsSetConfig}>armsSetConfig(disabled: true)</Button>
    <Button onClick={testArmsSetConfig2}>armsSetConfig(disabled: false)</Button>
    <Button onClick={testArmsSetPage}>armsSetPage</Button>
    <Button onClick={testArmsSetCommonInfo}>armsSetCommonInfo</Button>
    <H1>测试上报</H1>
    <P>看开发者工具下的网络请求，关键字：<code>r.png</code>。</P>
    <Button onClick={testArmsCustom}>armsCustom</Button>
    <Button onClick={testArmsApi}>armsApi</Button>
    <Button onClick={testArmsError}>armsError</Button>
    <Button onClick={testArmsSpeed}>armsSpeed</Button>
    <Button onClick={testArmsSum}>armsSum</Button>
    <Button onClick={testArmsAvg}>armsAvg</Button>
    <Button onClick={testArmsPercent}>armsPercent</Button>
    <Button onClick={testArmsResource}>armsResource</Button>
  </>;
}
