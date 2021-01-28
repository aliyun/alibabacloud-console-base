import React, {
  ChangeEvent,
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  PrePromise,
  Button,
  InputTextarea
} from '@alicloud/demo-rc-elements';

import fetcher from '../fetcher';
import CacheStorage from '../cache-storage';

const ScParamAndBody = styled.div`
  display: flex;
`;

function getJsonFromString(str: string): unknown {
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

export default function DemoSpecial(): JSX.Element {
  const [stateParams, setStateParams] = useState<unknown>(null);
  const [stateBody, setStateBody] = useState<unknown>(null);
  const [statePromise, setStatePromise] = useState<Promise<unknown> | null>(null);
  
  const handleTestGet = useCallback(() => setStatePromise(fetcher.get({
    cacheLocal: true
  }, 'https://mocks.alibaba-inc.com/mock/boshit/success')), []);
  const handleTestGetWithKey = useCallback(() => setStatePromise(fetcher.get({
    cacheLocal: {
      key: '不建议自己指定 key'
    }
  }, 'https://mocks.alibaba-inc.com/mock/boshit/success')), []);
  const handleTestGetTtl = useCallback(() => setStatePromise(fetcher.get({
    cacheLocal: {
      ttl: 4000
    }
  }, 'https://mocks.alibaba-inc.com/mock/boshit/success')), []);
  const handleTestGetWithParams = useCallback(() => setStatePromise(fetcher.get({
    cacheLocal: true
  }, 'https://mocks.alibaba-inc.com/mock/boshit/success', stateParams)), [stateParams]);
  const handleTestPost = useCallback(() => setStatePromise(fetcher.post({
    cacheLocal: true
  }, 'https://mocks.alibaba-inc.com/mock/boshit/success')), []);
  const handleTestPostWithKey = useCallback(() => setStatePromise(fetcher.post({
    cacheLocal: {
      key: '不建议自己指定 key'
    }
  }, 'https://mocks.alibaba-inc.com/mock/boshit/success')), []);
  const handleTestPostInvalidateOld = useCallback(() => setStatePromise(fetcher.post({
    cacheLocal: {
      invalidateOld: true
    }
  }, 'https://mocks.alibaba-inc.com/mock/boshit/success')), []);
  const handleTestPostWithBodyParams = useCallback(() => setStatePromise(fetcher.post({
    cacheLocal: true
  }, 'https://mocks.alibaba-inc.com/mock/boshit/success', stateBody, stateParams)), [stateBody, stateParams]);
  
  const handleParamChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
    setStateParams(getJsonFromString(e.target.value));
  }, []);
  const handleBodyChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>): void => {
    setStateBody(getJsonFromString(e.target.value));
  }, []);
  
  return <>
    <H1>场景测试</H1>
    <Button onClick={handleTestGet}>get(url)</Button>
    <Button onClick={handleTestGetWithKey}>get(url) 指定 key</Button>
    <Button onClick={handleTestGetTtl}>get(url) 测试 ttl = 4000ms</Button>
    <Button onClick={handleTestGetWithParams}>get(url, params)</Button>
    <Button onClick={handleTestPost}>post(url)</Button>
    <Button onClick={handleTestPostWithKey}>post(url) 指定 key</Button>
    <Button onClick={handleTestPostInvalidateOld}>post(url) 测试 invalidateOld</Button>
    <Button onClick={handleTestPostWithBodyParams}>post(url, body, params)</Button>
    <ScParamAndBody>
      <InputTextarea {...{
        placeholder: 'params',
        onChange: handleParamChange
      }} />
      <InputTextarea {...{
        placeholder: 'body',
        onChange: handleBodyChange
      }} />
    </ScParamAndBody>
    <PrePromise promise={statePromise} />
    <CacheStorage />
  </>;
}
