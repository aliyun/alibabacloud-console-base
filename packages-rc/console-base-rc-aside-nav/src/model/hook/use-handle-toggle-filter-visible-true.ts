import {
  useCallback
} from 'react';

import useHandleFilterVisibleChange from './use-handle-filter-visible-change';

export default function useHandleToggleFilterVisibleTrue(): () => void {
  const handleFilterVisibleChange = useHandleFilterVisibleChange();
  
  return useCallback(() => {
    handleFilterVisibleChange(true);
  }, [handleFilterVisibleChange]);
}
