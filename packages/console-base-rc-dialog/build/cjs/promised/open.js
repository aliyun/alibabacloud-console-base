"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slideUp = exports.slide = exports.default = void 0;

var _const = require("../const");

var _buildPropsForPromise = _interopRequireDefault(require("../util/build-props-for-promise"));

var _openIndirect = _interopRequireDefault(require("./open-indirect"));

/**
 * 通过方法调用，你无需也不能再利用 onClose 关闭/销毁 Dialog，因为你有更棒的 Promise。
 *
 * @example
 *
 * ```typescript
 * // 只关心内容（没有按钮）
 * open(content).then(...);
 * open(<Content />).then(...);
 *
 * // 各种自定义：标题、内容、按钮...
 * open({
 *   title,
 *   content,
 *   buttons,
 *   ...
 * }).then(...);
 * ```
 */
var open = function open(contentOrProps) {
  return (0, _openIndirect.default)(contentOrProps).promise;
};

var _default = open;
/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */

exports.default = _default;

var slide = function slide(contentOrProps) {
  return open((0, _buildPropsForPromise.default)(contentOrProps, {
    mode: _const.EDialogMode.SLIDE
  }, {
    title: ' ' // force to have one

  }));
};
/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */


exports.slide = slide;

var slideUp = function slideUp(contentOrProps) {
  return open((0, _buildPropsForPromise.default)(contentOrProps, {
    mode: _const.EDialogMode.SLIDE_UP
  }));
};

exports.slideUp = slideUp;