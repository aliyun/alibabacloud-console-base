"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchToggleActive;

var _react = require("react");

var _action = require("../action");

var _useModelDispatch = _interopRequireDefault(require("./_use-model-dispatch"));

function useDispatchToggleActive() {
  var dispatch = (0, _useModelDispatch.default)();
  return (0, _react.useCallback)(function (active) {
    return dispatch(active ? (0, _action.actionActivate)() : (0, _action.actionDeactivate)());
  }, [dispatch]);
}