"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ErrorDetails;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _map2 = _interopRequireDefault(require("lodash/map"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _snakeCase2 = _interopRequireDefault(require("lodash/snakeCase"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _consoleBaseStyledMixin = require("@alicloud/console-base-styled-mixin");

var _consoleBaseRcButton = _interopRequireWildcard(require("@alicloud/console-base-rc-button"));

var _intl = _interopRequireDefault(require("../../../intl"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  flex: 1;\n  text-align: right;\n  color: ", ";\n  ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-right: 1em;\n  min-width: 5em;\n  text-transform: uppercase;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  padding: 4px 0;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin: 1.5em 0 0 1em;\n  padding: 0;\n  max-height: ", ";\n  overflow: hidden;\n  list-style: none;\n  font-size: 10px;\n  transition: all 0.3s ease-out;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  opacity: 0.6;\n  max-width: 100%;\n  \n  &:hover {\n    opacity: 0.8;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScButtonToggle = (0, _styledComponents.default)(_consoleBaseRcButton.default)(_templateObject());

var ScErrorDetails = _styledComponents.default.ul(_templateObject2(), function (props) {
  return props.folded ? '0' : '1000px';
});

var ScKV = _styledComponents.default.li(_templateObject3(), _consoleBaseStyledMixin.COLOR.LINE_LIGHT);

var ScK = _styledComponents.default.div(_templateObject4());

var ScV = _styledComponents.default.div(_templateObject5(), _consoleBaseStyledMixin.COLOR.TEXT_CAPTION, _consoleBaseStyledMixin.typo.lineWrap);

function toDisplayValue(v) {
  try {
    return JSON.stringify(v);
  } catch (ex) {
    return null;
  }
}

function renderObject(o) {
  return /*#__PURE__*/_react.default.createElement("div", null, (0, _map2.default)(o, function (v, k) {
    return /*#__PURE__*/_react.default.createElement("div", {
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
      rest = (0, _objectWithoutProperties2.default)(_ref, ["code", "requestId", "url", "method", "params", "body"]);
  var kvList = [];
  (0, _forEach2.default)(_objectSpread({
    code: code,
    requestId: requestId,
    url: url,
    method: method,
    params: params,
    body: body
  }, rest), function (v, k) {
    var displayKey = (0, _snakeCase2.default)(k);

    if (displayKey === 'message' || (0, _isFunction2.default)(v) || (0, _isNil2.default)(v) || v === '') {
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

function ErrorDetails(_ref2) {
  var details = _ref2.details;

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateFolded = _useState2[0],
      setStateFolded = _useState2[1];

  var kvList = convertDetails(details);

  if (!kvList.length) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(ScButtonToggle, {
    spm: 'detail-toggle',
    text: true,
    iconRight: 'angle-down',
    label: details.code ? (0, _intl.default)('alert_error:op:toggle_details_{code}', {
      code: details.code
    }) : (0, _intl.default)('alert_error:op:toggle_details'),
    preset: _consoleBaseRcButton.EButtonPreset.TEXT,
    onClick: function onClick() {
      return setStateFolded(!stateFolded);
    }
  }), /*#__PURE__*/_react.default.createElement(ScErrorDetails, {
    folded: stateFolded
  }, kvList.map(function (_ref3) {
    var k0 = _ref3.k0,
        k = _ref3.k,
        v = _ref3.v;
    var displayValue;

    if ((0, _isString2.default)(v) || /*#__PURE__*/(0, _react.isValidElement)(v)) {
      displayValue = v;
    } else if ((0, _isPlainObject2.default)(v)) {
      // 对象转成 
      displayValue = renderObject(v);
    } else {
      displayValue = toDisplayValue(v);
    }

    return /*#__PURE__*/_react.default.createElement(ScKV, {
      key: k0
    }, /*#__PURE__*/_react.default.createElement(ScK, null, k), /*#__PURE__*/_react.default.createElement(ScV, null, displayValue));
  })));
}