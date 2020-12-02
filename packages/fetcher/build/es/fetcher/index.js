import _regeneratorRuntime from "@babel/runtime/regenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { EErrorSpecial } from '../const';
import fetchX from '../util/fetch-x';
import mergeConfig from '../util/merge-config';
import convertError from '../util/error/convert';
import requestInterceptorFirst from '../interceptors/request/first';
import requestInterceptorLast from '../interceptors/request/last';

function parseInterceptorQueueItemForRequest(args) {
  var item;

  if (typeof args[0] === 'number') {
    item = {
      priority: args[0],
      fulfilledFn: args[1]
    };
  } else {
    item = {
      fulfilledFn: args[0]
    };
  }

  return item;
}

function parseInterceptorQueueItemForResponse(args) {
  var item;

  if (typeof args[0] === 'number') {
    item = {
      priority: args[0],
      fulfilledFn: args[1],
      rejectedFn: args[2]
    };
  } else {
    item = {
      fulfilledFn: args[0],
      rejectedFn: args[1]
    };
  }

  return item;
}

function queueInterceptor(interceptorQueue, item) {
  interceptorQueue.push(item);
  return function () {
    var index = interceptorQueue.indexOf(item);

    if (index >= 0) {
      interceptorQueue.splice(index, 1);
    }
  };
}
/**
 * 对拦截器进行排序，默认的 priority 是 10，如果想靠前，指定 priority 小于 10，大于等于 10 将靠后
 */


function filterAndSort(unsorted) {
  return unsorted.filter(function (v) {
    return v && (v.fulfilledFn || v.rejectedFn);
  }).sort(function (_ref, _ref2) {
    var _ref$priority = _ref.priority,
        pri1 = _ref$priority === void 0 ? 10 : _ref$priority;
    var _ref2$priority = _ref2.priority,
        pri2 = _ref2$priority === void 0 ? 10 : _ref2$priority;
    return pri1 - pri2;
  });
}
/**
 * 一个允许添加 request 和 response 拦截器的 Fetcher 类，有些类似 axios，但有所不同：
 * 
 * 1. 拦截方法更直接：`interceptRequest/interceptResponse`，而不是 `axios.interceptors.request|response.use()`
 * 2. 解除拦截只需要记住以上两个方法返回的无参方法即可（在 react 的 useEffect hooks 下特别方便），而不是 `axios.interceptors.request|response.eject()`
 * 3. `interceptRequest` 仅接受一个方法，而 `interceptResponse` 可以接受两个（跟 axios 类似）
 * 4. `interceptRequest` 的顺序和最终调用的顺序一致，而 axios 的顺序是倒着来的
 * 5. `interceptRequest` 如果抛错，不会触发真实的 API 请求（axios 一样），也不会触发任何 response interceptors（axios 会触发）
 * 6. `interceptRequest` 可以不必返回全的 config，这里会自动 merge，axios 要求返回全的
 */


