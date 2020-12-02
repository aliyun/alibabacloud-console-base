"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = openIndirect;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _noop2 = _interopRequireDefault(require("lodash/noop"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _buildPropsForPromise = _interopRequireDefault(require("../util/build-props-for-promise"));

var _rcContainer = _interopRequireDefault(require("../rc-container"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * 所有 Promise 化的 dialog 的基础。
 * 
 * 一般来说你不需要用到这个方法，当希望外部代码可以在 Dialog 生成之后对 Dialog 进行重新渲染（主要是渲染内容），可以用它。
 * 返回一个对象，该对象包含 `renderUpdate` 和 `promise`，你可以利用 `renderUpdate` 对 Dialog 进行重新渲染，需要注意的是，
 * 你必须在 promise 的 `then` 里关注 Dialog 是否被关闭。
 * 这种情况下，这个 `promise` 一般不会被直接返回使用，而是作为一系列 Promise 对象的触发器。
 * 
 * @example
 * 
 * ```typescript
 * interface IQueueItem {
 *   resolve(result: any): void;
 *   reject(err: Error): void;
 * }
 * 
 * const queue: IQueueItem[] = [];
 * let soloDialogResult = null;
 * 
 * ...
 * 
 * const somePromise: Promise<void> = new Promise((resolve, reject) => {
 *   queue.push({
 *     resolve,
 *     reject
 *   });
 * });
 * 
 * if (soloDialogResult) { // 保证关闭之前只能调用一次
 *   // do something ...
 *   
 *   return somePromise;
 * }
 * 
 * soloDialogResult = open(true, props);
 *
 * soloDialogResult.promise.then(result => {
 *   queue.forEach(v => v.resolve(result);
 * }, err => {
 *   queue.forEach(v => v.reject(err);
 * }).then(() => {
 *   queue.length = 0;
 *   
 *   soloDialogResult = null;
 * });
 * 
 * return somePromise;
 * ```
 */
function openIndirect(contentOrProps) {
  var dialogProps = (0, _buildPropsForPromise.default)(contentOrProps);
  var holder = document.createElement('div'); // 只是一个 gateway 真实的 Dialog 并不会被渲染到它里边

  var _close = _noop2.default;
  document.body.appendChild(holder);

  function renderDialog(props) {
    (0, _reactDom.render)( /*#__PURE__*/_react.default.createElement(_rcContainer.default, props), holder);
  }

  function renderUpdate(updatedProps) {
    if (!updatedProps || !dialogProps) {
      return;
    } // 不可有以下新属性进行覆盖


    delete updatedProps.onClose;
    dialogProps = _objectSpread(_objectSpread({}, dialogProps), updatedProps);
    renderDialog(dialogProps);
  }

  var promise = new Promise(function (resolve, reject) {
    /**
     * Dialog 被关闭是会执行到此回调，这里会将 Promise 进行 resolve 或 reject，同时做一系列的清理动作
     */
    _close = function close(result, rejected) {
      if (!holder || !holder.parentElement) {
        return;
      }

      (0, _reactDom.unmountComponentAtNode)(holder);
      holder.parentElement.removeChild(holder);

      if (rejected) {
        reject(result);
      } else {
        resolve(result);
      } // 防止内存泄漏


      dialogProps = null;
      holder = null;
      _close = null;
    };

    dialogProps.onClose = _close;
    renderDialog(dialogProps);
  });
  return {
    renderUpdate: renderUpdate,
    close: _close,
    promise: promise
  };
}