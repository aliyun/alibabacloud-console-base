import React from 'react';

import {
  renderInner
} from '../../../util';
import {
  useProps,
  useHovered,
  useFocused
} from '../../../model';
import {
  ScInnerRight
} from '../../../sc';

export default function InnerRight(): JSX.Element | null {
  const {
    innerRight
  } = useProps();
  const hovered = useHovered();
  const focused = useFocused();
  const jsx = renderInner(innerRight, focused, hovered);
  
  return jsx ? <ScInnerRight>{jsx}</ScInnerRight> : null;
}
