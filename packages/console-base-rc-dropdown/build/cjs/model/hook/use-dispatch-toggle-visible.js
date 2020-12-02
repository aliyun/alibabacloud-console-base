"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchToggleVisible;

var _react = require("react");

var _action = require("../action");

var _useModelProps2 = _interopRequireDefault(require("./_use-model-props"));

var _useModelDispatch = _interopRequireDefault(require("./_use-model-dispatch"));

function useDispatchToggleVisible() {
  var _useModelProps = (0, _useModelProps2.default)(),
      onVisibleChange = _useModelProps.onVisibleChange;

  var dispatch = (0, _useModelDispatch.default)();
  return (0, _react.useCallback)(function () {
    var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    dispatch((0, _action.actionToggleVisible)(visible));

    if (onVisibleChange) {
      onVisibleChange(visible);
    }
  }, [dispatch, onVisibleChange]);
}