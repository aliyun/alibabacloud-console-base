import React, {
  useReducer,
  useMemo
} from 'react';

import {
  IModelContext,
  IModelReducer,
  IModelProviderPros
} from '../types';
import {
  DEFAULT_CONTEXT_STATE
} from '../const';
import reducer from '../reducer';
import Context from '../context';
import Lifecycle from '../lifecycle';

export default function Provider({
  children,
  ...props
}: IModelProviderPros): JSX.Element {
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  const contextValue: IModelContext = useMemo(() => ({
    props,
    state,
    dispatch
  }), [props, state, dispatch]);
  
  return <Context.Provider value={contextValue}>
    {children}
    <Lifecycle />
  </Context.Provider>;
}
