import {
  useCallback
} from 'react';

import {
  scrollTo
} from '@alicloud/mere-dom';

import useQuickTop from './use-quick-top';

export default function useHandleGoTop(): () => void {
  const {
    container
  } = useQuickTop();
  
  return useCallback(() => {
    if (!container) {
      return;
    }
    
    scrollTo(container, {
      top: 0
    });
  }, [container]);
}
