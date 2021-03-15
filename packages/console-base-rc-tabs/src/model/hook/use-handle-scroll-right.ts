import {
  useCallback
} from 'react';

import useRefTabs from './use-ref-tabs';
import useHandleScrollBy from './use-handle-scroll-by';

export default function useHandleScrollRight(): () => void {
  const refTabs = useRefTabs();
  const handleScrollBy = useHandleScrollBy();
  
  return useCallback((): void => {
    if (refTabs.current) {
      handleScrollBy(refTabs.current.offsetWidth);
    }
  }, [refTabs, handleScrollBy]);
}
