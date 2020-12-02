"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.New = New;
exports.Hot = Hot;
exports.Update = Update;
exports.Alpha = Alpha;
exports.Beta = Beta;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n          transform-origin: right center;\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n          transform-origin: left center;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  position: relative;\n  padding: 0 6px;\n  line-height: 1.5;\n  font-family: Arial, sans-serif;\n  font-size: 12px;\n  text-shadow: 1px 1px 0 #666;\n  letter-spacing: 2px;\n  color: #fff;\n  transform: scale(0.7);\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var EType;

(function (EType) {
  EType[EType["NEW"] = 0] = "NEW";
  EType[EType["HOT"] = 1] = "HOT";
  EType[EType["UPDATE"] = 2] = "UPDATE";
  EType[EType["ALPHA"] = 3] = "ALPHA";
  EType[EType["BETA"] = 4] = "BETA";
})(EType || (EType = {}));

var ScMark = _styledComponents.default.span(_templateObject(), function (props) {
  switch (props.align) {
    case 'left':
      return (0, _styledComponents.css)(_templateObject2());

    case 'right':
      return (0, _styledComponents.css)(_templateObject3());

    default:
      return null;
    // 默认 center center
  }
});

function getBgcText(type) {
  switch (type) {
    case EType.NEW:
      return ['#f54743', 'NEW'];

    case EType.HOT:
      return ['#f54743', 'HOT'];

    case EType.UPDATE:
      return ['#c39', 'UPDATE'];

    case EType.ALPHA:
      return ['#ccc', 'ALPHA'];

    case EType.BETA:
      return ['#090', 'BETA'];

    default:
      return ['#999', '?'];
  }
}

function Mark(_ref) {
  var type = _ref.type,
      align = _ref.align,
      component = _ref.component;

  var _getBgcText = getBgcText(type),
      _getBgcText2 = (0, _slicedToArray2.default)(_getBgcText, 2),
      backgroundColor = _getBgcText2[0],
      text = _getBgcText2[1];

  return /*#__PURE__*/_react.default.createElement(ScMark, {
    as: component,
    align: align,
    style: {
      backgroundColor: backgroundColor
    }
  }, text);
}

function New(props) {
  return /*#__PURE__*/_react.default.createElement(Mark, _objectSpread(_objectSpread({}, props), {}, {
    type: EType.NEW
  }));
}

function Hot(props) {
  return /*#__PURE__*/_react.default.createElement(Mark, _objectSpread(_objectSpread({}, props), {}, {
    type: EType.HOT
  }));
}

function Update(props) {
  return /*#__PURE__*/_react.default.createElement(Mark, _objectSpread(_objectSpread({}, props), {}, {
    type: EType.UPDATE
  }));
}

function Alpha(props) {
  return /*#__PURE__*/_react.default.createElement(Mark, _objectSpread(_objectSpread({}, props), {}, {
    type: EType.ALPHA
  }));
}

function Beta(props) {
  return /*#__PURE__*/_react.default.createElement(Mark, _objectSpread(_objectSpread({}, props), {}, {
    type: EType.BETA
  }));
}