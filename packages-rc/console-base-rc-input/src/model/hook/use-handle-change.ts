import {
  ChangeEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useDispatchSetValue from './use-dispatch-set-value';

export default function useHandleChange(): (e: ChangeEvent<HTMLInputElement>) => void {
  const {
    onChange
  } = useModelProps();
  const {
    composing
  } = useModelState();
  const dispatchSetValue = useDispatchSetValue();
  
  return useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const {
      value
    } = e.target;
    
    dispatchSetValue(value);
    
    // 输入法正在输入，压下 onChange
    if (!composing) {
      onChange?.(value, e);
    }
  }, [onChange, composing, dispatchSetValue]);
}
