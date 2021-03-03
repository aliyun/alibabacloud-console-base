import React, {
  useState,
  useEffect
} from 'react';

import useIsUnmounted from '@alicloud/react-hook-is-unmounted';
import {
  ELoading,
  DataWithLoading
} from '@alicloud/console-base-common-typings';

import {
  IPropsWithPromise
} from '../../types';
import WithLoading from '../with-loading';

export default function WithPromise<T>({
  promise,
  ...props
}: IPropsWithPromise<T>): JSX.Element | null {
  const isUnmounted = useIsUnmounted();
  const [stateDwl, setStateDwl] = useState<DataWithLoading<T | null> | null>(null);
  
  useEffect(() => {
    if (!promise) {
      setStateDwl(null);
      
      return;
    }
    
    setStateDwl({
      loading: ELoading.LOADING,
      data: null
    });
    
    promise.then(result => {
      if (isUnmounted()) {
        return;
      }
      
      setStateDwl({
        loading: ELoading.SUCCESS,
        data: result
      });
    }).catch(err => {
      if (isUnmounted()) {
        return;
      }
      
      setStateDwl({
        loading: ELoading.ERROR,
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
