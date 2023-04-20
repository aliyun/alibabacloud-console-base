import {
  useEffect
} from 'react';

import useFilterVisible from './use-filter-visible';
import useDispatchSetFilterFocused from './use-dispatch-set-filter-focused';

/**
 * Filter 变可见时，自动聚焦
 */
export default function useEffectFilterVisible(): void {
  const filterVisible = useFilterVisible();
  const dispatchSetFilterFocused = useDispatchSetFilterFocused();
  
  useEffect(() => {
    dispatchSetFilterFocused(filterVisible);
  }, [filterVisible, dispatchSetFilterFocused]);
}
