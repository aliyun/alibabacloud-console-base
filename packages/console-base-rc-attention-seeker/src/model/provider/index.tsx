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
  DEFAULT_MODEL_STATE
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

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
  const [STATE, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_MODEL_STATE);
  
  return <Context.Provider value={{
    PROPS: props,
    STATE,
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
