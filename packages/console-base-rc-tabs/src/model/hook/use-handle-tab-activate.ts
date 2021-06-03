import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchActivateTab from './use-dispatch-activate-tab';

export default function useHandleTabActivate(): (key: string | number) => void {
  const {
    onChange
  } = useModelProps();
  const dispatchActivateTab = useDispatchActivateTab();
  
  return useCallback((key: string | number): void => {
    dispatchActivateTab(key);
    
    if (onChange) {
      onChange(key);
    }
  }, [dispatchActivateTab, onChange]);
}
