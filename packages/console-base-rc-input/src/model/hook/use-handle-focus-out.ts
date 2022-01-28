import {
  FocusEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetFocused from './use-dispatch-set-focused';

export default function useHandleFocusOut(): (e: FocusEvent<HTMLInputElement>) => void {
  const {
    onBlur
  } = useModelProps();
  const dispatchSetFocused = useDispatchSetFocused();
  
  return useCallback((e: FocusEvent<HTMLInputElement>) => {
    dispatchSetFocused(false);
    
    if (onBlur) {
      onBlur(e);
    }
  }, [onBlur, dispatchSetFocused]);
}