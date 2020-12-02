"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getPreset;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _const = require("../const");

var _THEME_PACK, _THEME_PACK_DISABLED, _APPEARANCE_PACK;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var THEME_DISABLED_NO_BG = {
  themeColorBd: _const.EButtonThemeColorBd.TRANSPARENT,
  themeColor: _const.EButtonThemeColor.GRAY
};

var THEME_DISABLED = _objectSpread(_objectSpread({}, THEME_DISABLED_NO_BG), {}, {
  themeColorBg: _const.EButtonThemeColorBg.LIGHT
});

var APPEARANCE_TEXT = {
  size: _const.EButtonSize.NONE
};
/**
 * 菜单按钮：
 * 
 * 1. 左靠
 * 2. block
 * 3. ellipsis
 */

var APPEARANCE_MENU = {
  textAlign: 'left',
  block: true,
  ellipsis: true
};
var THEME_PACK = (_THEME_PACK = {}, (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.PRIMARY, {
  themeColorBd: _const.EButtonThemeColorBd.TRANSPARENT,
  themeColorBdHover: _const.EButtonThemeColorBd.TRANSPARENT,
  themeColorBg: _const.EButtonThemeColorBg.PRIMARY,
  themeColorBgHover: _const.EButtonThemeColorBg.PRIMARY_SHADE,
  themeColor: _const.EButtonThemeColor.WHITE,
  themeColorHover: _const.EButtonThemeColor.WHITE
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.SECONDARY, {
  themeColorBd: _const.EButtonThemeColorBd.GRAY,
  themeColorBdHover: _const.EButtonThemeColorBd.SHADE,
  themeColorBg: _const.EButtonThemeColorBg.LIGHT,
  themeColorBgHover: _const.EButtonThemeColorBg.LIGHTER,
  themeColor: _const.EButtonThemeColor.GRAY,
  themeColorHover: _const.EButtonThemeColor.NORMAL
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.THIRDLY, {
  themeColor: _const.EButtonThemeColor.NORMAL,
  themeColorHover: _const.EButtonThemeColor.BLACK,
  themeColorBgHover: _const.EButtonThemeColorBg.NORMAL
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.BRAND, {
  themeColor: _const.EButtonThemeColor.WHITE,
  themeColorHover: _const.EButtonThemeColor.WHITE,
  themeColorBg: _const.EButtonThemeColorBg.BRAND,
  themeColorBgHover: _const.EButtonThemeColorBg.BRAND_LIGHT
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.BRAND_SECONDARY, {
  themeColorBd: _const.EButtonThemeColorBd.BRAND,
  themeColor: _const.EButtonThemeColor.BRAND,
  themeColorHover: _const.EButtonThemeColor.WHITE,
  themeColorBgHover: _const.EButtonThemeColorBg.BRAND_LIGHT
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.MENU, {
  themeColor: _const.EButtonThemeColor.NORMAL,
  themeColorHover: _const.EButtonThemeColor.BLACK,
  themeColorBg: _const.EButtonThemeColorBg.NONE,
  themeColorBgHover: _const.EButtonThemeColorBg.NORMAL
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.MENU_ACTIVE, {
  themeColor: _const.EButtonThemeColor.NORMAL,
  themeColorHover: _const.EButtonThemeColor.BLACK,
  themeColorBg: _const.EButtonThemeColorBg.NORMAL,
  themeColorBgHover: _const.EButtonThemeColorBg.NORMAL
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.TEXT, {
  themeColor: _const.EButtonThemeColor.NONE,
  themeColorHover: _const.EButtonThemeColor.NONE,
  themeColorBg: _const.EButtonThemeColorBg.NONE,
  themeColorBgHover: _const.EButtonThemeColorBg.NONE
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.TEXT_LINK, {
  themeColor: _const.EButtonThemeColor.NONE,
  themeColorHover: _const.EButtonThemeColor.LINK,
  themeColorBg: _const.EButtonThemeColorBg.NONE,
  themeColorBgHover: _const.EButtonThemeColorBg.NONE
}), (0, _defineProperty2.default)(_THEME_PACK, _const.EButtonPreset.LINK, {
  themeColor: _const.EButtonThemeColor.LINK,
  themeColorHover: _const.EButtonThemeColor.LINK
}), _THEME_PACK);
/**
 * 对于传入 preset 的按钮，如果为 disabled 状态，其样式统一为灰边灰底灰字
 */

var THEME_PACK_DISABLED = (_THEME_PACK_DISABLED = {}, (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.PRIMARY, THEME_DISABLED), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.SECONDARY, THEME_DISABLED), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.THIRDLY, THEME_DISABLED), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.BRAND, THEME_DISABLED), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.BRAND_SECONDARY, THEME_DISABLED), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.MENU, THEME_DISABLED_NO_BG), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.MENU_ACTIVE, THEME_DISABLED), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.TEXT, THEME_DISABLED_NO_BG), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.TEXT_LINK, THEME_DISABLED_NO_BG), (0, _defineProperty2.default)(_THEME_PACK_DISABLED, _const.EButtonPreset.LINK, THEME_DISABLED_NO_BG), _THEME_PACK_DISABLED);
var APPEARANCE_PACK = (_APPEARANCE_PACK = {}, (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.PRIMARY, undefined), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.SECONDARY, undefined), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.THIRDLY, undefined), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.BRAND, undefined), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.BRAND_SECONDARY, undefined), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.MENU, APPEARANCE_MENU), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.MENU_ACTIVE, APPEARANCE_MENU), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.TEXT, APPEARANCE_TEXT), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.TEXT_LINK, APPEARANCE_TEXT), (0, _defineProperty2.default)(_APPEARANCE_PACK, _const.EButtonPreset.LINK, APPEARANCE_TEXT), _APPEARANCE_PACK);

function getPreset(preset, disabled) {
  if (!preset) {
    return null;
  }

  return _objectSpread(_objectSpread({}, APPEARANCE_PACK[preset]), disabled ? THEME_PACK_DISABLED[preset] : THEME_PACK[preset]);
}