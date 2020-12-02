"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionSetZIndex;

var _const = require("../const");

function actionSetZIndex(zIndex) {
  return {
    type: _const.EAction.SET_Z_INDEX,
    payload: zIndex
  };
}