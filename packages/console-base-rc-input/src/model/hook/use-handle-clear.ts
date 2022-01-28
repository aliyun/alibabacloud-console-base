import {
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useDispatchSetValue from './use-dispatch-set-value';

export default function useHandleClear(): () => void {
  const {
    onChange
  } = useModelProps();
  const {
    domInput
  } = useModelState();
  const dispatchSetValue = useDispatchSetValue();
  
  return useCallback((): void => {
    dispatchSetValue('');
    
    if (onChange) {
      onChange('');
    }
    
    if (domInput) {
      try {
        domInput.focus();
      } catch (err) {
        // ignore
      }
    }
  }, [onChange, domInput, dispatchSetValue]);
}