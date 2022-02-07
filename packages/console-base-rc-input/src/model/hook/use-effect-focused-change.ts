import {
  useEffect
} from 'react';

import useModelState from './_use-model-state';
import useFocused from './use-focused';

export default function useEffectFocusedChange(): void {
  const {
    domInput
  } = useModelState();
  const focused = useFocused();
  
  useEffect(() => {
    if (!domInput) {
      return;
    }
    
    try {
      if (focused) {
        domInput.select();
      } else {
        domInput.blur();
      }
    } catch (err) {
      // ignore
    }
  }, [focused, domInput]);
}
