import _isEmpty from 'lodash/isEmpty';
import React from 'react';

import {
  ELoading
} from '@alicloud/console-base-common-typings';

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
  renderLoaded,
  retry
}: IPropsWithLoading<T>): JSX.Element {
  switch (loading) {
    case ELoading.ERROR:
      return <Loading {...{
        status: 'error',
        message: retry ? messageErrorRetry : messageError,
        retry
      }} />;
    case ELoading.SUCCESS:
      if (_isEmpty(data)) {
        return <Loading {...{
          status: 'empty',
          message: messageEmpty
        }} />;
      }
      
      return renderLoaded(data);
    default:
      return <Loading {...{
        message: messageLoading
      }} />;
  }
}
