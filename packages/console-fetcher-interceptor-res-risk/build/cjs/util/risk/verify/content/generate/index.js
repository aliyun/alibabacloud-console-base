"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Generate;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _consoleBaseRcDialog = require("@alicloud/console-base-rc-dialog");

var _consoleBaseRcButton = _interopRequireWildcard(require("@alicloud/console-base-rc-button"));

var _intl = _interopRequireDefault(require("../../../../../intl"));

/**
 * 生成验证码按钮，有冷却时间
 */
function Generate() {
  var _useDialog = (0, _consoleBaseRcDialog.useDialog)(),
      _useDialog$data = _useDialog.data,
      request = _useDialog$data.request,
      _useDialog$data$riskI = _useDialog$data.riskInfo,
      verifyType = _useDialog$data$riskI.verifyType,
      codeType = _useDialog$data$riskI.codeType,
      _useDialog$data$riskC = _useDialog$data.riskConfig,
      URL_SEND_CODE = _useDialog$data$riskC.URL_SEND_CODE,
      COOLING_AFTER_SENT = _useDialog$data$riskC.COOLING_AFTER_SENT,
      COOLING_AFTER_SEND_FAIL = _useDialog$data$riskC.COOLING_AFTER_SEND_FAIL,
      METHOD_SEND_CODE = _useDialog$data$riskC.METHOD_SEND_CODE,
      updateData = _useDialog.updateData,
      lock = _useDialog.lock,
      unlock = _useDialog.unlock;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateGenerating = _useState2[0],
      setStateGenerating = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      stateCooling = _useState4[0],
      setStateCooling = _useState4[1];

  var handleClick = (0, _react.useCallback)( /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            lock();
            setStateGenerating(true);
            _context.prev = 2;
            _context.next = 5;
            return request({
              method: METHOD_SEND_CODE,
              url: URL_SEND_CODE,
              body: {
                verifyType: verifyType,
                codeType: codeType
              }
            }).then(function (data) {
              return updateData({
                requestId: (data === null || data === void 0 ? void 0 : data.requestId) || ''
              });
            });

          case 5:
            setStateCooling(Math.round(COOLING_AFTER_SENT));
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            updateData({
              errorMessage: (_context.t0 === null || _context.t0 === void 0 ? void 0 : _context.t0.message) || ''
            });
            setStateCooling(Math.round(COOLING_AFTER_SEND_FAIL));

          case 12:
            _context.prev = 12;
            setStateGenerating(false);
            unlock();
            return _context.finish(12);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8, 12, 16]]);
  })), [lock, unlock, updateData, request, verifyType, codeType, URL_SEND_CODE, COOLING_AFTER_SENT, COOLING_AFTER_SEND_FAIL, METHOD_SEND_CODE]);
  (0, _react.useEffect)(function () {
    var timer;

    if (stateCooling > 0) {
      timer = setTimeout(function () {
        return setStateCooling(stateCooling - 1);
      }, 1000);
    }

    return function () {
      return timer && clearTimeout(timer);
    };
  }, [stateCooling]);
  return /*#__PURE__*/_react.default.createElement(_consoleBaseRcButton.default, {
    spm: "get-code-".concat(verifyType),
    label: stateCooling > 0 ? (0, _intl.default)('op:resend_after_{n}s', {
      n: stateCooling
    }) : (0, _intl.default)('op:send_code'),
    preset: _consoleBaseRcButton.EButtonPreset.SECONDARY,
    loading: stateGenerating,
    disabled: stateCooling > 0,
    onClick: handleClick
  });
}