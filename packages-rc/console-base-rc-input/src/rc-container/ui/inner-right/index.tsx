import React from 'react';

import {
  useProps,
  useFocused
} from '../../../model';
import {
  ScInputInnerRight
} from '../../../sc';

export default function InnerRight(): JSX.Element | null {
  const {
    innerRight
  } = useProps();
  const focused = useFocused();
  
  return innerRight ? <ScInputInnerRight focused={focused}>{innerRight}</ScInputInnerRight> : null;
}
