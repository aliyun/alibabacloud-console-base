import React, {
  ReactNode,
  useReducer
} from 'react';

import {
  IPropsTopNavPure
} from '../../types';
import {
  IModelReducer
} from '../types';
import {
  DEFAULT_CONTEXT_STATE
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

interface IProps {
  props: IPropsTopNavPure;
  children?: ReactNode;
}

export default function Provider({
  props = {},
  children
}: IProps): JSX.Element {
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_CONTEXT_STATE);
  
  return <Context.Provider value={{
    props,
    state,
    dispatch
  }}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
