import React from 'react';
import {
  createGlobalStyle
} from 'styled-components';

import useModelState from '../../hook/_use-model-state';

const UserSelect = createGlobalStyle`
  body{
  user-select: none;
}`;

export default function BorderDragging(): JSX.Element | null {
  const context = useModelState();
  
  return ((context.dragging || (context.resizing || -1) >= 0)) ? <UserSelect /> : null;
}