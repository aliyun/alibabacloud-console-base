"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PrePromise;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _pre = _interopRequireDefault(require("./pre"));

var _preJson = _interopRequireDefault(require("./pre-json"));

var _BD, _BG;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ELoading;

(function (ELoading) {
  ELoading[ELoading["IDLE"] = 0] = "IDLE";
  ELoading[ELoading["LOADING"] = 1] = "LOADING";
  ELoading[ELoading["RESOLVED"] = 2] = "RESOLVED";
  ELoading[ELoading["REJECTED"] = 3] = "REJECTED";
})(ELoading || (ELoading = {}));

var BD = (_BD = {}, (0, _defineProperty2.default)(_BD, ELoading.IDLE, '#ddd'), (0, _defineProperty2.default)(_BD, ELoading.LOADING, '#eed'), (0, _defineProperty2.default)(_BD, ELoading.RESOLVED, '#cec'), (0, _defineProperty2.default)(_BD, ELoading.REJECTED, '#edd'), _BD);
var BG = (_BG = {}, (0, _defineProperty2.default)(_BG, ELoading.IDLE, '#eee'), (0, _defineProperty2.default)(_BG, ELoading.LOADING, '#ffe'), (0, _defineProperty2.default)(_BG, ELoading.RESOLVED, '#dfd'), (0, _defineProperty2.default)(_BG, ELoading.REJECTED, '#fee'), _BG);
var DEFAULT_RESULT = {
  loading: ELoading.IDLE,
  result: null
};

function normalizeError(error) {
  if (!error) {
    return {};
  }

  var o = {
    name: error.name,
    message: error.message
  }; // eslint-disable-next-line guard-for-in

  for (var k in error) {
    o[k] = error[k];
  }

  return o;
}

function PrePromise(_ref) {
  var promise = _ref.promise,
      style = _ref.style,
      props = (0, _objectWithoutProperties2.default)(_ref, ["promise", "style"]);

  var _useState = (0, _react.useState)(DEFAULT_RESULT),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateResult = _useState2[0],
      setStateResult = _useState2[1];

  var preProps = _objectSpread(_objectSpread({}, props), {}, {
    style: _objectSpread(_objectSpread({}, style), {}, {
      borderColor: BD[stateResult.loading],
      backgroundColor: BG[stateResult.loading]
    })
  });

  (0, _react.useEffect)(function () {
    if (!promise) {
      setStateResult(DEFAULT_RESULT);
      return;
    }

    setStateResult({
      loading: ELoading.LOADING,
      result: null
    });
    var start = Date.now();
    promise.then(function (result) {
      return setStateResult({
        loading: ELoading.RESOLVED,
        result: result,
        duration: Date.now() - start
      });
    }).catch(function (err) {
      return setStateResult({
        loading: ELoading.REJECTED,
        result: err,
        duration: Date.now() - start
      });
    });
  }, [promise]);

  switch (stateResult.loading) {
    case ELoading.IDLE:
      return /*#__PURE__*/_react.default.createElement(_pre.default, preProps, "Idle");

    case ELoading.LOADING:
      return /*#__PURE__*/_react.default.createElement(_pre.default, preProps, "Loading...");

    default:
      // RESOLVED + REJECTED
      return /*#__PURE__*/_react.default.createElement(_preJson.default, _objectSpread(_objectSpread({}, preProps), {}, {
        o: stateResult.loading === ELoading.REJECTED ? normalizeError(stateResult.result) : stateResult.result,
        footnote: "\u8017\u65F6\uFF1A".concat(stateResult.duration, "ms")
      }));
  }
}