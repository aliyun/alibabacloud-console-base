"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchForceUpdate;

var _react = require("react");

var _action = require("../action");

var _useModelDispatch = _interopRequireDefault(require("./_use-model-dispatch"));

function useDispatchForceUpdate() {
  var dispatch = (0, _useModelDispatch.default)();
  return (0, _react.useCallback)(function () {
    return dispatch((0, _action.actionForceUpdate)());
  }, [dispatch]);
}