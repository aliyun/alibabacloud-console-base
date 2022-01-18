import {
  useCallback
} from 'react';

import useDomTabs from './use-dom-tabs';
import useHandleScrollBy from './use-handle-scroll-by';

export default function useHandleScrollLeft(): () => void {
  const domTabs = useDomTabs();
  const handleScrollBy = useHandleScrollBy();
  
  return useCallback((): void => {
    if (domTabs) {
      handleScrollBy(domTabs.offsetWidth);
    }
  }, [domTabs, handleScrollBy]);
}
