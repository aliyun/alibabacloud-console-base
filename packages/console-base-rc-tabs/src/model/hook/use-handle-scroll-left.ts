import {
  useCallback
} from 'react';

import useModelState from './_use-model-state';
import useHandleScrollBy from './use-handle-scroll-by';

export default function useHandleScrollLeft(): () => void {
  const {
    domUi
  } = useModelState();
  const handleScrollBy = useHandleScrollBy();
  
  return useCallback((): void => {
    if (domUi) {
      handleScrollBy(domUi.offsetWidth);
    }
  }, [domUi, handleScrollBy]);
}
