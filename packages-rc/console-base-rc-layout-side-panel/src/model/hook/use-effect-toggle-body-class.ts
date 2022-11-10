import {
  useEffect
} from 'react';

import {
  toggleBodyClass
} from '../util';

import useCollapsed from './use-collapsed';

export default function useEffectToggleBodyClass(): void {
  const collapsed = useCollapsed();
  
  useEffect(() => {
    if (collapsed) {
      return;
    }
    
    toggleBodyClass();
    
    return () => toggleBodyClass(false);
  }, [collapsed]);
}
