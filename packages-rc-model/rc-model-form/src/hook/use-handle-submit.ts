import {
  FormEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';

export default function useHandleSubmit(): (e: FormEvent<HTMLFormElement>) => void {
  const {
    preventDefault = true,
    onSubmit
  } = useModelProps();
  
  return useCallback((e: FormEvent<HTMLFormElement>) => {
    if (preventDefault) {
      e.preventDefault();
    }
    
    onSubmit?.(e);
  }, [preventDefault, onSubmit]);
}
