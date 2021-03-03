import {
  isValidElement
} from 'react';

import {
  TInner,
  TFnInner
} from '../types';

export default function renderInner(inner: TInner | TFnInner | undefined, focused: boolean, hovered: boolean): TInner | null {
  if (!inner) {
    return null;
  }
  
  if (isValidElement(inner) || typeof inner === 'string') {
    return inner;
  }
  
  if (typeof inner === 'function') {
    return inner(focused, hovered);
  }
  
  return null;
}
