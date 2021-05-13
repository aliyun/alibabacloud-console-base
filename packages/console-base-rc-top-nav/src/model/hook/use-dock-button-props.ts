import {
  useMemo
} from 'react';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

import hasNoActionPoint from '../../util/has-no-action-point';

import useModelProps from './_use-model-props';
import useDockActive from './use-dock-active';
import useHandleDockClick from './use-handle-dock-click';
import useHandleDockMouseEnter from './use-handle-dock-mouse-enter';
import useHandleDockMouseLeave from './use-handle-dock-mouse-leave';

export default function useDockButtonProps(): ButtonProps | null {
  const dockActive = useDockActive();
  const {
    dock
  } = useModelProps();
  
  const handleDockClick = useHandleDockClick();
  const handleDockMouseEnter = useHandleDockMouseEnter();
  const handleDockMouseLeave = useHandleDockMouseLeave();
  
  return useMemo((): ButtonProps | null => {
    if (hasNoActionPoint(dock)) {
      return null;
    }
    
    const buttonProps = {
      ...dock,
      active: dockActive,
      onMouseEnter: handleDockMouseEnter,
      onMouseLeave: handleDockMouseLeave,
      onClick: handleDockClick
    };
    
    delete buttonProps.onActiveChange;
    
    return buttonProps;
  }, [dock, dockActive, handleDockMouseEnter, handleDockMouseLeave, handleDockClick]);
}
