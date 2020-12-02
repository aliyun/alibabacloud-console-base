"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = convertError;

var _fetcherFetch = require("@alicloud/fetcher-fetch");

var _fetcherJsonp = require("@alicloud/fetcher-jsonp");

var _const = require("../../const");

/**
 * 将错误类型转成 IFetcherError，填入 config，并把 @alicloud/fetcher-fetch 和 @alicloud/fetcher-jsonp 的错误 name 转成 @alicloud/fetcher 的
 * 
 * 曾经利用过 Error 的继承，但效果不好.. 有兴趣可以看看
 *   如何自定义错误 - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
 * 
 * 其中一个问题是没有办法（或者我不知道怎么弄）给自定义的 Error 类添加 toJSON 方法（写在 prototype 里无法继承，只能写在实例上）
 * 所以最终选择了工厂模式
 */
function convertError(err, config) {
  var error = err;
  error.config = error.config || config; // 有了的话，不覆盖

  switch (error.name) {
    case _fetcherFetch.EFetchError.NETWORK:
    case _fetcherJsonp.EJsonpError.NETWORK:
      error.name = _const.ERROR_NETWORK;
      break;

    case _fetcherFetch.EFetchError.TIMEOUT:
    case _fetcherJsonp.EJsonpError.TIMEOUT:
      error.name = _const.ERROR_TIMEOUT;
      break;

    default:
      break;
  }

  return error;
}