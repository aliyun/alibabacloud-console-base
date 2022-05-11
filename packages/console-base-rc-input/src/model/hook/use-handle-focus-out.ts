import {
  FocusEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetFocused from './use-dispatch-set-focused';

export default function useHandleFocusOut(): (e: FocusEvent<HTMLInputElement>) => void {
  const {
    onBlur,
    onFocusedChange
  } = useModelProps();
  const dispatchSetFocused = useDispatchSetFocused();
  
  return useCallback((e: FocusEvent<HTMLInputElement>) => {
    dispatchSetFocused(false);
    onBlur?.(e);
    onFocusedChange?.(false);
  }, [onBlur, onFocusedChange, dispatchSetFocused]);
}