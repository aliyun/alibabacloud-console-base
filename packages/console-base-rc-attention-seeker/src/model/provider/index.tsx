import React, {
  useReducer,
  useCallback
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IModelProviderProps,
  TModelAction,
  IModelReducer
} from '../types';
import {
  DEFAULT_MODEL_STATE
} from '../const';
import reducer from '../reducer';
import Context from '../context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_MODEL_STATE);
  const safeDispatch = useCallback((action: TModelAction) => { // 不必再担心异步回调 dispatch 可能发生的错误
    if (isUnmounted()) {
      return;
    }
    
    dispatch(action);
  }, [isUnmounted, dispatch]);
  
  return <Context.Provider value={{
    props,
    state,
    dispatch: safeDispatch
  }}>
    {children}
  </Context.Provider>;
}