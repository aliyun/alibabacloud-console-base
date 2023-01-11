import {
  useCallback
} from 'react';

import useDispatchSetFiltering from './use-dispatch-set-filtering';
import useDispatchSetFilterText from './use-dispatch-set-filter-text';

// 处理搜索是否打开
export default function useHandleFiltering(): (filtering: boolean) => void {
  const dispatchSetFiltering = useDispatchSetFiltering();
  const dispatchSetFilterText = useDispatchSetFilterText();

  return useCallback(filtering => {
    dispatchSetFiltering(filtering);

    if (!filtering) {
      dispatchSetFilterText('');
    }
  }, [dispatchSetFiltering, dispatchSetFilterText]);
}