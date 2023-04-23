import {
  CompositionEvent,
  useCallback
} from 'react';

import useDispatchSetComposing from './use-dispatch-set-composing';
import useModelProps from './_use-model-props';

export default function useHandleCompositionEnd(): (e: CompositionEvent<HTMLInputElement>) => void {
  const {
    onChange
  } = useModelProps();
  const dispatchSetComposing = useDispatchSetComposing();
  
  return useCallback((e: CompositionEvent<HTMLInputElement>) => {
    dispatchSetComposing(false);
    onChange?.(e.currentTarget.value);
  }, [dispatchSetComposing, onChange]);
}
