import {
  debounce as _debounce
} from 'lodash-es';
import {
  useEffect
} from 'react';

import useModelProps from './_use-model-props';
import useHandleReset from './use-handle-reset';

export default function useEffectOnContainerScroll(): void {
  const {
    container
  } = useModelProps();
  const handleReset = useHandleReset();
  
  useEffect(() => {
    const debouncedBodyScroll = _debounce(handleReset, 80);
    
    container.addEventListener('scroll', debouncedBodyScroll);
    
    return () => container.removeEventListener('scroll', debouncedBodyScroll);
  }, [container, handleReset]);
}
