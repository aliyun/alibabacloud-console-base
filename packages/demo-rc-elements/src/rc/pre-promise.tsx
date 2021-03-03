import React, {
  useState,
  useEffect
} from 'react';

import {
  IPropsPrePromise
} from '../types';

import Pre from './pre';
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

const BD: Record<ELoading, string> = {
  [ELoading.IDLE]: '#ddd',
  [ELoading.LOADING]: '#eed',
  [ELoading.RESOLVED]: '#cec',
  [ELoading.REJECTED]: '#edd'
};

const BG: Record<ELoading, string> = {
  [ELoading.IDLE]: '#eee',
  [ELoading.LOADING]: '#ffe',
  [ELoading.RESOLVED]: '#dfd',
  [ELoading.REJECTED]: '#fee'
};

const DEFAULT_RESULT: IPromiseResult = {
  loading: ELoading.IDLE,
  result: null
};

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
    o[k] = (error as any)[k];
  }
  
  return o;
}

export default function PrePromise({
  promise,
  style,
  ...props
}: IPropsPrePromise): JSX.Element {
  const [stateResult, setStateResult] = useState<IPromiseResult>(DEFAULT_RESULT);
  const preProps = {
    ...props,
    style: {
      ...style,
      borderColor: BD[stateResult.loading],
      backgroundColor: BG[stateResult.loading]
    }
  };
  
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
  
  switch (stateResult.loading) {
    case ELoading.IDLE:
      return <Pre {...preProps}>Idle</Pre>;
    case ELoading.LOADING:
      return <Pre {...preProps}>Loading...</Pre>;
    default: // RESOLVED + REJECTED
      return <PreJson {...{
        ...preProps,
        o: stateResult.loading === ELoading.REJECTED ? normalizeError(stateResult.result as Error) : stateResult.result,
        footnote: `耗时：${stateResult.duration}ms`
      }} />;
  }
}
