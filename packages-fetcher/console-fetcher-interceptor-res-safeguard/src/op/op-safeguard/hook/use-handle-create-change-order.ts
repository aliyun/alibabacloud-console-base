import {
  useCallback
} from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';

import {
  dataChangeOrderCreate
} from '../../../data';

import useOpDialog from './use-op-dialog';
import useChangeType from './use-change-type';

export default function useHandleCreateChangeOrder(): () => void {
  const {
    data: {
      sourceError,
      interceptorConfig: {
        urlOrderCreate
      }
    },
    updateData
  } = useOpDialog();
  const changeOrderType = useChangeType();
  
  return useCallback(() => {
    updateData({
      loadingOfCreate: LoadingStatus.LOADING
    });
    
    const {
      config
    } = sourceError;
    
    dataChangeOrderCreate({
      type: changeOrderType,
      info: {
        url: config.url || '',
        urlBase: config.urlBase,
        method: config.method || '',
        params: config.params,
        body: config.body
      }
    }, urlOrderCreate).then(changeOrder => {
      updateData({
        changeOrder,
        loadingOfCreate: LoadingStatus.SUCCESS
      });
    }, () => updateData({
      loadingOfCreate: LoadingStatus.ERROR
    }));
  }, [updateData, sourceError, changeOrderType, urlOrderCreate]);
}
