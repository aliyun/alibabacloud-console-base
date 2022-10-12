import React, {
  useState,
  useCallback,
  useEffect
} from 'react';

import {
  H1,
  Flex,
  Button,
  InputText,
  InputTextarea,
  InputSwitch,
  PrePromise,
  CodeViewerTs
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import {
  FetcherMergerOptions
} from '../../src';
import PkgInfo from '../pkg-info';
import fetcher from '../fetcher';
import MergerStorage from '../merger-storage';

function getJsonFromString(str: string): Record<string, unknown> | null {
  try {
    const o = JSON.parse(str);
    
    if (typeof o === 'object') {
      return o;
    }
  } catch (err) {
    // ignore
  }
  
  return null;
}

function getMerger(enabled: boolean, key: string): FetcherMergerOptions | boolean {
  if (enabled) {
    if (key) {
      return {
        key
      };
    }
    
    return true;
  }
  
  return false;
}

function cleanJson(o: unknown): string | undefined {
  return JSON.stringify(o)?.replace(/"([^"]+)":/g, '$1:');
}

export default function DemoDefault(): JSX.Element {
  const [stateSequence, setStateSequence] = useState<number>(1); // 快速点击 fetch 测试顺序是否按原样
  const [stateUrl, setStateUrl] = useState<string>('https://oneapi.alibaba-inc.com/mock/boshit/success');
  const [stateMethod, setStateMethod] = useState<string>('get');
  const [stateMergerEnabled, setStateMergerEnabled] = useState<boolean>(true);
  const [stateMergerKey, setStateMergerKey] = useState<string>('');
  const [stateParams, setStateParams] = useState<null | Record<string, unknown>>(null);
  const [stateBody, setStateBody] = useState<null | Record<string, unknown>>(null);
  const [stateJsCode, setStateJsCode] = useState<string>('fetch()');
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleParamsChange = useCallback((value: string): void => {
    setStateParams(getJsonFromString(value));
  }, []);
  const handleBodyChange = useCallback((value: string): void => {
    setStateBody(getJsonFromString(value));
  }, []);
  
  const handleFetch = useCallback(() => {
    setStatePromise(fetcher.request({
      url: stateUrl,
      method: stateMethod,
      params: stateParams,
      body: stateBody,
      merger: getMerger(stateMergerEnabled, stateMergerKey)
    }).then((o: unknown) => {
      console.info(stateSequence, o); // eslint-disable-line no-console
      
      return o;
    }, err => {
      console.info(stateSequence, err); // eslint-disable-line no-console
      
      throw err;
    }));
    setStateSequence(stateSequence + 1);
  }, [stateSequence, stateBody, stateMergerEnabled, stateMergerKey, stateMethod, stateParams, stateUrl]);
  const handleFetchX3 = useCallback(() => {
    handleFetch();
    handleFetch();
    handleFetch();
  }, [handleFetch]);
  
  useEffect(() => {
    setStateJsCode(`fetch({
  method: '${stateMethod}',
  url: '${stateUrl}',
  params: ${cleanJson(stateParams)},
  body: ${cleanJson(stateBody)},
  merger: ${cleanJson(getMerger(stateMergerEnabled, stateMergerKey))}
});`);
  }, [stateBody, stateMergerEnabled, stateMergerKey, stateMethod, stateParams, stateUrl]);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H1>场景测试</H1>
    <div>
      method <InputText {...{
        placeholder: 'method',
        value: stateMethod,
        onChange: setStateMethod
      }} />
      <br />
      url <InputText {...{
        placeholder: 'url',
        value: stateUrl,
        onChange: setStateUrl
      }} />
      <br />
      <InputSwitch {...{
        label: 'merger enabled',
        value: stateMergerEnabled,
        onChange: setStateMergerEnabled
      }} />
      <br />
      merger.key <InputText {...{
        placeholder: 'merger.key',
        value: stateMergerKey,
        onChange: setStateMergerKey
      }} />
    </div>
    <Flex>
      <InputTextarea {...{
        placeholder: 'params',
        onChange: handleParamsChange
      }} />
      <InputTextarea {...{
        placeholder: 'body',
        onChange: handleBodyChange
      }} />
    </Flex>
    <Button onClick={handleFetchX3}>fetch x3</Button>
    <Flex>
      <CodeViewerTs>{stateJsCode}</CodeViewerTs>
      <PrePromise promise={statePromise} />
    </Flex>
    <MergerStorage />
  </>;
}
