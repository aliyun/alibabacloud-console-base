import React, {
  ReactNode,
  useReducer
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IModelProviderProps,
  IModelReducer
} from '../types';
import {
  DEFAULT_MODEL_STATE
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_MODEL_STATE);
  
  return <Context.Provider value={{
    props,
    state,
    dispatch,
    isUnmounted
  }}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
