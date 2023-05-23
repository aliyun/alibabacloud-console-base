import {
  useCallback
} from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';

import {
  ERROR_CODE_CF_REQUIRED
} from '../../../const';
import {
  dataChangeOrderCreate
} from '../../../data';

import useOpDialog from './use-op-dialog';

export default function useHandleCreateOrder(): () => void {
  const {
    data: {
      sourceError,
      interceptorConfig: {
        urlOrderCreate
      }
    },
    updateData
  } = useOpDialog();
  
  return useCallback(() => {
    updateData({
      loadingCreate: LoadingStatus.LOADING
    });
    
    const {
      code,
      config
    } = sourceError;
    
    dataChangeOrderCreate({
      type: code === ERROR_CODE_CF_REQUIRED ? 'cf' : 'cm',
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
        loadingCreate: LoadingStatus.SUCCESS
      });
    }, () => updateData({
      loadingCreate: LoadingStatus.ERROR
    }));
  }, [sourceError, urlOrderCreate, updateData]);
}
