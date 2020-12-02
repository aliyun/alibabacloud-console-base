"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = actionUpdateProps;

var _const = require("../const");

function actionUpdateProps(payload) {
  return {
    type: _const.EAction.UPDATE_PROPS,
    payload: payload
  };
}