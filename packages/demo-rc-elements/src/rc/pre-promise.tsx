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
    o[k] = error[k];
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
    
    promise.then(result => setStateResult({
      loading: ELoading.RESOLVED,
      result
    })).catch(err => setStateResult({
      loading: ELoading.REJECTED,
      result: err
    }));
  }, [promise]);
  
  switch (stateResult.loading) {
    case ELoading.IDLE:
      return <Pre {...preProps}>Idle</Pre>;
    case ELoading.LOADING:
      return <Pre {...preProps}>Loading...</Pre>;
    case ELoading.REJECTED:
      return <PreJson {...preProps} o={normalizeError(stateResult.result as Error)} />;
    default:
      return <PreJson {...preProps} o={stateResult.result} />;
  }
}
