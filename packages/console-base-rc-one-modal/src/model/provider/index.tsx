import React, {
  ReactNode,
  useReducer,
  useMemo
} from 'react';

import {
  IPropsModal
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
  props: IPropsModal;
  children: ReactNode;
}

export default function Provider({
  children,
  props
}: IProps): JSX.Element {
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  const contextValue: IModelContext = useMemo(() => ({
    props,
    state,
    dispatch
  }), [props, state, dispatch]);
  
  return <Context.Provider value={contextValue}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
