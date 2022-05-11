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
  ScInnerLeft
} from '../../../sc';

export default function InnerLeft(): JSX.Element | null {
  const {
    innerLeft
  } = useProps();
  const focused = useFocused();
  const hovered = useHovered();
  
  const jsx = renderInner(innerLeft, focused, hovered);
  
  return jsx ? <ScInnerLeft>{jsx}</ScInnerLeft> : null;
}
