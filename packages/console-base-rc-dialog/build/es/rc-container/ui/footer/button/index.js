import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 8px;\n  min-width: 64px;\n  \n  &:last-child {\n    margin-right: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React, { useCallback } from 'react';
import styled from 'styled-components';
import Button, { EButtonPreset } from '@alicloud/console-base-rc-button';
import { useDialog, useDispatchLock, useDispatchUnlock, useDispatchCloseWithValue } from '../../../../model';
var ScButton = styled(Button)(_templateObject());
export default function FooterButton(_ref) {
  var result = _ref.result,
      primary = _ref.primary,
      onClick = _ref.onClick,
      buttonProps = _objectWithoutProperties(_ref, ["result", "primary", "onClick"]);

  var dialog = useDialog();
  var dispatchLock = useDispatchLock();
  var dispatchUnlock = useDispatchUnlock();
  var dispatchCloseWithValue = useDispatchCloseWithValue();
  var handleClick = useCallback(function (e) {
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
  return /*#__PURE__*/React.createElement(ScButton, _objectSpread(_objectSpread({}, buttonProps), {}, {
    // spm 参数一定存在，由上游保证
    preset: primary ? EButtonPreset.PRIMARY : EButtonPreset.SECONDARY,
    onClick: handleClick
  }));
}