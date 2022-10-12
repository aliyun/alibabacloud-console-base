import React from 'react';

import {
  DockButton
} from '../../../rc';
import {
  useDockButtonProps
} from '../../../model';

/**
 * 程序坞
 */
export default function Dock(): JSX.Element | null {
  const dockButtonProps = useDockButtonProps();
  
  return dockButtonProps ? <DockButton {...dockButtonProps} /> : null;
}
