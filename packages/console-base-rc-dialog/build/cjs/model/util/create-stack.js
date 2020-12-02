"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStack;

var _map2 = _interopRequireDefault(require("lodash/map"));

var _forEach2 = _interopRequireDefault(require("lodash/forEach"));

function createStack() {
  var STACK = {};
  /**
   * 放入一个元素，返回变更后的长度，如果 id 已存在，则替换它并返回 -1，否则返回变更后的个数（> 0）。
   */

  function put(id, o) {
    var existed = !!STACK[id];
    STACK[id] = o;

    if (existed) {
      return -1;
    }

    return (0, _map2.default)(STACK).length;
  }
  /**
   * 移除一个元素，若 id 对应的元素不存在，返回 -1，否则返回变更后的个数（>= 0）
   */


  function remove(id) {
    var existed = !!STACK[id];

    if (!existed) {
      return -1;
    }

    delete STACK[id];
    return (0, _map2.default)(STACK).length;
  }
  /**
   * 遍历方法
   */


  function each(fn) {
    (0, _forEach2.default)(STACK, fn);
  }
  /**
   * 获取元素
   */


  function get(k) {
    return STACK[k];
  }

  return {
    put: put,
    remove: remove,
    get: get,
    each: each
  };
}