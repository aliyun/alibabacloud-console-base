import React, {
  useReducer,
  useRef
} from 'react';

import {
  IModelReducer,
  IModelProviderProps
} from '../types';
import {
  getDefaultContextState
} from '../util';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
  const refDialog = useRef<HTMLDivElement>(null); // 指向 dialog 本身节点
  const refContent = useRef<HTMLDivElement>(null); // 指向 dialog 内容节点
  const [state, dispatch] = useReducer<IModelReducer>(reducer, getDefaultContextState(props.data));
  
  return <Context.Provider value={{
    props,
    state,
    refDialog,
    refContent,
    dispatch
  }}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
