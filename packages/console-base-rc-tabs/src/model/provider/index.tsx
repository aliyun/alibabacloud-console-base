import React, {
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
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  const contextValue: IModelContext = useMemo(() => ({
    props,
    state,
    dispatch
  }), [props, state, dispatch]);
  
  return <Context.Provider value={contextValue}>
    {children}
  </Context.Provider>;
}

export {
  Context
};
