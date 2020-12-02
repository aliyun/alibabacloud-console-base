import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  text-align: right;\n  color: ", ";\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 1em;\n  min-width: 5em;\n  text-transform: uppercase;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 4px 0;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 1.5em 0 0 1em;\n  padding: 0;\n  max-height: ", ";\n  overflow: hidden;\n  list-style: none;\n  font-size: 10px;\n  transition: all 0.3s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  opacity: 0.6;\n  max-width: 100%;\n  \n  &:hover {\n    opacity: 0.8;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import _map from 'lodash/map';
import _forEach from 'lodash/forEach';
import _isString from 'lodash/isString';
import _isFunction from 'lodash/isFunction';
import _isNil from 'lodash/isNil';
import _isPlainObject from 'lodash/isPlainObject';
import _snakeCase from 'lodash/snakeCase';
import React, { isValidElement, useState } from 'react';
import styled from 'styled-components';
import { COLOR, typo } from '@alicloud/console-base-styled-mixin';
import Button, { EButtonPreset } from '@alicloud/console-base-rc-button';
import intl from '../../../intl';
var ScButtonToggle = styled(Button)(_templateObject());
var ScErrorDetails = styled.ul(_templateObject2(), function (props) {
  return props.folded ? '0' : '1000px';
});
var ScKV = styled.li(_templateObject3(), COLOR.LINE_LIGHT);
var ScK = styled.div(_templateObject4());
var ScV = styled.div(_templateObject5(), COLOR.TEXT_CAPTION, typo.lineWrap);

function toDisplayValue(v) {
  try {
    return JSON.stringify(v);
  } catch (ex) {
    return null;
  }
}

function renderObject(o) {
  return /*#__PURE__*/React.createElement("div", null, _map(o, function (v, k) {
    return /*#__PURE__*/React.createElement("div", {
      key: k
    }, k, " = ", toDisplayValue(v));
  }));
}
/**
 * 把错误对象转成 `{k0, k, v}` 对象数组，保证某些字段的顺序
 */


function convertDetails(_ref) {
  var code = _ref.code,
      requestId = _ref.requestId,
      url = _ref.url,
      method = _ref.method,
      params = _ref.params,
      body = _ref.body,
      rest = _objectWithoutProperties(_ref, ["code", "requestId", "url", "method", "params", "body"]);

  var kvList = [];

  _forEach(_objectSpread({
    code: code,
    requestId: requestId,
    url: url,
    method: method,
    params: params,
    body: body
  }, rest), function (v, k) {
    var displayKey = _snakeCase(k);

    if (displayKey === 'message' || _isFunction(v) || _isNil(v) || v === '') {
      return;
    }

    kvList.push({
      k0: k,
      k: displayKey,
      v: v
    });
  });

  return kvList;
}

export default function ErrorDetails(_ref2) {
  var details = _ref2.details;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      stateFolded = _useState2[0],
      setStateFolded = _useState2[1];

  var kvList = convertDetails(details);

  if (!kvList.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ScButtonToggle, {
    spm: 'detail-toggle',
    text: true,
    iconRight: 'angle-down',
    label: details.code ? intl('alert_error:op:toggle_details_{code}', {
      code: details.code
    }) : intl('alert_error:op:toggle_details'),
    preset: EButtonPreset.TEXT,
    onClick: function onClick() {
      return setStateFolded(!stateFolded);
    }
  }), /*#__PURE__*/React.createElement(ScErrorDetails, {
    folded: stateFolded
  }, kvList.map(function (_ref3) {
    var k0 = _ref3.k0,
        k = _ref3.k,
        v = _ref3.v;
    var displayValue;

    if (_isString(v) || /*#__PURE__*/isValidElement(v)) {
      displayValue = v;
    } else if (_isPlainObject(v)) {
      // 对象转成 
      displayValue = renderObject(v);
    } else {
      displayValue = toDisplayValue(v);
    }

    return /*#__PURE__*/React.createElement(ScKV, {
      key: k0
    }, /*#__PURE__*/React.createElement(ScK, null, k), /*#__PURE__*/React.createElement(ScV, null, displayValue));
  })));
}