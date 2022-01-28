import {
  ChangeEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useDispatchSetValue from './use-dispatch-set-value';

export default function useHandleChange(): (e: ChangeEvent<HTMLInputElement>) => void {
  const {
    onChange
  } = useModelProps();
  const dispatchSetValue = useDispatchSetValue();
  
  return useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const {
      value
    } = e.target;
    
    dispatchSetValue(value);
    
    if (onChange) {
      onChange(value, e);
    }
  }, [onChange, dispatchSetValue]);
}