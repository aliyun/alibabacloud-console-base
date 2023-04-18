import {
  useEffect
} from 'react';

import {
  triggerWindowResize
} from '@alicloud/mere-dom';

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
    triggerWindowResize();
    
    return () => {
      toggleBodyClass(false);
      triggerWindowResize();
    };
  }, [collapsed]);
}
