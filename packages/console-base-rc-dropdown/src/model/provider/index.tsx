import React, {
  useReducer
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IModelReducer,
  IModelProviderProps
} from '../types';
import {
  DEFAULT_STATE
} from '../const';
import reducer from '../reducer';
import Context from '../context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_STATE);
  const isUnmounted = useIsUnmounted();
  
  return <Context.Provider value={{
    props,
    state,
    isUnmounted,
    dispatch
  }}>
    {children}
  </Context.Provider>;
}