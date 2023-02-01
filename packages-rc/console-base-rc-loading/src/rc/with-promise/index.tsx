import React, {
  useState,
  useEffect
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';
import {
  LoadingStatus,
  DataWithLoading,
  createDataWithLoading
} from '@alicloud/console-base-helper-loading';

import {
  IPropsWithPromise
} from '../../types';
import WithLoading from '../with-loading';

export default function WithPromise<T>({
  promise,
  ...props
}: IPropsWithPromise<T>): JSX.Element | null {
  const isUnmounted = useIsUnmounted();
  const [stateDwl, setStateDwl] = useState<DataWithLoading<T> | null>(null);
  
  useEffect(() => {
    if (!promise) {
      setStateDwl(null);
      
      return;
    }
    
    setStateDwl(createDataWithLoading<T>(null, LoadingStatus.LOADING));
    
    promise.then(result => {
      if (isUnmounted()) {
        return;
      }
      
      setStateDwl(createDataWithLoading<T>(result, LoadingStatus.SUCCESS));
    }).catch(err => {
      if (isUnmounted()) {
        return;
      }
      
      setStateDwl({
        loading: LoadingStatus.ERROR,
        data: null,
        error: err
      });
    });
  }, [isUnmounted, promise, setStateDwl]);
  
  return promise ? <WithLoading<T> {...{
    ...stateDwl,
    ...props
  }} /> : null;
}