var Fetcher = /*#__PURE__*/function () {
  /**
   * 传递给 interceptor，这样在 interceptor 内部有需要的话可以通过它加上 config 进行重新请求
   */
  function Fetcher(_config) {
    var _this = this;

    _classCallCheck(this, Fetcher);

    this._interceptorRequestSealed = false;
    this._interceptorResponseSealed = false;
    this._interceptorQueueForRequest = [];
    this._interceptorQueueForResponse = [];

    this._handleRequest = function (config) {
      return _this.request(config);
    };

    this._defaultConfig = _objectSpread({}, _config);
  }
  /**
   * 获取此次调用需要用到的所有请求拦截器，且拦截器的顺序按指定顺序
   */


  _createClass(Fetcher, [{
    key: "_getInterceptorsForRequest",
    value: function _getInterceptorsForRequest(config) {
      var unsorted = _toConsumableArray(this._interceptorQueueForRequest);

      if (config.additionalInterceptorsForRequest) {
        config.additionalInterceptorsForRequest.forEach(function (v) {
          return unsorted.push(parseInterceptorQueueItemForRequest(v));
        });
      }

      return [requestInterceptorFirst].concat(_toConsumableArray(filterAndSort(unsorted).map(function (v) {
        return v.fulfilledFn;
      })), [requestInterceptorLast]);
    }
  }, {
    key: "_getInterceptorsForResponse",
    value: function _getInterceptorsForResponse(config) {
      var unsorted = _toConsumableArray(this._interceptorQueueForResponse);

      if (config.additionalInterceptorsForResponse) {
        config.additionalInterceptorsForResponse.forEach(function (v) {
          return unsorted.push(parseInterceptorQueueItemForResponse(v));
        });
      }

      return filterAndSort(unsorted).map(function (v) {
        return [v.fulfilledFn, v.rejectedFn];
      });
    }
    /**
     * 逐个调用排序好的请求拦截器，每个拦截器可以返回部分期望修改的 config（也可以不返回任何东西），最终得到的是合并完的 config 对象
     */

  }, {
    key: "_invokeInterceptorsForRequest",
    value: function _invokeInterceptorsForRequest(config) {
      var _this2 = this;

      var promise = Promise.resolve(config);

      this._getInterceptorsForRequest(config).forEach(function (fn) {
        promise = promise.then(function (configLastMerged) {
          // 上一次 merge 完的结果
          // 利用前置 Promise，不管 fn 返回是否 Promise 都可以在一个运行空间获取到 configLastMerged 和 configToMerge
          // configToMerge 是 fn 计算后得到的结果，可能为空；也可能是 Promise
          return Promise.resolve().then(function () {
            return fn(configLastMerged, _this2._handleRequest);
          }).then(function (configToMerge) {
            return mergeConfig(configLastMerged, configToMerge);
          });
        });
      });

      return promise;
    }
    /**
     * 对执行请求返回得到的结果（正确返回或错误）进行后期处理
     */

  }, {
    key: "_invokeInterceptorsForResponse",
    value: function () {
      var _invokeInterceptorsForResponse2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(config, fetcherResponse, error) {
        var _this3 = this;

        var promise;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (fetcherResponse) {
                  promise = Promise.resolve(fetcherResponse.data);
                } else {
                  promise = Promise.reject(error);
                } // 逐个调用响应拦截器，如果有 success 则其返回将作为结果传递给下一个拦截器


                this._getInterceptorsForResponse(config).forEach(function (_ref3) {
                  var _ref4 = _slicedToArray(_ref3, 2),
                      fulfilledFn = _ref4[0],
                      rejectedFn = _ref4[1];

                  promise = promise.then(function (result) {
                    if (fulfilledFn) {
                      return fulfilledFn(result, config, fetcherResponse, _this3._handleRequest);
                    }

                    return result;
                  }, function (err) {
                    /**
                     * 如果继续 throw 则 promise 继续 reject，如果不 throw 则 promise 将 resolve
                     * 所以这里提供了「纠错」和「调整错误」两个功能
                     */
                    if (rejectedFn) {
                      return rejectedFn(err, config, fetcherResponse, _this3._handleRequest);
                    }

                    throw err;
                  }).catch(function (err2) {
                    if (!err2.config) {
                      err2.config = config;
                    }

                    if (fetcherResponse !== null && fetcherResponse !== void 0 && fetcherResponse.data && !err2.responseData) {
                      err2.responseData = fetcherResponse.data;
                    }

                    throw err2;
                  });
                });

                return _context.abrupt("return", promise);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _invokeInterceptorsForResponse(_x, _x2, _x3) {
        return _invokeInterceptorsForResponse2.apply(this, arguments);
      }

      return _invokeInterceptorsForResponse;
    }()
    /**
     * 发送请求：前置请求拦截器 → 网络请求 → 后置响应拦截器
     */

  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(config) {
        var finalConfig, fetcherResponse, error;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // 1. 前置请求拦截器
                finalConfig = mergeConfig(this._defaultConfig, config);
                _context2.prev = 1;
                _context2.next = 4;
                return this._invokeInterceptorsForRequest(finalConfig);

              case 4:
                finalConfig = _context2.sent;
                _context2.next = 14;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);

                if (_context2.t0) {
                  _context2.next = 11;
                  break;
                }

                throw _context2.t0;

              case 11:
                if (!(_context2.t0.name === EErrorSpecial.SKIP_NETWORK)) {
                  _context2.next = 13;
                  break;
                }

                return _context2.abrupt("return", _context2.t0.result);

              case 13:
                throw convertError(_context2.t0, finalConfig);

              case 14:
                _context2.prev = 14;
                _context2.next = 17;
                return fetchX(finalConfig);

              case 17:
                fetcherResponse = _context2.sent;
                _context2.next = 23;
                break;

              case 20:
                _context2.prev = 20;
                _context2.t1 = _context2["catch"](14);
                error = convertError(_context2.t1, finalConfig);

              case 23:
                return _context2.abrupt("return", this._invokeInterceptorsForResponse(finalConfig, fetcherResponse, error));

              case 24:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7], [14, 20]]);
      }));

      function request(_x4) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "interceptRequest",

    /**
     * 添加「预设」请求拦截器，返回解除拦截的无参方法
     */
    value: function interceptRequest() {
      if (this._interceptorRequestSealed) {
        throw new Error('[Fetcher#interceptRequest] Cannot add more interceptors. You need to unseal it first.');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return queueInterceptor(this._interceptorQueueForRequest, parseInterceptorQueueItemForRequest(args));
    }
  }, {
    key: "interceptResponse",

    /**
     * 添加「预设」响应拦截器，返回解除拦截的无参方法
     */
    value: function interceptResponse() {
      if (this._interceptorResponseSealed) {
        throw new Error('[Fetcher#interceptResponse] Cannot add more interceptors. You need to unseal it first.');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return queueInterceptor(this._interceptorQueueForResponse, parseInterceptorQueueItemForResponse(args));
    }
    /**
     * 对于「开箱即用」的 fetcher，因为它是会被复用的单例，所以一般不希望它的拦截器被扩展，如果还是坚持要扩展，需要手动解除
     */

  }, {
    key: "sealInterceptors",
    value: function sealInterceptors() {
      var requestSealed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var responseSealed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this._interceptorRequestSealed = requestSealed;
      this._interceptorResponseSealed = responseSealed;
    }
  }]);

  return Fetcher;
}();

export { Fetcher as default };