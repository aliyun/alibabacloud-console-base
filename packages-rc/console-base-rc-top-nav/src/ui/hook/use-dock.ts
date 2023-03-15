import {
  useMemo
} from 'react';

import {
  ButtonProps
} from '@alicloud/console-base-rc-button';

import {
  useProps,
  useDockActive,
  useHandleDockClick,
  useHandleDockMouseEnter,
  useHandleDockMouseLeave
} from '../../model';
import {
  hasNoActionPoint
} from '../util';

export default function useDock(): ButtonProps | null {
  const {
    dock
  } = useProps();
  const dockActive = useDockActive();
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
