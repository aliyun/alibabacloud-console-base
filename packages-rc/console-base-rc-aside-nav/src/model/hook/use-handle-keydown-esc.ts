import {
  KeyboardEvent,
  useCallback
} from 'react';

import useHandleFiltering from './use-handle-filtering';

export default function useHandleKeydownEsc(): (e: KeyboardEvent<HTMLInputElement>) => void {
  const handleFiltering = useHandleFiltering();

  return useCallback(e => {
    if (e.key !== 'Escape') {
      return;
    }

    handleFiltering(false);
  }, [handleFiltering]);
}