import {
  useCallback
} from 'react';

import {
  POLLING_TIMES
} from '../const';

import useOpDialog from './use-op-dialog';

export default function useHandleRetryPolling(): () => void {
  const {
    updateData
  } = useOpDialog();
  
  return useCallback((): void => {
    updateData({
      pollingLeft: POLLING_TIMES
    });
  }, [updateData]);
}
