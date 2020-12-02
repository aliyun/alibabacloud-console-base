"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroup = CheckboxGroup;
exports.RadioGroup = RadioGroup;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _without2 = _interopRequireDefault(require("lodash/without"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  margin-left: 0.25em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  margin-right: 1.6em;\n  color: #777;\n  transition: color 0.3s ease-in-out;\n  \n  &:hover {\n    color: #333;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  display: inline-block;\n  margin-right: 0.5em;\n  color: #333;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  line-height: 2;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ScChoiceGroup = _styledComponents.default.div(_templateObject());

var ScGroupLabel = _styledComponents.default.label(_templateObject2());

var ScChoice = _styledComponents.default.label(_templateObject3());

var ScChoiceLabel = _styledComponents.default.span(_templateObject4());

function renderInputCheckbox(checked, itemValue, onChange) {
  return /*#__PURE__*/_react.default.createElement("input", {
    type: 'checkbox',
    checked: checked,
    onChange: function (_onChange) {
      function onChange(_x) {
        return _onChange.apply(this, arguments);
      }

      onChange.toString = function () {
        return _onChange.toString();
      };

      return onChange;
    }(function (e) {
      return onChange(e, itemValue);
    })
  });
}

function renderInputRadio(checked, itemValue, onChange) {
  return /*#__PURE__*/_react.default.createElement("input", {
    type: 'radio',
    checked: checked,
    onChange: function (_onChange2) {
      function onChange(_x2) {
        return _onChange2.apply(this, arguments);
      }

      onChange.toString = function () {
        return _onChange2.toString();
      };

      return onChange;
    }(function (e) {
      return onChange(e, itemValue);
    })
  });
}

function ChoiceGroup(_ref) {
  var label = _ref.label,
      items = _ref.items,
      value = _ref.value,
      onChange = _ref.onChange,
      defaultStateValue = _ref.defaultStateValue,
      getValueOnChange = _ref.getValueOnChange,
      isChecked = _ref.isChecked,
      renderInput = _ref.renderInput;

  var _useState = (0, _react.useState)(defaultStateValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  var onCheckboxChange = (0, _react.useCallback)(function (e, v) {
    var newValue = getValueOnChange(e.target.checked, v, stateValue);
    setStateValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  }, [getValueOnChange, stateValue, onChange]);
  (0, _react.useEffect)(function () {
    if (value && !(0, _isEqual2.default)(value, stateValue)) {
      setStateValue(value);
    }
  }, [value, stateValue, setStateValue]);
  return /*#__PURE__*/_react.default.createElement(ScChoiceGroup, null, label ? /*#__PURE__*/_react.default.createElement(ScGroupLabel, null, label) : null, items.map(function (v, i) {
    return /*#__PURE__*/_react.default.createElement(ScChoice, {
      key: "".concat(v.value, "-").concat(i)
    }, renderInput(isChecked(v.value, stateValue), v.value, onCheckboxChange), /*#__PURE__*/_react.default.createElement(ScChoiceLabel, null, v.label));
  }));
}

function CheckboxGroup(_ref2) {
  var _ref3;

  var label = _ref2.label,
      items = _ref2.items,
      value = _ref2.value,
      defaultValue = _ref2.defaultValue,
      onChange = _ref2.onChange;

  if (!(items !== null && items !== void 0 && items.length)) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(ChoiceGroup, {
    label: label,
    items: items,
    value: value,
    onChange: onChange,
    defaultStateValue: (_ref3 = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref3 !== void 0 ? _ref3 : [],
    getValueOnChange: function getValueOnChange(checked, itemValue, currentValue) {
      return checked ? [].concat((0, _toConsumableArray2.default)(currentValue), [itemValue]) : (0, _without2.default)(currentValue, itemValue);
    },
    isChecked: function isChecked(itemValue, currentValue) {
      return currentValue.includes(itemValue);
    },
    renderInput: renderInputCheckbox
  });
}

function RadioGroup(_ref4) {
  var label = _ref4.label,
      items = _ref4.items,
      value = _ref4.value,
      defaultValue = _ref4.defaultValue,
      onChange = _ref4.onChange;

  if (!(items !== null && items !== void 0 && items.length)) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(ChoiceGroup, {
    label: label,
    items: items,
    value: value,
    onChange: onChange,
    defaultStateValue: value !== null && value !== void 0 ? value : defaultValue,
    getValueOnChange: function getValueOnChange(checked, itemValue, _currentValue) {
      return itemValue;
    },
    isChecked: function isChecked(itemValue, currentValue) {
      return itemValue === currentValue;
    },
    renderInput: renderInputRadio
  });
}