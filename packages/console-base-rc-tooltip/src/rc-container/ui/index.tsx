import React from 'react';

import {
  useProps
} from '../../model';
import TheTooltip from '../the-tooltip';

export default function Ui(): JSX.Element | null {
  const {
    trigger
  } = useProps();
  
  if (!trigger) {
    return null;
  }
  
  return <TheTooltip />;
}
