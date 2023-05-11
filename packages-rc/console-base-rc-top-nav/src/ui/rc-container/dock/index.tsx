import React, {
  useCallback
} from 'react';

import useMouseHover from '@alicloud/react-hook-mouse-hover';

import {
  useDockActive,
  useHandleDockActiveChange
} from '../../../model';
import {
  DockButton
} from '../../rc';
import {
  DATA_KEY_J_DOCK
} from '../../const';

/**
 * 程序坞
 */
export default function Dock(): JSX.Element {
  const handleDockActiveChange = useHandleDockActiveChange();
  
  const dockActive = useDockActive();
  
  const [onMouseEnter, onMouseLeave, onClick] = useMouseHover({
    onEnter: useCallback(() => handleDockActiveChange(true), [handleDockActiveChange]),
    onActiveChange: handleDockActiveChange
  });
  
  return <DockButton {...{
    active: dockActive,
    onMouseEnter,
    onMouseLeave,
    onClick,
    [DATA_KEY_J_DOCK]: ''
  }} />;
}
