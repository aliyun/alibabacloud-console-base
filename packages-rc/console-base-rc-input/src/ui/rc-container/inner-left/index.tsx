import React from 'react';

import {
  useProps,
  useFocused
} from '../../../model';
import {
  ScInputInnerLeft
} from '../../sc';

export default function InnerLeft(): JSX.Element | null {
  const {
    innerLeft
  } = useProps();
  const focused = useFocused();
  
  return innerLeft ? <ScInputInnerLeft focused={focused}>{innerLeft}</ScInputInnerLeft> : null;
}
