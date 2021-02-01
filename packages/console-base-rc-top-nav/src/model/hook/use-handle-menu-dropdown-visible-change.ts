import {
  useCallback
} from 'react';

import useProps from './use-props';

export default function useHandleMenuDropdownVisibleChange(): (visible: boolean, onVisibleChange?: (visible: boolean) => void, key?: string) => void {
  const {
    onMenuDropdown
  } = useProps();
  
  return useCallback((visible: boolean, onVisibleChange?: (visible: boolean) => void, key?: string): void => {
    if (visible && onMenuDropdown && key) {
      onMenuDropdown(key);
    }
    
    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }, [onMenuDropdown]);
}
