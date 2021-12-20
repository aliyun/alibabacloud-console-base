import React, {
  useRef,
  useReducer,
  useMemo
} from 'react';

import {
  IModelContext,
  IModelReducer,
  IModelProviderProps
} from '../types';
import {
  DEFAULT_CONTEXT_STATE
} from '../const';
import reducer from '../reducer';

import Context from './_context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
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
    {children}
  </Context.Provider>;
}

export {
  Context
};
