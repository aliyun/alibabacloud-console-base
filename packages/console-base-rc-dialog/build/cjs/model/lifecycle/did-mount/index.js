"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DidMount;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _reactHookIsUnmounted = _interopRequireDefault(require("@alicloud/react-hook-is-unmounted"));

var _hook = require("../../hook");

/**
 * mimic componentDidMount
 */
function DidMount() {
  var isUnmounted = (0, _reactHookIsUnmounted.default)();
  var dispatchToggleActive = (0, _hook.useDispatchToggleActive)();
  var dispatchFocus = (0, _hook.useDispatchFocus)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      stateDidMount = _useState2[0],
      setStateDidMount = _useState2[1];

  (0, _react.useEffect)(function () {
    if (!stateDidMount) {
      setStateDidMount(true);
      setTimeout(function () {
        // 触发 CSS 动画
        if (isUnmounted()) {
          return;
        }

        dispatchToggleActive(true);
        dispatchFocus();
      }, 10);
    }
  }, [stateDidMount, isUnmounted, dispatchToggleActive, dispatchFocus]);
  return null;
}