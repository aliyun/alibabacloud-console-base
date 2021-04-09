import _isEmpty from 'lodash/isEmpty';
import React from 'react';

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
  retry,
  renderLoaded
}: IPropsWithLoading<T>): JSX.Element {
  switch (loading) {
    case ELoadingStatus.ERROR:
      return <Loading {...{
        status: 'error',
        message: retry ? messageErrorRetry : messageError,
        retry
      }} />;
    case ELoadingStatus.SUCCESS:
      if (_isEmpty(data)) {
        return <Loading {...{
          status: 'empty',
          message: messageEmpty
        }} />;
      }
      
      return renderLoaded(data!);
    default:
      return <Loading {...{
        message: messageLoading
      }} />;
  }
}
