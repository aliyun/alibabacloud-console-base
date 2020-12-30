import React, {
  ReactNode,
  useReducer,
  useMemo
} from 'react';

import {
  IPropsModal
} from '../../types';
import {
  IContext,
  IContextProps,
  IContextReducer
} from '../types';
import {
  DEFAULT_CONTEXT_PROPS,
  DEFAULT_CONTEXT_STATE
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

interface IProps {
  props: IPropsModal;
  children: ReactNode;
}

export default function Provider({
  children,
  props
}: IProps): JSX.Element {
  const PROPS: IContextProps = useMemo((): IContextProps => ({
    ...DEFAULT_CONTEXT_PROPS,
    ...props
  }), [props]);
  const [STATE, dispatch] = useReducer<IContextReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  const contextValue: IContext = useMemo(() => ({
    PROPS,
    STATE,
    dispatch
  }), [
    PROPS,
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
