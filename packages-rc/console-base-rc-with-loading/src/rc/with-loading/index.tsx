import _isEmpty from 'lodash/isEmpty';
import React, {
  useCallback,
  cloneElement
} from 'react';

import {
  LoadingStatus
} from '@alicloud/console-base-helper-loading';
import Loading from '@alicloud/console-base-rc-loading';

import {
  IWithLoadingProps
} from '../../types';

export default function WithLoading<T>(props: IWithLoadingProps<T>): JSX.Element | null {
  const {
    messageLoading,
    messageEmpty,
    messageError,
    messageErrorRetry,
    loading,
    data,
    error,
    isEmpty,
    renderEmpty,
    renderLoaded,
    renderError,
    retry
  } = props;
  const handleRenderErrorDefault = useCallback((): JSX.Element => {
    let message;
    
    if (retry) {
      message = messageErrorRetry;
    } else if (typeof messageError === 'function') {
      message = messageError(error);
    } else {
      message = messageError;
    }
    
    return <Loading {...{
      status: 'error',
      message,
      retry
    }} />;
  }, [error, messageError, messageErrorRetry, retry]);
  const handleRenderEmptyDefault = useCallback((): JSX.Element => {
    return <Loading {...{
      status: 'empty',
      message: messageEmpty
    }} />;
  }, [messageEmpty]);
  
  // 加载中
  if (loading === LoadingStatus.LOADING) {
    return <Loading {...{
      message: messageLoading
    }} />;
  }
  
  // 错误
  if (loading === LoadingStatus.ERROR) {
    if (renderError) {
      if (typeof renderError === 'function') {
        return renderError(error, handleRenderErrorDefault);
      }
      
      return renderError;
    }
    
    return handleRenderErrorDefault();
  }
  
  // 成功
  if (loading === LoadingStatus.SUCCESS) {
    if (!data || _isEmpty(data) || isEmpty?.(data)) { // 结果为空
      if (renderEmpty) {
        if (typeof renderEmpty === 'function') {
          return renderEmpty(handleRenderEmptyDefault);
        }
        
        return renderEmpty;
      }
      
      return handleRenderEmptyDefault();
    }
    
    // 真正渲染结果
    if (typeof renderLoaded === 'function') {
      return renderLoaded(data);
    }
    
    return cloneElement<{
      data: T;
    }>(renderLoaded, {
      data
    });
  }
  
  // IDLE 和其他不合法状态，无渲染
  return null;
}
