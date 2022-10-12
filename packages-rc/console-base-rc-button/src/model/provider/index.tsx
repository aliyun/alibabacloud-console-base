import React from 'react';

import {
  IPropsProvider
} from '../types';
import Context from '../context';

export default function Provider({
  props,
  children
}: IPropsProvider): JSX.Element {
  return <Context.Provider value={{
    props
  }}>
    {children}
  </Context.Provider>;
}