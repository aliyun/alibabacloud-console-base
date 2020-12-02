"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _const = require("../const");

var _reduceToggleVisible = _interopRequireDefault(require("./reduce-toggle-visible"));

function reducer(state, action) {
  switch (action.type) {
    case _const.EAction.TOGGLE_VISIBLE:
      return (0, _reduceToggleVisible.default)(state, action.payload);

    default:
      return state;
  }
}