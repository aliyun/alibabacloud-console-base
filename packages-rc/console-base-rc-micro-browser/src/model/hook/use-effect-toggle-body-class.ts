import {
  useEffect
} from 'react';

import {
  EMicroBrowserMode
} from '../enum';
import {
  toggleBodyClass
} from '../util';

import useModelProps from './_use-model-props';
import useMode from './use-mode';

export default function useEffectToggleBodyClass(): void {
  const {
    visible
  } = useModelProps();
  const mode = useMode();
  
  useEffect(() => {
    if (!visible || mode !== EMicroBrowserMode.PINNED) {
      return;
    }
    
    toggleBodyClass();
    
    return () => toggleBodyClass(false);
  }, [visible, mode]);
}
