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
  InputNumber,
  InputTextarea,
  InputSwitch
} from '@alicloud/demo-rc-elements';

import {
  FetcherCacheLocalOptions
} from '../../src';
import fetcher from '../fetcher';
import CacheStorage from '../cache-storage';

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

function getCacheLocal(enabled: boolean, key: string, ttl: number | undefined, overwrite: boolean): FetcherCacheLocalOptions | true | undefined {
  if (enabled) {
    if (key || ttl || overwrite) {
      return {
        key,
        ttl,
        overwrite
      };
    }
    
    return true;
  }
  
  return undefined;
}

function cleanJson(o: unknown): string | undefined {
  return JSON.stringify(o)?.replace(/"([^"]+)":/g, '$1:');
}

export default function DemoSpecial(): JSX.Element {
  const [stateSequence, setStateSequence] = useState<number>(1); // 快速点击 fetch 测试顺序是否按原样
  const [stateUrl, setStateUrl] = useState<string>('https://oneapi.alibaba-inc.com/mock/boshit/success');
  const [stateMethod, setStateMethod] = useState<string>('get');
  const [stateCacheLocalEnabled, setStateCacheLocalEnabled] = useState<boolean>(true);
  const [stateCacheLocalKey, setStateCacheLocalKey] = useState<string>('');
  const [stateCacheLocalTtl, setStateCacheLocalTtl] = useState<number | undefined>(undefined);
  const [stateCacheLocalOverwrite, setStateCacheLocalOverwrite] = useState<boolean>(false);
  const [stateParams, setStateParams] = useState<null | Record<string, unknown>>(null);
  const [stateBody, setStateBody] = useState<null | Record<string, unknown>>(null);
  const [stateJsCode, setStateJsCode] = useState<string>('fetch()');
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleParamChange = useCallback((value: string): void => {
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
      cacheLocal: getCacheLocal(stateCacheLocalEnabled, stateCacheLocalKey, stateCacheLocalTtl, stateCacheLocalOverwrite)
    }).then((o: unknown) => {
      console.info(stateSequence, o); // eslint-disable-line no-console
      
      return o;
    }, err => {
      console.info(stateSequence, err); // eslint-disable-line no-console
      
      throw err;
    }));
    setStateSequence(stateSequence + 1);
  }, [stateSequence, stateBody, stateCacheLocalEnabled, stateCacheLocalKey, stateCacheLocalOverwrite, stateCacheLocalTtl, stateMethod, stateParams, stateUrl]);
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
  cacheLocal: ${cleanJson(getCacheLocal(stateCacheLocalEnabled, stateCacheLocalKey, stateCacheLocalTtl, stateCacheLocalOverwrite))}
});`);
  }, [stateBody, stateCacheLocalEnabled, stateCacheLocalKey, stateCacheLocalOverwrite, stateCacheLocalTtl, stateMethod, stateParams, stateUrl]);
  
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
        value: stateCacheLocalEnabled,
        onChange: setStateCacheLocalEnabled
      }} /> cache local enabled
    </label>
    &nbsp; → &nbsp;
    cacheLocal.key <InputText {...{
      placeholder: 'cacheLocal.key',
      value: stateCacheLocalKey,
      onChange: setStateCacheLocalKey
    }} />
    cacheLocal.ttl <InputNumber {...{
      placeholder: 'cacheLocal.ttl',
      value: stateCacheLocalTtl,
      onChange: setStateCacheLocalTtl
    }} />
    <label>
      <InputSwitch {...{
        value: stateCacheLocalOverwrite,
        onChange: setStateCacheLocalOverwrite
      }} /> cacheLocal.overwrite
    </label>
    <ScFlex>
      <InputTextarea {...{
        placeholder: 'params',
        onChange: handleParamChange
      }} />
      <InputTextarea {...{
        placeholder: 'body',
        onChange: handleBodyChange
      }} />
    </ScFlex>
    <Button onClick={handleFetchX3}>fetch x3</Button>
    <ScFlex>
      <Pre>{stateJsCode}</Pre>
      <PrePromise promise={statePromise} />
    </ScFlex>
    <CacheStorage />
  </>;
}
