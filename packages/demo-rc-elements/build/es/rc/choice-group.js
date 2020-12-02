import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 0.25em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 1.6em;\n  color: #777;\n  transition: color 0.3s ease-in-out;\n  \n  &:hover {\n    color: #333;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 0.5em;\n  color: #333;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  line-height: 2;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/no-array-index-key */
import _without from 'lodash/without';
import _isEqual from 'lodash/isEqual';
import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
var ScChoiceGroup = styled.div(_templateObject());
var ScGroupLabel = styled.label(_templateObject2());
var ScChoice = styled.label(_templateObject3());
var ScChoiceLabel = styled.span(_templateObject4());

function renderInputCheckbox(checked, itemValue, onChange) {
  return /*#__PURE__*/React.createElement("input", {
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
  return /*#__PURE__*/React.createElement("input", {
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

  var _useState = useState(defaultStateValue),
      _useState2 = _slicedToArray(_useState, 2),
      stateValue = _useState2[0],
      setStateValue = _useState2[1];

  var onCheckboxChange = useCallback(function (e, v) {
    var newValue = getValueOnChange(e.target.checked, v, stateValue);
    setStateValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  }, [getValueOnChange, stateValue, onChange]);
  useEffect(function () {
    if (value && !_isEqual(value, stateValue)) {
      setStateValue(value);
    }
  }, [value, stateValue, setStateValue]);
  return /*#__PURE__*/React.createElement(ScChoiceGroup, null, label ? /*#__PURE__*/React.createElement(ScGroupLabel, null, label) : null, items.map(function (v, i) {
    return /*#__PURE__*/React.createElement(ScChoice, {
      key: "".concat(v.value, "-").concat(i)
    }, renderInput(isChecked(v.value, stateValue), v.value, onCheckboxChange), /*#__PURE__*/React.createElement(ScChoiceLabel, null, v.label));
  }));
}

export function CheckboxGroup(_ref2) {
  var _ref3;

  var label = _ref2.label,
      items = _ref2.items,
      value = _ref2.value,
      defaultValue = _ref2.defaultValue,
      onChange = _ref2.onChange;

  if (!(items !== null && items !== void 0 && items.length)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ChoiceGroup, {
    label: label,
    items: items,
    value: value,
    onChange: onChange,
    defaultStateValue: (_ref3 = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref3 !== void 0 ? _ref3 : [],
    getValueOnChange: function getValueOnChange(checked, itemValue, currentValue) {
      return checked ? [].concat(_toConsumableArray(currentValue), [itemValue]) : _without(currentValue, itemValue);
    },
    isChecked: function isChecked(itemValue, currentValue) {
      return currentValue.includes(itemValue);
    },
    renderInput: renderInputCheckbox
  });
}
export function RadioGroup(_ref4) {
  var label = _ref4.label,
      items = _ref4.items,
      value = _ref4.value,
      defaultValue = _ref4.defaultValue,
      onChange = _ref4.onChange;

  if (!(items !== null && items !== void 0 && items.length)) {
    return null;
  }

  return /*#__PURE__*/React.createElement(ChoiceGroup, {
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