"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "convertToErrorDetailedInfo", {
  enumerable: true,
  get: function get() {
    return _convertToErrorDetailedInfo.default;
  }
});
exports.default = void 0;

var _errorPrompt = _interopRequireDefault(require("./error-prompt"));

var _convertToErrorDetailedInfo = _interopRequireDefault(require("./util/convert-to-error-detailed-info"));

var _default = _errorPrompt.default;
exports.default = _default;