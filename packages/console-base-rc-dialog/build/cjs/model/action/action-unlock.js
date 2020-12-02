"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionUnlock;

var _const = require("../const");

function actionUnlock() {
  return {
    type: _const.EAction.UNLOCK
  };
}