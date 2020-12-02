"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectGlobalFontFace = injectGlobalFontFace;
exports.base = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n  &:before {\n    display: inline-block;\n    line-height: 1;\n    font-size: inherit;\n    font-weight: 200;\n    font-style: normal;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    vertical-align: baseline;\n    text-rendering: auto;\n    transition: all 200ms ease;\n    -webkit-text-stroke-width: 0.2px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * 在 header 上注入 font face 全局样式，并返回 font-family 名字
 * IOS4 not supported
 */
function injectGlobalFontFace(_ref) {
  var projectId = _ref.projectId,
      hash = _ref.hash,
      dataUrl = _ref.dataUrl;
  var fontFamily = "font_".concat(projectId, "_").concat(hash); // iconfont.cn 产出的路径，我们拿它来做 font-family 名字

  var existedStyleElement = document.getElementById(fontFamily);

  if (existedStyleElement && existedStyleElement.tagName === 'SCRIPT') {
    // 避免多次注入
    return fontFamily;
  }

  var iconfontUrl = "//at.alicdn.com/t/".concat(fontFamily);
  var fontFace = "@font-face {\n  font-family: ".concat(fontFamily, ";\n  src: url(").concat(iconfontUrl, ".eot);\n  src: url(").concat(iconfontUrl, ".eot#iefix) format('embedded-opentype'),\n    url(").concat(dataUrl || "".concat(iconfontUrl, ".woff2"), ") format('woff2'),\n    url(").concat(iconfontUrl, ".woff) format('woff'),\n    url(").concat(iconfontUrl, ".ttf) format('truetype');\n}"); // styled-component 提供了 createGlobalStyle，取消了 injectGlobal，但后者是这边想要的...

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.id = fontFamily;
  head.appendChild(style);

  if (style.styleSheet) {
    // This is required for IE8 and below
    style.styleSheet.cssText = fontFace;
  } else {
    style.appendChild(document.createTextNode(fontFace));
  }

  return fontFamily;
}

var base = (0, _styledComponents.css)(_templateObject());
exports.base = base;