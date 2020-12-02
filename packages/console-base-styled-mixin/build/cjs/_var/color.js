"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FILL_DARKER = exports.FILL_DARK = exports.FILL = exports.FILL_LIGHT = exports.FILL_LIGHTER = exports.LINE_DARK = exports.LINE = exports.LINE_LIGHT = exports.LINK_GRAY = exports.LINK = exports.TEXT_DISABLED = exports.TEXT_CAPTION = exports.TEXT_SECONDARY = exports.TEXT_PRIMARY = exports.TEXT_TITLE = exports.TEXT_POSITIVE = exports.TEXT_INFO = exports.TEXT_EMPHASIS = exports.TEXT_WARN = exports.TEXT_ERROR = exports.HELP_DISABLED = exports.HELP_LIGHT = exports.HELP_DARK = exports.HELP = exports.INFO_DISABLED = exports.INFO_LIGHT = exports.INFO_DARK = exports.INFO = exports.ERROR_DISABLED = exports.ERROR_LIGHT = exports.ERROR_DARK = exports.ERROR = exports.WARN_DISABLED = exports.WARN_LIGHT = exports.WARN_DARK = exports.WARN = exports.SUCCESS_DISABLED = exports.SUCCESS_LIGHT = exports.SUCCESS_DARK = exports.SUCCESS = exports.BRAND_ALIYUN_LIGHT = exports.BRAND_ALIYUN = void 0;
var GREEN = '#1e8e3e';
var ORANGE = '#ffc440';
var RED = '#d93026';
var BLUE = '#0070cc';
var GRAY = '#888'; // 品牌色

var BRAND_ALIYUN = '#ff6a00';
exports.BRAND_ALIYUN = BRAND_ALIYUN;
var BRAND_ALIYUN_LIGHT = '#ff791a'; // --------------------------------------------------------------- //
// 功能色
// * XX 正常文字或背景色
// * XX_DARK - Hover 的文字或背景色
// * XX_LIGHT - 作为浅底色
// * XX_DISABLED - Disabled 状态下的文字或背景色
// --------------------------------------------------------------- //
// 成功（绿）

exports.BRAND_ALIYUN_LIGHT = BRAND_ALIYUN_LIGHT;
var SUCCESS = GREEN;
exports.SUCCESS = SUCCESS;
var SUCCESS_DARK = '#176e30';
exports.SUCCESS_DARK = SUCCESS_DARK;
var SUCCESS_LIGHT = '#edfcf1';
exports.SUCCESS_LIGHT = SUCCESS_LIGHT;
var SUCCESS_DISABLED = '#acdcba'; // 警告（黄）

exports.SUCCESS_DISABLED = SUCCESS_DISABLED;
var WARN = ORANGE;
exports.WARN = WARN;
var WARN_DARK = '#f1a600';
exports.WARN_DARK = WARN_DARK;
var WARN_LIGHT = '#fff7db';
exports.WARN_LIGHT = WARN_LIGHT;
var WARN_DISABLED = '#ffe9ab'; // 错误（红）

exports.WARN_DISABLED = WARN_DISABLED;
var ERROR = RED;
exports.ERROR = ERROR;
var ERROR_DARK = '#b82920';
exports.ERROR_DARK = ERROR_DARK;
var ERROR_LIGHT = '#fcefee';
exports.ERROR_LIGHT = ERROR_LIGHT;
var ERROR_DISABLED = '#ffc4c0'; // 提示（蓝）

exports.ERROR_DISABLED = ERROR_DISABLED;
var INFO = BLUE;
exports.INFO = INFO;
var INFO_DARK = '#005aa5';
exports.INFO_DARK = INFO_DARK;
var INFO_LIGHT = '#ebf4fb';
exports.INFO_LIGHT = INFO_LIGHT;
var INFO_DISABLED = '#a0cbed'; // 帮助（灰）

exports.INFO_DISABLED = INFO_DISABLED;
var HELP = GRAY;
exports.HELP = HELP;
var HELP_DARK = '#333';
exports.HELP_DARK = HELP_DARK;
var HELP_LIGHT = '#f7f7f7';
exports.HELP_LIGHT = HELP_LIGHT;
var HELP_DISABLED = '#c9c9c9'; // --------------------------------------------------------------- //
// 文本色（包括链接）
// --------------------------------------------------------------- //
// 彩色文本

exports.HELP_DISABLED = HELP_DISABLED;
var TEXT_ERROR = RED; // 错误

exports.TEXT_ERROR = TEXT_ERROR;
var TEXT_WARN = ORANGE; // 警告

exports.TEXT_WARN = TEXT_WARN;
var TEXT_EMPHASIS = '#ff6a00'; // 突出说明，如「金额」、「最重要链接」等

exports.TEXT_EMPHASIS = TEXT_EMPHASIS;
var TEXT_INFO = BLUE; // 重要提示

exports.TEXT_INFO = TEXT_INFO;
var TEXT_POSITIVE = GREEN; // 积极和正面引导的文本，如「验证通过」、「已支付」等
// 无色文本

exports.TEXT_POSITIVE = TEXT_POSITIVE;
var TEXT_TITLE = '#111'; // 标题

exports.TEXT_TITLE = TEXT_TITLE;
var TEXT_PRIMARY = '#333'; // 主要文字

exports.TEXT_PRIMARY = TEXT_PRIMARY;
var TEXT_SECONDARY = '#555'; // 次要文字

exports.TEXT_SECONDARY = TEXT_SECONDARY;
var TEXT_CAPTION = '#888'; // 说明文字

exports.TEXT_CAPTION = TEXT_CAPTION;
var TEXT_DISABLED = '#c1c1c1'; // Disabled 状态文字
// 链接

exports.TEXT_DISABLED = TEXT_DISABLED;
var LINK = '#0070cc';
exports.LINK = LINK;
var LINK_GRAY = '#333'; // 次要链接
// --------------------------------------------------------------- //
// 线条色 - 收敛成两个
// --------------------------------------------------------------- //

exports.LINK_GRAY = LINK_GRAY;
var LINE_LIGHT = '#efefef'; // 浅色分割线

exports.LINE_LIGHT = LINE_LIGHT;
var LINE = '#dedede'; // 默认分割线、组件边框

exports.LINE = LINE;
var LINE_DARK = '#737373'; // 深色分割线、组件边框 Hover 效果
// --------------------------------------------------------------- //
// 填充色（浅灰色）
// --------------------------------------------------------------- //

exports.LINE_DARK = LINE_DARK;
var FILL_LIGHTER = '#fafafa';
exports.FILL_LIGHTER = FILL_LIGHTER;
var FILL_LIGHT = '#f7f7f7';
exports.FILL_LIGHT = FILL_LIGHT;
var FILL = '#f5f5f5';
exports.FILL = FILL;
var FILL_DARK = '#ebebeb';
exports.FILL_DARK = FILL_DARK;
var FILL_DARKER = '#dedede';
exports.FILL_DARKER = FILL_DARKER;