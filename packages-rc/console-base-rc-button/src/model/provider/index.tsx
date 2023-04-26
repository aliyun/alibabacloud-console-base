import React from 'react';

import {
  IModelProviderProps
} from '../types';
import Context from '../context';

export default function Provider({
  props,
  children
}: IModelProviderProps): JSX.Element {
  return <Context.Provider value={{
    props
  }}>
    {children}
  </Context.Provider>;
}
