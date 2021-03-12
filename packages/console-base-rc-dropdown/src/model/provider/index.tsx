import React, {
  HTMLAttributes,
  useReducer,
  useRef
} from 'react';

import {
  IPropsDropdown
} from '../../types';
import {
  IModelReducer
} from '../types';
import {
  DEFAULT_STATE
} from '../const';
import reducer from '../reducer';
import Lifecycle from '../lifecycle';

import Context from './_context';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  props: IPropsDropdown;
}

export default function Provider({
  props,
  children
}: IProps): JSX.Element {
  const refDropdown = useRef<HTMLDivElement | null>(null);
  const [state, dispatch] = useReducer<IModelReducer>(reducer, DEFAULT_STATE);
  
  return <Context.Provider value={{
    props,
    state,
    refDropdown,
    dispatch
  }}>
    <Lifecycle />
    {children}
  </Context.Provider>;
}

export {
  Context
};
