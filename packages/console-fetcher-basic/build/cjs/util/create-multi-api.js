"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMultiApi;

var _const = require("../const");

var _composeApiUrl = _interopRequireDefault(require("./compose-api-url"));

function getApiUrl(type) {
  switch (type) {
    case _const.ETypeApiMulti.OPEN:
      return '/data/multiApi.json';

    default:
      throw new Error("OneAPI type ".concat(type, " not supported!"));
  }
}
/**
 * OpenAPI 多 action 并发调用
 *
 * 仅支持「单产品单地域」的多 action 调用，不同产品不通过地域的 endpoint 不同，并发调用没办法复用 HTTP 层连接，没有太大的加速效果，
 * 这种情况直接通过前端 `Promise.all`。
 */


function createMultiApi(fetcherPost, type) {
  var url = getApiUrl(type);
  return function (product, actions) {
    return fetcherPost((0, _composeApiUrl.default)(url, product, actions.map(function (v) {
      return v.action;
    })), {
      product: product,
      actions: JSON.stringify(actions)
    });
  };
}