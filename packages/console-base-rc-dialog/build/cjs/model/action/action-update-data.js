"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionUpdateData;

var _const = require("../const");

function actionUpdateData(payload) {
  return {
    type: _const.EAction.UPDATE_DATA,
    payload: payload
  };
}