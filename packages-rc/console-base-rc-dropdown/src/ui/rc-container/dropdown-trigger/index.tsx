import React, {
  isValidElement
} from 'react';

import {
  useProps
} from '../../../model';

export default function DropdownTrigger(): JSX.Element {
  const {
    trigger
  } = useProps();
  
  return isValidElement(trigger) ? trigger : <span>{trigger}</span>;
}
