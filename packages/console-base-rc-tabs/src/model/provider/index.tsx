import React, {
  ReactNode,
  useRef,
  useReducer,
  useMemo
} from 'react';

import {
  IPropsTabs
} from '../../types';
import {
  IContext,
  IContextProps,
  IContextReducer,
  IContextRef
} from '../types';
import {
  DEFAULT_CONTEXT_STATE,
  DEFAULT_CONTEXT_PROPS
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

interface IProps {
  props: IPropsTabs;
  children: ReactNode;
}

export default function Provider({
  children,
  props
}: IProps): JSX.Element {
  const refTabs = useRef<HTMLDivElement>(null);
  const refNav = useRef<HTMLDivElement>(null);
  const PROPS: IContextProps = useMemo((): IContextProps => ({
    ...DEFAULT_CONTEXT_PROPS,
    ...props
  }), [props]);
  const REF: IContextRef = useMemo((): IContextRef => ({
    refTabs,
    refNav
  }), [
    refTabs,
    refNav
  ]);
  const [STATE, dispatch] = useReducer<IContextReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  const contextValue: IContext = useMemo(() => ({
    REF,
    PROPS,
    STATE,
    dispatch
  }), [
    REF,
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
