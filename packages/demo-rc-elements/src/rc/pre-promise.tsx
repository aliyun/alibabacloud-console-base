import React, {
  useState,
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  IPropsPrePromise
} from '../types';

import PreJson from './pre-json';

enum ELoading {
  IDLE,
  LOADING,
  RESOLVED,
  REJECTED
}

interface IPromiseResult {
  loading: ELoading;
  result: unknown;
  duration?: number;
}

const DEFAULT_RESULT: IPromiseResult = {
  loading: ELoading.IDLE,
  result: null
};

const ScPrePromise = styled.div`
  position: relative;
`;

const ScInfoIdle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px 16px;
  background-color: rgba(255, 255, 255, 0.33);
  color: #eee;
`;

const ScInfoLoading = styled(ScInfoIdle)`
  background-color: rgba(255, 255, 0, 0.33);
`;

const ScInfoResolved = styled(ScInfoIdle)`
  background-color: rgba(0, 255, 0, 0.33);
`;

const ScInfoRejected = styled(ScInfoIdle)`
  background-color: rgba(255, 0, 0, 0.33);
`;

function normalizeError(error: Error): Record<string, unknown> {
  if (!error) {
    return {};
  }
  
  const o: Record<string, unknown> = {
    name: error.name,
    message: error.message
  };
  
  // eslint-disable-next-line guard-for-in
  for (const k in error) {
    o[k] = (error as never)[k];
  }
  
  if (error.stack) {
    o.stack = error.stack;
  }
  
  return o;
}

export default function PrePromise({
  promise
}: IPropsPrePromise): JSX.Element {
  const [stateResult, setStateResult] = useState<IPromiseResult>(DEFAULT_RESULT);
  
  useEffect(() => {
    if (!promise) {
      setStateResult(DEFAULT_RESULT);
      
      return;
    }
    
    setStateResult({
      loading: ELoading.LOADING,
      result: null
    });
    
    const start = Date.now();
    
    promise.then(result => setStateResult({
      loading: ELoading.RESOLVED,
      result,
      duration: Date.now() - start
    })).catch(err => setStateResult({
      loading: ELoading.REJECTED,
      result: err,
      duration: Date.now() - start
    }));
  }, [promise]);
  
  return <ScPrePromise>
    {((): JSX.Element => {
      switch (stateResult.loading) {
        case ELoading.LOADING:
          return <ScInfoLoading>Loading...</ScInfoLoading>;
        case ELoading.RESOLVED:
          return <ScInfoResolved>Success, time: {stateResult.duration}ms</ScInfoResolved>;
        case ELoading.REJECTED:
          return <ScInfoRejected>Failed, time: {stateResult.duration}ms</ScInfoRejected>;
        default:
          return <ScInfoIdle>Idle</ScInfoIdle>;
      }
    })()}
    <PreJson {...{
      o: stateResult.loading === ELoading.REJECTED ? normalizeError(stateResult.result as Error) : stateResult.result
    }} />
  </ScPrePromise>;
}
