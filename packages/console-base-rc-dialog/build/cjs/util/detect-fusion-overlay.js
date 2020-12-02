"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detectFusionOverlay;

var _some2 = _interopRequireDefault(require("lodash/some"));

/**
 * 判断是否有 Fusion 的其他 Overlay 正打开着
 * 这个方法实现的有些..一言难尽，因为没有用 Fusion 的 Overlay 来封装 Dialog，但又要夹缝求生。
 * Fusion 有如下组件会用到 Overlay
 * 
 * - Select
 * - Balloon
 * - Message 的 toast 形式
 * - Dialog（Fusion 自己的）
 * 
 * 这些组件都会用 Overlay 包裹自己，我们只能往里边看它具体是啥。
 */
function detectFusionOverlay() {
  var fusionOverlaysOpened = document.querySelectorAll('.next-overlay-wrapper.opened'); // querySelectorAll 只有 IE6-7 和 FF2-3 不支持

  return (0, _some2.default)(fusionOverlaysOpened, function (v) {
    return !v.querySelector('.next-message');
  }); // 忽略 toast message
}