import React, {
  useReducer
} from 'react';

import {
  IModelReducer,
  IModelProviderProps
} from '../types';
import {
  getDefaultContextState
} from '../util';
import reducer from '../reducer';
import Context from '../context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
  const [state, dispatch] = useReducer<IModelReducer>(reducer, getDefaultContextState(props.data));
  
  return <Context.Provider value={{
    props,
    state,
    dispatch
  }}>
    {children}
  </Context.Provider>;
}