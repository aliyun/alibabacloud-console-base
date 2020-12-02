"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createApi;

var _const = require("../const");

var _composeApiUrl = _interopRequireDefault(require("./compose-api-url"));

function getApiUrl(type) {
  switch (type) {
    case _const.ETypeApi.OPEN:
      return '/data/api.json';

    case _const.ETypeApi.INNER:
      return '/data/innerApi.json';

    case _const.ETypeApi.CONTAINER:
      return '/data/call.json';

    default:
      throw new Error("OneAPI type ".concat(type, " not supported!"));
  }
}

function createApi(fetcherPost, type) {
  var url = getApiUrl(type);
  return function (product, action, params) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return fetcherPost(options, (0, _composeApiUrl.default)(url, product, action), {
      product: product,
      action: action,
      params: params ? JSON.stringify(params) : undefined
    });
  };
}