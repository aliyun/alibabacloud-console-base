import React, {
  ReactNode,
  useReducer,
  useMemo
} from 'react';

import {
  IPropsTopNavPure
} from '../../types';
import {
  IContext,
  IContextReducer
} from '../types';
import {
  DEFAULT_CONTEXT_STATE
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

interface IProps {
  props: IPropsTopNavPure;
  children?: ReactNode;
}

export default function Provider({
  props = {},
  children
}: IProps): JSX.Element {
  const [STATE, dispatch] = useReducer<IContextReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  const contextValue: IContext = useMemo(() => ({
    PROPS: props,
    STATE,
    dispatch
  }), [
    props,
    STATE,
    dispatch
  ]);
  
  return <Context.Provider value={contextValue}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
