import React, {
  HTMLAttributes,
  useReducer,
  useMemo,
  useRef
} from 'react';

import {
  IDialogProps
} from '../../types';
import {
  IContext,
  IContextRef,
  IContextProps,
  IContextReducer
} from '../types';
import getContextProps from '../util/get-context-props';
import getDefaultContextState from '../util/get-default-context-state';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  props: IDialogProps;
}

export default function Provider({
  props,
  children
}: IProps): JSX.Element {
  const refDialog = useRef<HTMLDivElement>(); // 指向 dialog 本身节点
  const refContent = useRef<HTMLDivElement>(); // 指向 dialog 内容节点
  const [STATE, dispatch] = useReducer<IContextReducer>(reducer, getDefaultContextState(props.data));
  const PROPS = useMemo((): IContextProps => getContextProps(props, STATE.propsUpdate), [props, STATE.propsUpdate]);
  const REF = useMemo((): IContextRef => ({
    refDialog,
    refContent
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
