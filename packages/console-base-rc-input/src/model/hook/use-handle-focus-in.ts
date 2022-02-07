import {
  FocusEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetFocused from './use-dispatch-set-focused';

export default function useHandleFocusIn(): (e: FocusEvent<HTMLInputElement>) => void {
  const {
    onFocus,
    onFocusedChange
  } = useModelProps();
  const dispatchSetFocused = useDispatchSetFocused();
  
  return useCallback((e: FocusEvent<HTMLInputElement>) => {
    dispatchSetFocused(true);
    
    if (onFocus) {
      onFocus(e);
    }
    
    if (onFocusedChange) {
      onFocusedChange(true);
    }
  }, [onFocus, onFocusedChange, dispatchSetFocused]);
}