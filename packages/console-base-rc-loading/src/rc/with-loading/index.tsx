import _isEmpty from 'lodash/isEmpty';
import React, {
  useCallback
} from 'react';

import {
  ELoadingStatus
} from '../../enum';
import {
  IPropsWithLoading
} from '../../types';
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
  const handleRenderErrorDefault = useCallback((): JSX.Element => <Loading {...{
    status: 'error',
    message: retry ? messageErrorRetry : messageError,
    retry
  }} />, [messageError, messageErrorRetry, retry]);
  const handleRenderError = useCallback((err: Error | undefined): JSX.Element => {
    if (renderError) { // 自定义 renderError 必须传入 error 对象
      return renderError(err, handleRenderErrorDefault);
    }
    
    return handleRenderErrorDefault();
  }, [renderError, handleRenderErrorDefault]);
  const handleRenderSuccess = useCallback((): JSX.Element => {
    if (!data || _isEmpty(data) || isEmpty?.(data)) {
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
      return handleRenderError(error);
    case ELoadingStatus.SUCCESS:
      return handleRenderSuccess();
    default:
      return <Loading {...{
        message: messageLoading
      }} />;
  }
}
