import {
  useCallback
} from 'react';

import useRefTabs from './use-ref-tabs';
import useHandleScrollBy from './use-handle-scroll-by';

export default function useOnScrollRight(): () => void {
  const refTabs = useRefTabs();
  const handleScrollBy = useHandleScrollBy();
  
  return useCallback((): void => {
    handleScrollBy(-refTabs.current!.offsetWidth);
  }, [refTabs, handleScrollBy]);
}
