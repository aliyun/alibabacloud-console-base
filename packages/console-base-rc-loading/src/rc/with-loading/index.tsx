import _isEmpty from 'lodash/isEmpty';
import React, {
  useCallback
} from 'react';

import {
  IPropsWithLoading
} from '../../types';
import {
  ELoadingStatus
} from '../../const';
import Loading from '../loading';

export default function WithLoading<T>({
  messageLoading,
  messageError,
  messageErrorRetry,
  messageEmpty,
  loading,
  data,
  isEmpty,
  retry,
  renderLoaded
}: IPropsWithLoading<T>): JSX.Element | null {
  const handleRenderError = useCallback((): JSX.Element => <Loading {...{
    status: 'error',
    message: retry ? messageErrorRetry : messageError,
    retry
  }} />, [messageError, messageErrorRetry, retry]);
  const handleRenderSuccess = useCallback((): JSX.Element => {
    if (!data || _isEmpty(data) || (isEmpty && isEmpty(data))) {
      return <Loading {...{
        status: 'empty',
        message: messageEmpty
      }} />;
    }
    
    return renderLoaded(data);
  }, [data, messageEmpty, isEmpty, renderLoaded]);
  
  switch (loading) {
    case ELoadingStatus.IDLE:
      return null;
    case ELoadingStatus.ERROR:
      return handleRenderError();
    case ELoadingStatus.SUCCESS:
      return handleRenderSuccess();
    default:
      return <Loading {...{
        message: messageLoading
      }} />;
  }
}
