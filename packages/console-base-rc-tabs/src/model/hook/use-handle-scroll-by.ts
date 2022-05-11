import {
  useCallback
} from 'react';

import useStateNavOffset from './use-state-nav-offset';
import useDispatchSetNavOffset from './use-dispatch-set-nav-offset';

export default function useHandleScrollBy(): (deltaOffset: number) => void {
  const navOffset = useStateNavOffset();
  const dispatchUpdateNavOffset = useDispatchSetNavOffset();
  
  return useCallback((deltaOffset: number): void => {
    dispatchUpdateNavOffset(navOffset + deltaOffset);
  }, [navOffset, dispatchUpdateNavOffset]);
}
