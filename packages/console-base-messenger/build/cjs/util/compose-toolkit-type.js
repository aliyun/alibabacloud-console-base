"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = composeToolkitType;
exports.composeToolkitTypeWithId = composeToolkitTypeWithId;

/**
 * 全局事件
 */
function composeToolkitType(type) {
  return "@ali/widget-console-base-toolkit/".concat(type); // 不要随意改它，因为这个包可能会被别人引用
}
/**
 * 跟工具相关的事件名称
 */


function composeToolkitTypeWithId(type, toolId) {
  return "".concat(composeToolkitType(type), "@").concat(toolId);
}