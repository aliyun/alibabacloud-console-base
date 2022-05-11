import React, {
  ReactNode,
  useReducer
} from 'react';

import {
  IModelProps,
  IModelReducer
} from '../types';
import {
  DEFAULT_CONTEXT_STATE
} from '../const';
import reducer from '../reducer';
import Context from '../context';

interface IProps {
  props: IModelProps;
  children: ReactNode;
}

export default function Provider({
  props,
  children
}: IProps): JSX.Element {
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  return <Context.Provider value={{
    props,
    state,
    dispatch
  }}>
    {children}
  </Context.Provider>;
}