import React, {
  useReducer
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IModelReducer,
  IModelProviderProps
} from '../types';
import {
  DEFAULT_CONTEXT_STATE
} from '../const';
import reducer from '../reducer';

import Context from './_context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  return <Context.Provider value={{
    props,
    state,
    isUnmounted,
    dispatch
  }}>
    {children}
  </Context.Provider>;
}

export {
  Context
};
