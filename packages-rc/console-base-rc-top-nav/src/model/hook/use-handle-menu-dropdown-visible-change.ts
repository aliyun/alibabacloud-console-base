import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';

export default function useHandleMenuDropdownVisibleChange(): (visible: boolean, onVisibleChange?: (visible: boolean) => void, key?: string) => void {
  const {
    onMenuDropdown
  } = useModelProps();
  
  return useCallback((visible: boolean, onVisibleChange?: (visible: boolean) => void, key?: string): void => {
    if (visible && onMenuDropdown && key) {
      onMenuDropdown(key);
    }
    
    onVisibleChange?.(visible);
  }, [onMenuDropdown]);
}
