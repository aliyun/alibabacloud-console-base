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
  error,
  retry,
  isEmpty,
  renderError,
  renderEmpty,
  renderLoaded
}: IPropsWithLoading<T>): JSX.Element | null {
  const handleRenderError = useCallback((err: Error): JSX.Element => {
    if (renderError) {
      return renderError(err);
    }
    
    return <Loading {...{
      status: 'error',
      message: retry ? messageErrorRetry : messageError,
      retry
    }} />;
  }, [messageError, messageErrorRetry, retry, renderError]);
  const handleRenderSuccess = useCallback((): JSX.Element => {
    if (!data || _isEmpty(data) || (isEmpty && isEmpty(data))) {
      if (renderEmpty) {
        return renderEmpty();
      }
      
      return <Loading {...{
        status: 'empty',
        message: messageEmpty
      }} />;
    }
    
    return renderLoaded(data);
  }, [data, messageEmpty, isEmpty, renderEmpty, renderLoaded]);
  
  switch (loading) {
    case ELoadingStatus.IDLE:
      return null;
    case ELoadingStatus.ERROR:
      return handleRenderError(error!);
    case ELoadingStatus.SUCCESS:
      return handleRenderSuccess();
    default:
      return <Loading {...{
        message: messageLoading
      }} />;
  }
}
