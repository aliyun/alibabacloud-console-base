import _isEmpty from 'lodash/isEmpty';
import React from 'react';
import { ELoading } from '@alicloud/console-base-common-typings';
import Loading from '../loading';
export default function WithLoading(_ref) {
  var messageLoading = _ref.messageLoading,
      messageError = _ref.messageError,
      messageErrorRetry = _ref.messageErrorRetry,
      messageEmpty = _ref.messageEmpty,
      loading = _ref.loading,
      data = _ref.data,
      renderLoaded = _ref.renderLoaded,
      retry = _ref.retry;

  switch (loading) {
    case ELoading.ERROR:
      return /*#__PURE__*/React.createElement(Loading, {
        status: 'error',
        message: retry ? messageErrorRetry : messageError,
        retry: retry
      });

    case ELoading.SUCCESS:
      if (_isEmpty(data)) {
        return /*#__PURE__*/React.createElement(Loading, {
          status: 'empty',
          message: messageEmpty
        });
      }

      return renderLoaded(data);

    default:
      return /*#__PURE__*/React.createElement(Loading, {
        message: messageLoading
      });
  }
}