import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import { ERROR_RESPONSE_STATUS, ERROR_RESPONSE_PARSE } from '../const';
import normalizeHeaderKey from './normalize-header-key';
/**
 * 普通 error
 */

function createError(name, message) {
  var error = new Error(message);
  error.name = name;
  return error;
}

export function convertResponseFromFetch(_x) {
  return _convertResponseFromFetch.apply(this, arguments);
}
/**
 * 将 JSONP 的返回转成通用的 FetcherResponse
 * 
 * 由于 JSONP 的实现原理，它没有 headers，且一定是成功的（因为如果失败或返回无效的话是无法走到回调的）
 */

function _convertResponseFromFetch() {
  _convertResponseFromFetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(response) {
    var _response$headers;

    var headers;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            headers = {};
            (_response$headers = response.headers) === null || _response$headers === void 0 ? void 0 : _response$headers.forEach(function (v, k) {
              headers[normalizeHeaderKey(k)] = v;
            });

            if (response.ok) {
              _context.next = 4;
              break;
            }

            throw createError(ERROR_RESPONSE_STATUS, "response status ".concat(response.status));

          case 4:
            _context.prev = 4;
            _context.t0 = response.url;
            _context.t1 = headers;
            _context.next = 9;
            return response.json();

          case 9:
            _context.t2 = _context.sent;
            return _context.abrupt("return", {
              url: _context.t0,
              headers: _context.t1,
              data: _context.t2
            });

          case 13:
            _context.prev = 13;
            _context.t3 = _context["catch"](4);
            throw createError(ERROR_RESPONSE_PARSE, _context.t3 === null || _context.t3 === void 0 ? void 0 : _context.t3.message);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 13]]);
  }));
  return _convertResponseFromFetch.apply(this, arguments);
}

export function convertResponseFromJsonp(_x2) {
  return _convertResponseFromJsonp.apply(this, arguments);
}

function _convertResponseFromJsonp() {
  _convertResponseFromJsonp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(response) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = response.url;
            _context2.t1 = {};
            _context2.next = 4;
            return response.json();

          case 4:
            _context2.t2 = _context2.sent;
            return _context2.abrupt("return", {
              url: _context2.t0,
              headers: _context2.t1,
              data: _context2.t2
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _convertResponseFromJsonp.apply(this, arguments);
}