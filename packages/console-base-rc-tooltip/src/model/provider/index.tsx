import React, {
  ReactNode,
  useReducer
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IModelProps,
  IModelReducer
} from '../types';
import {
  DEFAULT_CONTEXT_STATE
} from '../const';
import reducer from '../reducer';

import Context from './_context';

interface IProps {
  props: IModelProps;
  children: ReactNode;
}

export default function Provider({
  props,
  children
}: IProps): JSX.Element {
  const isUnmounted = useIsUnmounted();
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  return <Context.Provider value={{
    props,
    state,
    dispatch,
    isUnmounted
  }}>
    {children}
  </Context.Provider>;
}

export {
  Context
};
