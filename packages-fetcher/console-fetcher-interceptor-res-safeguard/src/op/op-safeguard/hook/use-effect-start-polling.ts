import {
  useEffect
} from 'react';

import {
  ChangeOrderStatus
} from '../../../data';
import {
  POLLING_INTERVAL
} from '../const';

import useOpDialog from './use-op-dialog';
import useHandleGetChangeOrder from './use-handle-get-change-order';

export default function useEffectStartPolling(): void {
  const {
    data: {
      changeOrder,
      pollingLeft
    },
    updateData
  } = useOpDialog();
  const handleGetChangeOrder = useHandleGetChangeOrder();
  
  return useEffect(() => {
    if (changeOrder?.status !== ChangeOrderStatus.INITIALIZING || pollingLeft <= 0) {
      return;
    }
    
    const timer = window.setTimeout(() => {
      handleGetChangeOrder(changeOrder.orderId).then(() => updateData({
        pollingLeft: pollingLeft - 1 // 将触发下一次 setTimeout
      }));
    }, POLLING_INTERVAL);
    
    return () => window.clearTimeout(timer);
  }, [changeOrder, handleGetChangeOrder, pollingLeft, updateData]);
}
