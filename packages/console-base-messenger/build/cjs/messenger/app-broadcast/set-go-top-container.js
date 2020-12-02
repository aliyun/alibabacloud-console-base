"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = setGoTopContainer;

var _const = require("../../const");

var _composeToolkitType = _interopRequireDefault(require("../../util/compose-toolkit-type"));

var _broadcastByApp = require("../../util/broadcast-by-app");

var ATTR_NAME = 'data-console-base-toolkit-go-top';
var index = 0;

function getContainerSelector(container) {
  var _el$tagName;

  if (!container) {
    return '';
  }

  if (container === window || container === document.documentElement || container === document.body) {
    return 'window';
  }

  var el = container;
  var tag = (_el$tagName = el.tagName) === null || _el$tagName === void 0 ? void 0 : _el$tagName.toLowerCase();

  if (!tag) {
    return '';
  }

  var attrValue = el.getAttribute(ATTR_NAME);

  if (!attrValue) {
    index += 1;
    attrValue = "container".concat(index); // 不能只用数字，否则 document.querySelector 会报错「not a valid selector」

    el.setAttribute(ATTR_NAME, attrValue);
  }

  return "".concat(tag, "[").concat(ATTR_NAME, "=").concat(attrValue, "]");
}
/**
 * 设置工具组的「返回顶部」容器
 */


function setGoTopContainer(container) {
  (0, _broadcastByApp.broadcastByApp)((0, _composeToolkitType.default)(_const.EToolkitTypeShort.SET_GO_TOP_CONTAINER), getContainerSelector(container));
}