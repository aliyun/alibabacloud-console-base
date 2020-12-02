"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _fetcher = require("@alicloud/fetcher");

var _consoleBaseRcDialog = require("@alicloud/console-base-rc-dialog");

var _intl = _interopRequireDefault(require("../../../intl"));

var _intlVerify = require("../../intl-verify");

var _content = _interopRequireDefault(require("./content"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 风控 - 二次验证（SMS + EMAIL + MFA）
 */
var _default = function _default(_ref) {
  var request = _ref.request,
      fetcherConfig = _ref.fetcherConfig,
      riskInfo = _ref.riskInfo,
      riskConfig = _ref.riskConfig;
  var buttonConfirm = {
    spm: 'confirm',
    disabled: true,
    label: (0, _intl.default)('op:confirm'),
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
      request(_fetcher.FetcherUtils.mergeConfig(fetcherConfig, _fetcher.FetcherUtils.canHaveBody(fetcherConfig.method) ? {
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
            errorMessage: (0, _intl.default)('message:code_incorrect')
          });
        } else {
          // 其他的错误，抛出
          close(err, true);
        }
      });
      return false;
    }
  };
  var buttonCancel = (0, _intl.default)('op:cancel');
  return (0, _consoleBaseRcDialog.open)({
    title: (0, _intlVerify.intlVerifyTitle)(riskInfo.type),
    data: {
      request: request,
      riskInfo: riskInfo,
      riskConfig: riskConfig,
      code: '',
      requestId: '',
      errorMessage: ''
    },
    content: /*#__PURE__*/_react.default.createElement(_content.default, null),
    buttons: function buttons(data) {
      return [_objectSpread(_objectSpread({}, buttonConfirm), {}, {
        disabled: !data.code
      }), buttonCancel];
    },
    undefinedAsReject: true
  });
};

exports.default = _default;