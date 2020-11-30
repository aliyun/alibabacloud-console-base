import React from 'react';

import {
  useProps
} from '../../../model';

export default function TheTrigger(): JSX.Element {
  const {
    trigger
  } = useProps();
  
  return React.isValidElement(trigger) ? trigger : <span>{trigger}</span>;
}
