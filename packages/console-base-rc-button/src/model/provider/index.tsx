import React, {
  ReactNode
} from 'react';

import {
  IModelProps
} from '../types';
import Context from '../context';

interface IProps {
  props: IModelProps;
  children: ReactNode;
}

export default function Provider({
  props,
  children
}: IProps): JSX.Element {
  return <Context.Provider value={{
    props
  }}>
    {children}
  </Context.Provider>;
}