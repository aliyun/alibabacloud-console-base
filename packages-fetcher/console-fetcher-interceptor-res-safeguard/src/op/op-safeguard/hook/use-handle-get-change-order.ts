import {
  useCallback
} from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';

import {
  dataChangeOrder
} from '../../../data';

import useOpDialog from './use-op-dialog';
import useChangeType from './use-change-type';

export default function useHandleGetChangeOrder(): (orderId: string) => Promise<void> {
  const {
    updateData
  } = useOpDialog();
  const changeOrderType = useChangeType();
  
  return useCallback((orderId: string): Promise<void> => {
    updateData({
      loadingOfGet: LoadingStatus.LOADING
    });
    
    return dataChangeOrder({
      orderId,
      orderType: changeOrderType
    }).then(changeOrder => updateData({
      changeOrder,
      loadingOfGet: LoadingStatus.SUCCESS
    })).catch(() => updateData({
      loadingOfGet: LoadingStatus.ERROR
    }));
  }, [changeOrderType, updateData]);
}
