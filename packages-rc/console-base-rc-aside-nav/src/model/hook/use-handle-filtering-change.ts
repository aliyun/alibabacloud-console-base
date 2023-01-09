import {
  useCallback
} from 'react';

import useDispatchSetFiltering from './use-dispatch-set-filtering';
import useDispatchSetFilterText from './use-dispatch-set-filter-text';

export default function useHandleFilteringChange(): (e: boolean) => void {
  const dispatchSetFiltering = useDispatchSetFiltering();
  const dispatchSetFilterText = useDispatchSetFilterText();

  return useCallback(e => {
    dispatchSetFiltering(e);

    // TODO 在失去焦点的时候，进行 filterText 清空
    if (!e) {
      dispatchSetFilterText('');
    }
  }, [dispatchSetFiltering, dispatchSetFilterText]);
}