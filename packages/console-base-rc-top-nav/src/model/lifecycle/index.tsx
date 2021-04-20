import React from 'react';

import useModelProps from '../hook/_use-model-props';

import GlobalStyle from './global-style';

export default function Lifecycle(): JSX.Element | null {
  const {
    fixed
  } = useModelProps();
  
  return fixed ? <GlobalStyle /> : null;
}
