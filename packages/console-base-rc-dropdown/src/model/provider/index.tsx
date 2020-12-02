import React, {
  HTMLAttributes,
  useReducer,
  useMemo,
  useRef
} from 'react';

import {
  IPropsDropdown
} from '../../types';
import {
  IContext,
  IContextRef,
  IContextReducer
} from '../types';
import {
  DEFAULT_STATE
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  props: IPropsDropdown;
}

export default function Provider({
  props,
  children
}: IProps): JSX.Element {
  const refDropdown = useRef<HTMLDivElement>();
  const [STATE, dispatch] = useReducer<IContextReducer>(reducer, DEFAULT_STATE);
  const PROPS = props;
  const REF = useMemo((): IContextRef => ({
    refDropdown
  }), []);
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
