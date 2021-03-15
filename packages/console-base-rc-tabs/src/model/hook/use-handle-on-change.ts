import {
  useCallback
} from 'react';

import useProps from './use-props';
import useDispatchActivateTab from './use-dispatch-activate-tab';

export default function useHandleOnChange(): (key: string | number) => void {
  const {
    onChange
  } = useProps();
  const dispatchActivateTab = useDispatchActivateTab();
  
  return useCallback((key: string | number): void => {
    dispatchActivateTab(key);
    
    if (onChange) {
      onChange(key);
    }
  }, [dispatchActivateTab, onChange]);
}
