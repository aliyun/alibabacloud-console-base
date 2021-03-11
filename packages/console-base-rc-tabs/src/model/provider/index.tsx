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
  IModelContext,
  IModelReducer
} from '../types';
import {
  DEFAULT_CONTEXT_STATE
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
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  const contextValue: IModelContext = useMemo(() => ({
    props,
    state,
    refTabs,
    refNav,
    dispatch
  }), [props, state, refTabs, refNav, dispatch]);
  
  return <Context.Provider value={contextValue}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
