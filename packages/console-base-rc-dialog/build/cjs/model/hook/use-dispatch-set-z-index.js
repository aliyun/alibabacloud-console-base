"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useDispatchSetZIndex;

var _react = require("react");

var _action = require("../action");

var _useModelDispatch = _interopRequireDefault(require("./_use-model-dispatch"));

function useDispatchSetZIndex() {
  var dispatch = (0, _useModelDispatch.default)();
  return (0, _react.useCallback)(function (zIndex) {
    return dispatch((0, _action.actionSetZIndex)(zIndex));
  }, [dispatch]);
}