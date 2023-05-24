import {
  useCallback
} from 'react';

import useOpDialog from './use-op-dialog';
import useHandleGetChangeOrder from './use-handle-get-change-order';

export default function useHandleRefreshChangeOrder(): () => void {
  const {
    data: {
      changeOrder
    }
  } = useOpDialog();
  const handleGetChangeOrder = useHandleGetChangeOrder();
  
  return useCallback(() => {
    if (!changeOrder) {
      return;
    }
    
    handleGetChangeOrder(changeOrder.orderId);
  }, [changeOrder, handleGetChangeOrder]);
}
