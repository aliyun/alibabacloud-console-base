import React, {
  ReactPortal
} from 'react';
import {
  createPortal
} from 'react-dom';

import {
  useProps
} from '../../../model';
import AnimatedDrop from '../animated-drop';

export default function TheDrop(): JSX.Element | ReactPortal {
  const {
    dropContainer
  } = useProps();
  
  return dropContainer === 'body' ? createPortal(<AnimatedDrop />, document.body) : <AnimatedDrop />;
}
