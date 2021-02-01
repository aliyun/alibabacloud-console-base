import React, {
  useState,
  useCallback,
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  H1,
  Pre,
  PrePromise,
  Button,
  InputText,
  InputTextarea,
  InputSwitch
} from '@alicloud/demo-rc-elements';

import {
  FetcherMergerOptions
} from '../../src';
import fetcher from '../fetcher';
import MergerStorage from '../merger-storage';

const ScFlex = styled.div`
  display: flex;
  
  pre {
    flex: 1;
    width: 100%;
  }
`;

function getJsonFromString(str: string): Record<string, unknown> | null {
  try {
    const o = JSON.parse(str);
    
    if (typeof o === 'object') {
      return o;
    }
  } catch (ex) {
    // ignore
  }
  
  return null;
}

function getMerger(enabled: boolean, key: string): FetcherMergerOptions | true | undefined {
  if (enabled) {
    if (key) {
      return {
        key
      };
    }
    
    return true;
  }
  
  return undefined;
}

function cleanJson(o: unknown): string | undefined {
  return JSON.stringify(o)?.replace(/"([^"]+)":/g, '$1:');
}

export default function DemoDefault(): JSX.Element {
  const [stateSequence, setStateSequence] = useState<number>(1); // 快速点击 fetch 测试顺序是否按原样
  const [stateUrl, setStateUrl] = useState<string>('https://mocks.alibaba-inc.com/mock/boshit/success');
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
      console.info(stateSequence, o);
      
      return o;
    }, err => {
      console.info(stateSequence, err);
      
      throw err;
    }));
    setStateSequence(stateSequence + 1);
  }, [stateSequence, stateBody, stateMergerEnabled, stateMergerKey, stateMethod, stateParams, stateUrl]);
  
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
    <H1>场景测试</H1>
    <div>
      method <InputText {...{
        placeholder: 'method',
        value: stateMethod,
        onChange: setStateMethod
      }} />
    </div>
    <div>
      url <InputText {...{
        placeholder: 'url',
        value: stateUrl,
        onChange: setStateUrl
      }} />
    </div>
    <label>
      <InputSwitch {...{
        value: stateMergerEnabled,
        onChange: setStateMergerEnabled
      }} /> merger enabled
    </label>
    &nbsp; → &nbsp;
    merger.key <InputText {...{
      placeholder: 'merger.key',
      value: stateMergerKey,
      onChange: setStateMergerKey
    }} />
    <ScFlex>
      <InputTextarea {...{
        placeholder: 'params',
        onChange: handleParamsChange
      }} />
      <InputTextarea {...{
        placeholder: 'body',
        onChange: handleBodyChange
      }} />
    </ScFlex>
    <Button onClick={handleFetch}>fetch</Button>
    <ScFlex>
      <Pre>{stateJsCode}</Pre>
      <PrePromise promise={statePromise} />
    </ScFlex>
    <MergerStorage />
  </>;
}
