import React from 'react';

import {
  useDock
} from '../../hook';
import {
  DockButton
} from '../../rc';

/**
 * 程序坞
 */
export default function Dock(): JSX.Element | null {
  const dock = useDock();
  
  return dock ? <DockButton {...dock} /> : null;
}
