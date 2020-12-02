"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = WithPromise;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _reactHookIsUnmounted = _interopRequireDefault(require("@alicloud/react-hook-is-unmounted"));

var _consoleBaseCommonTypings = require("@alicloud/console-base-common-typings");

var _withLoading = _interopRequireDefault(require("../with-loading"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function WithPromise(_ref) {
  var promise = _ref.promise,
      props = (0, _objectWithoutProperties2.default)(_ref, ["promise"]);
  var isUnmounted = (0, _reactHookIsUnmounted.default)();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateDwl = _useState2[0],
      setStateDwl = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!promise) {
      setStateDwl(null);
      return;
    }

    setStateDwl({
      loading: _consoleBaseCommonTypings.ELoading.LOADING,
      data: null
    });
    promise.then(function (result) {
      if (isUnmounted()) {
        return;
      }

      setStateDwl({
        loading: _consoleBaseCommonTypings.ELoading.SUCCESS,
        data: result
      });
    }).catch(function (err) {
      if (isUnmounted()) {
        return;
      }

      setStateDwl({
        loading: _consoleBaseCommonTypings.ELoading.ERROR,
        data: null,
        error: err
      });
    });
  }, [isUnmounted, promise, setStateDwl]);
  return promise ? /*#__PURE__*/_react.default.createElement(_withLoading.default, _objectSpread(_objectSpread({}, stateDwl), props)) : null;
}