import React from 'react';

import {
  IModelProviderProps
} from '../types';
import Context from '../context';

export default function Provider({
  children,
  ...props
}: IModelProviderProps): JSX.Element {
  return <Context.Provider value={{
    props
  }}>
    {children}
  </Context.Provider>;
}
