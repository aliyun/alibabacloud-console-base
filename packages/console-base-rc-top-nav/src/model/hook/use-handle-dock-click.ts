import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDockActive from './use-dock-active';
import useHandleDockActiveChange from './use-handle-dock-active-change';

export default function useHandleDockClick(): (e: MouseEvent<HTMLElement>) => void {
  const docActive = useDockActive();
  const {
    dock
  } = useModelProps();
  const handleDockActiveChange = useHandleDockActiveChange();
  
  const {
    onClick
  } = dock || {};
  
  return useCallback((e: MouseEvent<HTMLElement>): void => {
    handleDockActiveChange(!docActive);
    
    if (onClick) {
      onClick(e);
    }
  }, [docActive, handleDockActiveChange, onClick]);
}
