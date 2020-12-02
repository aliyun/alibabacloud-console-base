import { EDialogMode } from '../const';
import buildPropsForPromise from '../util/build-props-for-promise';
import openIndirect from './open-indirect';

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
  return openIndirect(contentOrProps).promise;
};

export default open;
/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */

export var slide = function slide(contentOrProps) {
  return open(buildPropsForPromise(contentOrProps, {
    mode: EDialogMode.SLIDE
  }, {
    title: ' ' // force to have one

  }));
};
/**
 * open 的快捷方式：以抽屉模式打开一个 Dialog
 */

export var slideUp = function slideUp(contentOrProps) {
  return open(buildPropsForPromise(contentOrProps, {
    mode: EDialogMode.SLIDE_UP
  }));
};