"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EButtonPreset = exports.EButtonThemeColor = exports.EButtonThemeColorBg = exports.EButtonThemeColorBd = exports.EButtonFontSize = exports.EButtonSize = void 0;
// 预设大小
var EButtonSize; // 预设文字大小

exports.EButtonSize = EButtonSize;

(function (EButtonSize) {
  EButtonSize["NONE"] = "none";
  EButtonSize["XS"] = "xs";
  EButtonSize["S"] = "s";
  EButtonSize["M"] = "m";
  EButtonSize["L"] = "l";
  EButtonSize["XL"] = "xl";
})(EButtonSize || (exports.EButtonSize = EButtonSize = {}));

var EButtonFontSize; // 预设边框色

exports.EButtonFontSize = EButtonFontSize;

(function (EButtonFontSize) {
  EButtonFontSize["NONE"] = "none";
  EButtonFontSize["XS"] = "xs";
  EButtonFontSize["S"] = "s";
  EButtonFontSize["M"] = "m";
  EButtonFontSize["L"] = "l";
  EButtonFontSize["XL"] = "xl";
})(EButtonFontSize || (exports.EButtonFontSize = EButtonFontSize = {}));

var EButtonThemeColorBd; // 预设背景色

exports.EButtonThemeColorBd = EButtonThemeColorBd;

(function (EButtonThemeColorBd) {
  EButtonThemeColorBd["TRANSPARENT"] = "transparent";
  EButtonThemeColorBd["GRAY_ALPHA"] = "gray:alpha";
  EButtonThemeColorBd["GRAY_ALPHA_SHADE"] = "gray:alpha:shade";
  EButtonThemeColorBd["GRAY"] = "gray";
  EButtonThemeColorBd["SHADE"] = "shade";
  EButtonThemeColorBd["BRAND"] = "brand";
  EButtonThemeColorBd["PRIMARY"] = "primary";
  EButtonThemeColorBd["PRIMARY_SHADE"] = "primary:shade";
})(EButtonThemeColorBd || (exports.EButtonThemeColorBd = EButtonThemeColorBd = {}));

var EButtonThemeColorBg; // 预设文字色

exports.EButtonThemeColorBg = EButtonThemeColorBg;

(function (EButtonThemeColorBg) {
  EButtonThemeColorBg["NONE"] = "none";
  EButtonThemeColorBg["LIGHTER"] = "lighter";
  EButtonThemeColorBg["LIGHT"] = "light";
  EButtonThemeColorBg["NORMAL"] = "normal";
  EButtonThemeColorBg["DARK"] = "dark";
  EButtonThemeColorBg["DARKER"] = "darker";
  EButtonThemeColorBg["WHITE"] = "white";
  EButtonThemeColorBg["BRAND"] = "brand";
  EButtonThemeColorBg["BRAND_LIGHT"] = "brand:light";
  EButtonThemeColorBg["PRIMARY"] = "primary";
  EButtonThemeColorBg["PRIMARY_SHADE"] = "primary:shade";
})(EButtonThemeColorBg || (exports.EButtonThemeColorBg = EButtonThemeColorBg = {}));

var EButtonThemeColor;
exports.EButtonThemeColor = EButtonThemeColor;

(function (EButtonThemeColor) {
  EButtonThemeColor["NONE"] = "none";
  EButtonThemeColor["INHERIT"] = "inherit";
  EButtonThemeColor["BLACK"] = "black";
  EButtonThemeColor["NORMAL"] = "normal";
  EButtonThemeColor["GRAY"] = "gray";
  EButtonThemeColor["WHITE"] = "white";
  EButtonThemeColor["LINK"] = "link";
  EButtonThemeColor["LINK_GRAY"] = "link_gray";
  EButtonThemeColor["BRAND"] = "brand";
  EButtonThemeColor["PRIMARY"] = "primary";
  EButtonThemeColor["PRIMARY_SHADE"] = "primary:shade";
})(EButtonThemeColor || (exports.EButtonThemeColor = EButtonThemeColor = {}));

var EButtonPreset;
exports.EButtonPreset = EButtonPreset;

(function (EButtonPreset) {
  EButtonPreset["PRIMARY"] = "primary";
  EButtonPreset["SECONDARY"] = "secondary";
  EButtonPreset["THIRDLY"] = "thirdly";
  EButtonPreset["BRAND"] = "brand";
  EButtonPreset["BRAND_SECONDARY"] = "brand:secondary";
  EButtonPreset["MENU"] = "menu";
  EButtonPreset["MENU_ACTIVE"] = "menu:active";
  EButtonPreset["TEXT"] = "text";
  EButtonPreset["TEXT_LINK"] = "text_link";
  EButtonPreset["LINK"] = "link";
})(EButtonPreset || (exports.EButtonPreset = EButtonPreset = {}));