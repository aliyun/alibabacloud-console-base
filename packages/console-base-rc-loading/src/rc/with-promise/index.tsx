import React, {
  useState,
  useEffect
} from 'react';

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
}: IPropsWithPromise<T>): JSX.Element {
  const [stateDwl, setStateDwl] = useState<DataWithLoading<T>>(null);
  
  useEffect(() => {
    if (!promise) {
      setStateDwl(null);
      
      return;
    }
    
    setStateDwl({
      loading: ELoading.LOADING,
      data: null
    });
    
    promise.then(result => setStateDwl({
      loading: ELoading.SUCCESS,
      data: result
    })).catch(err => setStateDwl({
      loading: ELoading.ERROR,
      data: null,
      error: err
    }));
  }, [promise]);
  
  return <WithLoading<T> {...{
    ...stateDwl,
    ...props
  }} />;
}
