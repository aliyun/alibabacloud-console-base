"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionForceUpdate;

var _const = require("../const");

function actionForceUpdate() {
  return {
    type: _const.EAction.FORCE_UPDATE
  };
}