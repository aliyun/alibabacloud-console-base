"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SLIDE_FOOTER_HEIGHT = exports.SLIDE_HEADER_HEIGHT = exports.HEADER_LINE_HEIGHT = exports.HEADER_FONT_SIZE = exports.SIZE_X = exports.PADDING = exports.BACKDROP_BGC = exports.WIDTH_SLIDE = exports.WIDTH_NORMAL = void 0;

/* -- Dialog 设置 -- */
// 普通 dialog 的宽度梯度
var WIDTH_NORMAL = {
  XS: 400,
  S: 480,
  M: 560,
  L: 640,
  XL: 720,
  XXL: 900
}; // 侧拉 dialog 的宽度梯度

exports.WIDTH_NORMAL = WIDTH_NORMAL;
var WIDTH_SLIDE = {
  XS: 480,
  S: 560,
  M: 640,
  L: 800,
  XL: 960,
  XXL: 1200
};
exports.WIDTH_SLIDE = WIDTH_SLIDE;
var BACKDROP_BGC = 'rgba(0, 0, 0, 0.2)';
exports.BACKDROP_BGC = BACKDROP_BGC;
var PADDING = 24; // 内间距

exports.PADDING = PADDING;
var SIZE_X = 16;
exports.SIZE_X = SIZE_X;
var HEADER_FONT_SIZE = 18;
exports.HEADER_FONT_SIZE = HEADER_FONT_SIZE;
var HEADER_LINE_HEIGHT = 28;
exports.HEADER_LINE_HEIGHT = HEADER_LINE_HEIGHT;
var SLIDE_HEADER_HEIGHT = 60;
exports.SLIDE_HEADER_HEIGHT = SLIDE_HEADER_HEIGHT;
var SLIDE_FOOTER_HEIGHT = 64;
exports.SLIDE_FOOTER_HEIGHT = SLIDE_FOOTER_HEIGHT;