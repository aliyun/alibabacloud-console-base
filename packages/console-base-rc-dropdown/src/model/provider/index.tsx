import React, {
  useReducer,
  useRef
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
import Lifecycle from '../lifecycle';

import Context from './_context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
  const refDropdown = useRef<HTMLDivElement | null>(null);
  const refDrop = useRef<HTMLDivElement | null>(null);
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_STATE);
  const isUnmounted = useIsUnmounted();
  
  return <Context.Provider value={{
    props,
    state,
    refDropdown,
    refDrop,
    isUnmounted,
    dispatch
  }}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
