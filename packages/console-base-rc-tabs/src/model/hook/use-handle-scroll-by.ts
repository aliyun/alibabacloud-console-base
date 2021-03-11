import {
  useCallback
} from 'react';

import useStateNavOffset from './use-state-nav-offset';
import useDispatchUpdateNavOffset from './use-dispatch-update-nav-offset';

export default function useHandleScrollBy(): (deltaOffset: number) => void {
  const navOffset = useStateNavOffset();
  const dispatchUpdateNavOffset = useDispatchUpdateNavOffset();
  
  return useCallback((deltaOffset: number): void => {
    dispatchUpdateNavOffset(navOffset + deltaOffset);
  }, [navOffset, dispatchUpdateNavOffset]);
}
