import _regeneratorRuntime from "@babel/runtime/regenerator";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import fetch from '@alicloud/fetcher-fetch';
import jsonp from '@alicloud/fetcher-jsonp';
import serializeParams from './serialize-params';
import buildUrl from './build-url';
import canHaveBody from './can-have-body';
import { convertResponseFromFetch, convertResponseFromJsonp } from './convert-response';
/**
 * 将 fetch 和 jsonp 整合在一起（即当 method 为 'JSONP' 的时候会发送 JSONP 请求）
 */

export default function fetchX(_x) {
  return _fetchX.apply(this, arguments);
}

function _fetchX() {
  _fetchX = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(config) {
    var _config$url, url, _config$method, method0, urlBase, _config$urlCacheBusti, urlCacheBusting, params, body, _config$paramsSeriali, paramsSerializeOptions, _config$bodySerialize, bodySerializeOptions, options, method, fetchUrl, fetchOptions;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _config$url = config.url, url = _config$url === void 0 ? '' : _config$url, _config$method = config.method, method0 = _config$method === void 0 ? 'GET' : _config$method, urlBase = config.urlBase, _config$urlCacheBusti = config.urlCacheBusting, urlCacheBusting = _config$urlCacheBusti === void 0 ? /^(GET|JSONP)$/i.test(method0) : _config$urlCacheBusti, params = config.params, body = config.body, _config$paramsSeriali = config.paramsSerializeOptions, paramsSerializeOptions = _config$paramsSeriali === void 0 ? {
              indices: false
            } : _config$paramsSeriali, _config$bodySerialize = config.bodySerializeOptions, bodySerializeOptions = _config$bodySerialize === void 0 ? {
              arrayFormat: 'repeat'
            } : _config$bodySerialize, options = _objectWithoutProperties(config, ["url", "method", "urlBase", "urlCacheBusting", "params", "body", "paramsSerializeOptions", "bodySerializeOptions"]);
            method = method0.toUpperCase(); // 转成大写

            fetchUrl = buildUrl(url, {
              urlBase: urlBase,
              urlCacheBusting: urlCacheBusting,
              params: params,
              serializeOptions: paramsSerializeOptions
            });

            if (!(method === 'JSONP')) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", jsonp(fetchUrl, options).then(function (response) {
              return convertResponseFromJsonp(response);
            }));

          case 5:
            fetchOptions = _objectSpread({
              method: method
            }, options); // 调用 fetch 的时候，如果对 GET/HEAD 请求传入 body，哪怕只是一个空字符串，
            // 浏览器直接报错「HEAD or GET Request cannot have a body.」

            if (canHaveBody(method) && body) {
              fetchOptions.body = serializeParams(body, bodySerializeOptions);
            }

            return _context.abrupt("return", fetch(fetchUrl, fetchOptions).then(function (response) {
              return convertResponseFromFetch(response);
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchX.apply(this, arguments);
}