import React from 'react';

import {
  useDropdown
} from '../../../src';

export default function TheTrigger(): JSX.Element {
  const {
    visible
  } = useDropdown();
  
  return <span>{visible ? 'visible' : 'invisible'}</span>;
}
