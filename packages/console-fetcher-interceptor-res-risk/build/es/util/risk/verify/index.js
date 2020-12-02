import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import { FetcherUtils } from '@alicloud/fetcher';
import { open } from '@alicloud/console-base-rc-dialog';
import intl from '../../../intl';
import { intlVerifyTitle } from '../../intl-verify';
import Content from './content';

/**
 * 风控 - 二次验证（SMS + EMAIL + MFA）
 */
export default (function (_ref) {
  var request = _ref.request,
      fetcherConfig = _ref.fetcherConfig,
      riskInfo = _ref.riskInfo,
      riskConfig = _ref.riskConfig;
  var buttonConfirm = {
    spm: 'confirm',
    disabled: true,
    label: intl('op:confirm'),
    onClick: function onClick(_ref2) {
      var data = _ref2.data,
          updateData = _ref2.updateData,
          lock = _ref2.lock,
          unlock = _ref2.unlock,
          close = _ref2.close;
      lock(true);
      updateData({
        errorMessage: ''
      });
      var verifyResult = {
        verifyType: riskInfo.verifyType,
        verifyCode: data.code,
        requestId: data.requestId
      };
      request(FetcherUtils.mergeConfig(fetcherConfig, FetcherUtils.canHaveBody(fetcherConfig.method) ? {
        body: verifyResult
      } : {
        params: verifyResult
      })).then(function (result) {
        unlock();
        close(result);
      }, function (err) {
        unlock();

        if (err.code === riskConfig.CODE_INVALID_INPUT || err.code === riskConfig.CODE_NEED_VERIFY) {
          // 虽然后边这个错误码几乎不可能存在，但为了代码的健壮性，还是加上这个判读
          updateData({
            errorMessage: intl('message:code_incorrect')
          });
        } else {
          // 其他的错误，抛出
          close(err, true);
        }
      });
      return false;
    }
  };
  var buttonCancel = intl('op:cancel');
  return open({
    title: intlVerifyTitle(riskInfo.type),
    data: {
      request: request,
      riskInfo: riskInfo,
      riskConfig: riskConfig,
      code: '',
      requestId: '',
      errorMessage: ''
    },
    content: /*#__PURE__*/React.createElement(Content, null),
    buttons: function buttons(data) {
      return [_objectSpread(_objectSpread({}, buttonConfirm), {}, {
        disabled: !data.code
      }), buttonCancel];
    },
    undefinedAsReject: true
  });
});