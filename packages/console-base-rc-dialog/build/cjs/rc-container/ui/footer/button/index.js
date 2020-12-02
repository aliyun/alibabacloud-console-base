"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FooterButton;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseRcButton = _interopRequireWildcard(require("@alicloud/console-base-rc-button"));

var _model = require("../../../../model");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-right: 8px;\n  min-width: 64px;\n  \n  &:last-child {\n    margin-right: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScButton = (0, _styledComponents.default)(_consoleBaseRcButton.default)(_templateObject());

function FooterButton(_ref) {
  var result = _ref.result,
      primary = _ref.primary,
      onClick = _ref.onClick,
      buttonProps = (0, _objectWithoutProperties2.default)(_ref, ["result", "primary", "onClick"]);
  var dialog = (0, _model.useDialog)();
  var dispatchLock = (0, _model.useDispatchLock)();
  var dispatchUnlock = (0, _model.useDispatchUnlock)();
  var dispatchCloseWithValue = (0, _model.useDispatchCloseWithValue)();
  var handleClick = (0, _react.useCallback)(function (e) {
    var willClose;

    if (onClick) {
      willClose = onClick(dialog, e);
    }

    if (willClose === false) {
      return;
    }

    var finalResult = result;

    if (typeof result === 'function') {
      finalResult = result(dialog.data);

      if (finalResult.then) {
        // 弱判
        dispatchLock(true);
        finalResult.then(function (resultResult) {
          dispatchUnlock();
          dispatchCloseWithValue(resultResult);
        }, function (err) {
          dispatchUnlock();
          dispatchCloseWithValue(err, true);
        });
        return;
      }
    }

    dispatchCloseWithValue(finalResult);
  }, [onClick, result, dispatchCloseWithValue, dialog, dispatchLock, dispatchUnlock]);
  return /*#__PURE__*/_react.default.createElement(ScButton, _objectSpread(_objectSpread({}, buttonProps), {}, {
    // spm 参数一定存在，由上游保证
    preset: primary ? _consoleBaseRcButton.EButtonPreset.PRIMARY : _consoleBaseRcButton.EButtonPreset.SECONDARY,
    onClick: handleClick
  }));
}