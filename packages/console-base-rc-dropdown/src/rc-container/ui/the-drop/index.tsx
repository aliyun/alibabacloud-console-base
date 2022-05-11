import React, {
  ReactPortal
} from 'react';
import {
  createPortal
} from 'react-dom';

import {
  useProps
} from '../../../model';
import AnimatedDrop from '../../animated-drop';

export default function TheDrop(): JSX.Element | ReactPortal {
  const {
    dropContainer
  } = useProps();
  
  if (dropContainer === 'body') {
    const body = typeof document === 'undefined' ? null : document.body; // for SSR
    
    if (body) {
      return createPortal(<AnimatedDrop />, body);
    }
  }
  
  return <AnimatedDrop />;
}
