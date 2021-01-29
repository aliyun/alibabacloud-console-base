import React, {
  ChangeEvent,
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
  InputTextarea
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

function getCacheLocal(enabled: boolean, key: string, ttl: number, overwrite: boolean): FetcherCacheLocalOptions | true | undefined {
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
  const [stateUrl, setStateUrl] = useState<string>('https://mocks.alibaba-inc.com/mock/boshit/success');
  const [stateMethod, setStateMethod] = useState<string>('get');
  const [stateCacheLocalEnabled, setStateCacheLocalEnabled] = useState<boolean>(true);
  const [stateCacheLocalKey, setStateCacheLocalKey] = useState<string>('');
  const [stateCacheLocalTtl, setStateCacheLocalTtl] = useState<number>(0);
  const [stateCacheLocalOverwrite, setStateCacheLocalOverwrite] = useState<boolean>(false);
  const [stateParams, setStateParams] = useState<null | Record<string, unknown>>(null);
  const [stateBody, setStateBody] = useState<null | Record<string, unknown>>(null);
  const [stateJsCode, setStateJsCode] = useState<string>('fetch()');
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleParamChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
    setStateParams(getJsonFromString(e.target.value));
  }, []);
  const handleBodyChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
    setStateBody(getJsonFromString(e.target.value));
  }, []);
  
  const handleUrlChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setStateUrl(e.target.value), []);
  const handleMethodChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setStateMethod(e.target.value), []);
  const handleCacheLocalEnabledChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setStateCacheLocalEnabled(e.target.checked), []);
  const handleCacheLocalKeyChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setStateCacheLocalKey(e.target.value), []);
  const handleCacheLocalTtlChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setStateCacheLocalTtl(Number(e.target.value) || 0), []);
  const handleCacheLocalOverwriteChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setStateCacheLocalOverwrite(e.target.checked), []);
  const handleFetch = useCallback(() => {
    setStatePromise(fetcher.request({
      url: stateUrl,
      method: stateMethod,
      params: stateParams,
      body: stateBody,
      cacheLocal: getCacheLocal(stateCacheLocalEnabled, stateCacheLocalKey, stateCacheLocalTtl, stateCacheLocalOverwrite)
    }).then((o: unknown) => {
      console.info(stateSequence, o);
      
      return o;
    }, err => {
      console.info(stateSequence, err);
      
      throw err;
    }));
    setStateSequence(stateSequence + 1);
  }, [stateSequence, stateBody, stateCacheLocalEnabled, stateCacheLocalKey, stateCacheLocalOverwrite, stateCacheLocalTtl, stateMethod, stateParams, stateUrl]);
  
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
        onChange: handleMethodChange
      }} />
    </div>
    <div>
      url <InputText {...{
        placeholder: 'url',
        value: stateUrl,
        onChange: handleUrlChange
      }} />
    </div>
    <label>
      <input {...{
        type: 'checkbox',
        checked: stateCacheLocalEnabled,
        onChange: handleCacheLocalEnabledChange
      }} /> cache local enabled
    </label>
    &nbsp; → &nbsp;
    cacheLocal.key <InputText {...{
      placeholder: 'cacheLocal.key',
      value: stateCacheLocalKey,
      onChange: handleCacheLocalKeyChange
    }} />
    cacheLocal.ttl <InputText {...{
      placeholder: 'cacheLocal.ttl',
      type: 'number',
      value: stateCacheLocalTtl.toString(),
      onChange: handleCacheLocalTtlChange
    }} />
    <label>
      <input {...{
        type: 'checkbox',
        checked: stateCacheLocalOverwrite,
        onChange: handleCacheLocalOverwriteChange
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
    <Button onClick={handleFetch}>fetch</Button>
    <ScFlex>
      <Pre>{stateJsCode}</Pre>
      <PrePromise promise={statePromise} />
    </ScFlex>
    <CacheStorage />
  </>;
}
