import React, {
  useEffect
} from 'react';

import {
  useSafeState
} from '@alicloud/react-hook-is-unmounted';
import {
  LoadingStatus,
  DataWithLoading,
  createDataWithLoading
} from '@alicloud/console-base-helper-loading';

import {
  IWithPromiseProps
} from '../../types';
import WithLoading from '../with-loading';

export default function WithPromise<T>({
  promise,
  ...props
}: IWithPromiseProps<T>): JSX.Element | null {
  const [safeStateDwl, setSafeStateDwl] = useSafeState<DataWithLoading<T> | null>(null);
  
  useEffect(() => {
    if (!promise) {
      setSafeStateDwl(null);
      
      return;
    }
    
    setSafeStateDwl(createDataWithLoading<T>(null, LoadingStatus.LOADING));
    
    promise.then(result => {
      setSafeStateDwl(createDataWithLoading<T>(result, LoadingStatus.SUCCESS));
    }).catch(err => {
      setSafeStateDwl({
        loading: LoadingStatus.ERROR,
        data: null,
        error: err
      });
    });
  }, [promise, setSafeStateDwl]);
  
  return promise ? <WithLoading<T> {...{
    ...safeStateDwl,
    ...props
  }} /> : null;
}
