import {
  useEffect
} from 'react';

import useOpDialog from './use-op-dialog';

export default function useEffectRefocus(): void {
  const {
    data: {
      pollingLeft
    },
    focus
  } = useOpDialog();
  const needRefocus = pollingLeft <= 0;
  
  useEffect(() => {
    if (needRefocus) {
      focus();
    }
  }, [needRefocus, focus]);
}
