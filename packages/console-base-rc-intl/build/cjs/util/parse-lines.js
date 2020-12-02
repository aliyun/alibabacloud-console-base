"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseLines;

var _determinLineType = _interopRequireDefault(require("./determin-line-type"));

var _createLineGroup = _interopRequireDefault(require("./create-line-group"));

/**
 * 将纯文本数组转换成渲染所需的数组
 */
function parseLines(arr) {
  var results = [];
  var lastIndex = 0;
  var lastType = (0, _determinLineType.default)(arr[0]);
  arr.forEach(function (v, i) {
    var typeOfV = (0, _determinLineType.default)(v);

    if (typeOfV !== lastType) {
      // 发现新的类型，则之前的自成一组
      results.push((0, _createLineGroup.default)(lastType, arr.slice(lastIndex, i)));
      lastType = typeOfV;
      lastIndex = i;
    }
  });
  results.push((0, _createLineGroup.default)(lastType, arr.slice(lastIndex, arr.length))); // 最末一组

  return results;
}