"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionToggleVisible;

var _const = require("../const");

function actionToggleVisible(visible) {
  return {
    type: _const.EAction.TOGGLE_VISIBLE,
    payload: visible
  };
}