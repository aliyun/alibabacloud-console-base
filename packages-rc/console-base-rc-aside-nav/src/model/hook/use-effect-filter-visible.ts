import {
  useEffect
} from 'react';

import useFilterVisible from './use-filter-visible';
import useDispatchSetFilterFocused from './use-dispatch-set-filter-focused';

export default function useEffectFilterVisible(): void {
  const filterVisible = useFilterVisible();
  const dispatchSetFilterFocused = useDispatchSetFilterFocused();
  
  useEffect(() => {
    dispatchSetFilterFocused(filterVisible);
  }, [filterVisible, dispatchSetFilterFocused]);
}
