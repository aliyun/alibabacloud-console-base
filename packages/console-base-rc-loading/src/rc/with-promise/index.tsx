import React, {
  useState,
  useEffect
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';

import {
  IDataWithLoading,
  IPropsWithPromise
} from '../../types';
import {
  ELoadingStatus
} from '../../const';
import WithLoading from '../with-loading';

export default function WithPromise<T>({
  promise,
  ...props
}: IPropsWithPromise<T>): JSX.Element | null {
  const isUnmounted = useIsUnmounted();
  const [stateDwl, setStateDwl] = useState<IDataWithLoading<T | null> | null>(null);
  
  useEffect(() => {
    if (!promise) {
      setStateDwl(null);
      
      return;
    }
    
    setStateDwl({
      loading: ELoadingStatus.LOADING,
      data: null
    });
    
    promise.then(result => {
      if (isUnmounted()) {
        return;
      }
      
      setStateDwl({
        loading: ELoadingStatus.SUCCESS,
        data: result
      });
    }).catch(err => {
      if (isUnmounted()) {
        return;
      }
      
      setStateDwl({
        loading: ELoadingStatus.ERROR,
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
