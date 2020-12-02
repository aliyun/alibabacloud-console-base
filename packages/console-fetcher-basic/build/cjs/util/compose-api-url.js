"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composeApiUrl;

var _uniq2 = _interopRequireDefault(require("lodash/uniq"));

/**
 * 由于相同类型的 API 调用的接口 URL 都是一个，为了方便快速定位，在 URL 上拼上对应产品和 action
 */
function composeApiUrl(apiUrl, product, action) {
  var actionArr = Array.isArray(action) ? (0, _uniq2.default)(action) : [action];
  return "".concat(apiUrl, "?_").concat(product, "__").concat(actionArr.join('~'), "_");
}