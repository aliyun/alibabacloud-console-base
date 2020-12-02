"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeHtmlProps;

/**
 * 为 HTML 创建 props
 */
function makeHtmlProps(html) {
  return {
    dangerouslySetInnerHTML: {
      __html: html
    }
  };
}