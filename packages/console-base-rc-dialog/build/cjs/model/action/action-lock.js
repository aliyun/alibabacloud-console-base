"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionLock;

var _const = require("../const");

function actionLock(loading) {
  return {
    type: _const.EAction.LOCK,
    payload: loading
  };
}