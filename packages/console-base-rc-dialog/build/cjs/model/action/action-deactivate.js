"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionDeactivate;

var _const = require("../const");

function actionDeactivate() {
  return {
    type: _const.EAction.DEACTIVATE
  };
}