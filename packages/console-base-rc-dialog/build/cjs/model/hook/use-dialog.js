"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDialog;

var _react = require("react");

var _useModelState2 = _interopRequireDefault(require("./_use-model-state"));

var _useDispatchLock = _interopRequireDefault(require("./use-dispatch-lock"));

var _useDispatchUnlock = _interopRequireDefault(require("./use-dispatch-unlock"));

var _useDispatchFocus = _interopRequireDefault(require("./use-dispatch-focus"));

var _useDispatchResetScrollTop = _interopRequireDefault(require("./use-dispatch-reset-scroll-top"));

var _useDispatchCloseWithValue = _interopRequireDefault(require("./use-dispatch-close-with-value"));

var _useDispatchUpdateProps = _interopRequireDefault(require("./use-dispatch-update-props"));

var _useDispatchForceUpdate = _interopRequireDefault(require("./use-dispatch-force-update"));

var _useDispatchUpdateData = _interopRequireDefault(require("./use-dispatch-update-data"));

/**
 * 给 content 使用的 hook
 */
function useDialog() {
  var _useModelState = (0, _useModelState2.default)(),
      data = _useModelState.data;

  var focus = (0, _useDispatchFocus.default)();
  var lock = (0, _useDispatchLock.default)();
  var unlock = (0, _useDispatchUnlock.default)();
  var resetScrollTop = (0, _useDispatchResetScrollTop.default)();
  var close = (0, _useDispatchCloseWithValue.default)();
  var updateData = (0, _useDispatchUpdateData.default)();
  var update = (0, _useDispatchUpdateProps.default)();
  var forceUpdate = (0, _useDispatchForceUpdate.default)();
  return (0, _react.useMemo)(function () {
    return {
      data: data,
      focus: focus,
      resetScrollTop: resetScrollTop,
      lock: lock,
      unlock: unlock,
      update: update,
      updateData: updateData,
      forceUpdate: forceUpdate,
      close: close
    };
  }, [data, focus, resetScrollTop, lock, unlock, update, updateData, forceUpdate, close]);
}