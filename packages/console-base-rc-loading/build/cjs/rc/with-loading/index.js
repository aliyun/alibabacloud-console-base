"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WithLoading;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _react = _interopRequireDefault(require("react"));

var _consoleBaseCommonTypings = require("@alicloud/console-base-common-typings");

var _loading = _interopRequireDefault(require("../loading"));

function WithLoading(_ref) {
  var messageLoading = _ref.messageLoading,
      messageError = _ref.messageError,
      messageErrorRetry = _ref.messageErrorRetry,
      messageEmpty = _ref.messageEmpty,
      loading = _ref.loading,
      data = _ref.data,
      renderLoaded = _ref.renderLoaded,
      retry = _ref.retry;

  switch (loading) {
    case _consoleBaseCommonTypings.ELoading.ERROR:
      return /*#__PURE__*/_react.default.createElement(_loading.default, {
        status: 'error',
        message: retry ? messageErrorRetry : messageError,
        retry: retry
      });

    case _consoleBaseCommonTypings.ELoading.SUCCESS:
      if ((0, _isEmpty2.default)(data)) {
        return /*#__PURE__*/_react.default.createElement(_loading.default, {
          status: 'empty',
          message: messageEmpty
        });
      }

      return renderLoaded(data);

    default:
      return /*#__PURE__*/_react.default.createElement(_loading.default, {
        message: messageLoading
      });
  }
}