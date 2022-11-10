import {
  useEffect
} from 'react';

import {
  toggleBodyClass
} from '../../util';

import useModelProps from './_use-model-props';

export default function useEffectToggleBodyClass(): void {
  const {
    fixed
  } = useModelProps();
  
  useEffect(() => {
    if (!fixed) {
      return;
    }
    
    toggleBodyClass();
    
    return () => toggleBodyClass(false);
  }, [fixed]);
}
