import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";

var _THEME_PACK, _THEME_PACK_DISABLED, _APPEARANCE_PACK;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { EButtonSize, EButtonThemeColorBd, EButtonThemeColorBg, EButtonThemeColor, EButtonPreset } from '../const';
var THEME_DISABLED_NO_BG = {
  themeColorBd: EButtonThemeColorBd.TRANSPARENT,
  themeColor: EButtonThemeColor.GRAY
};

var THEME_DISABLED = _objectSpread(_objectSpread({}, THEME_DISABLED_NO_BG), {}, {
  themeColorBg: EButtonThemeColorBg.LIGHT
});

var APPEARANCE_TEXT = {
  size: EButtonSize.NONE
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
var THEME_PACK = (_THEME_PACK = {}, _defineProperty(_THEME_PACK, EButtonPreset.PRIMARY, {
  themeColorBd: EButtonThemeColorBd.TRANSPARENT,
  themeColorBdHover: EButtonThemeColorBd.TRANSPARENT,
  themeColorBg: EButtonThemeColorBg.PRIMARY,
  themeColorBgHover: EButtonThemeColorBg.PRIMARY_SHADE,
  themeColor: EButtonThemeColor.WHITE,
  themeColorHover: EButtonThemeColor.WHITE
}), _defineProperty(_THEME_PACK, EButtonPreset.SECONDARY, {
  themeColorBd: EButtonThemeColorBd.GRAY,
  themeColorBdHover: EButtonThemeColorBd.SHADE,
  themeColorBg: EButtonThemeColorBg.LIGHT,
  themeColorBgHover: EButtonThemeColorBg.LIGHTER,
  themeColor: EButtonThemeColor.GRAY,
  themeColorHover: EButtonThemeColor.NORMAL
}), _defineProperty(_THEME_PACK, EButtonPreset.THIRDLY, {
  themeColor: EButtonThemeColor.NORMAL,
  themeColorHover: EButtonThemeColor.BLACK,
  themeColorBgHover: EButtonThemeColorBg.NORMAL
}), _defineProperty(_THEME_PACK, EButtonPreset.BRAND, {
  themeColor: EButtonThemeColor.WHITE,
  themeColorHover: EButtonThemeColor.WHITE,
  themeColorBg: EButtonThemeColorBg.BRAND,
  themeColorBgHover: EButtonThemeColorBg.BRAND_LIGHT
}), _defineProperty(_THEME_PACK, EButtonPreset.BRAND_SECONDARY, {
  themeColorBd: EButtonThemeColorBd.BRAND,
  themeColor: EButtonThemeColor.BRAND,
  themeColorHover: EButtonThemeColor.WHITE,
  themeColorBgHover: EButtonThemeColorBg.BRAND_LIGHT
}), _defineProperty(_THEME_PACK, EButtonPreset.MENU, {
  themeColor: EButtonThemeColor.NORMAL,
  themeColorHover: EButtonThemeColor.BLACK,
  themeColorBg: EButtonThemeColorBg.NONE,
  themeColorBgHover: EButtonThemeColorBg.NORMAL
}), _defineProperty(_THEME_PACK, EButtonPreset.MENU_ACTIVE, {
  themeColor: EButtonThemeColor.NORMAL,
  themeColorHover: EButtonThemeColor.BLACK,
  themeColorBg: EButtonThemeColorBg.NORMAL,
  themeColorBgHover: EButtonThemeColorBg.NORMAL
}), _defineProperty(_THEME_PACK, EButtonPreset.TEXT, {
  themeColor: EButtonThemeColor.NONE,
  themeColorHover: EButtonThemeColor.NONE,
  themeColorBg: EButtonThemeColorBg.NONE,
  themeColorBgHover: EButtonThemeColorBg.NONE
}), _defineProperty(_THEME_PACK, EButtonPreset.TEXT_LINK, {
  themeColor: EButtonThemeColor.NONE,
  themeColorHover: EButtonThemeColor.LINK,
  themeColorBg: EButtonThemeColorBg.NONE,
  themeColorBgHover: EButtonThemeColorBg.NONE
}), _defineProperty(_THEME_PACK, EButtonPreset.LINK, {
  themeColor: EButtonThemeColor.LINK,
  themeColorHover: EButtonThemeColor.LINK
}), _THEME_PACK);
/**
 * 对于传入 preset 的按钮，如果为 disabled 状态，其样式统一为灰边灰底灰字
 */

var THEME_PACK_DISABLED = (_THEME_PACK_DISABLED = {}, _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.PRIMARY, THEME_DISABLED), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.SECONDARY, THEME_DISABLED), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.THIRDLY, THEME_DISABLED), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.BRAND, THEME_DISABLED), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.BRAND_SECONDARY, THEME_DISABLED), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.MENU, THEME_DISABLED_NO_BG), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.MENU_ACTIVE, THEME_DISABLED), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.TEXT, THEME_DISABLED_NO_BG), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.TEXT_LINK, THEME_DISABLED_NO_BG), _defineProperty(_THEME_PACK_DISABLED, EButtonPreset.LINK, THEME_DISABLED_NO_BG), _THEME_PACK_DISABLED);
var APPEARANCE_PACK = (_APPEARANCE_PACK = {}, _defineProperty(_APPEARANCE_PACK, EButtonPreset.PRIMARY, undefined), _defineProperty(_APPEARANCE_PACK, EButtonPreset.SECONDARY, undefined), _defineProperty(_APPEARANCE_PACK, EButtonPreset.THIRDLY, undefined), _defineProperty(_APPEARANCE_PACK, EButtonPreset.BRAND, undefined), _defineProperty(_APPEARANCE_PACK, EButtonPreset.BRAND_SECONDARY, undefined), _defineProperty(_APPEARANCE_PACK, EButtonPreset.MENU, APPEARANCE_MENU), _defineProperty(_APPEARANCE_PACK, EButtonPreset.MENU_ACTIVE, APPEARANCE_MENU), _defineProperty(_APPEARANCE_PACK, EButtonPreset.TEXT, APPEARANCE_TEXT), _defineProperty(_APPEARANCE_PACK, EButtonPreset.TEXT_LINK, APPEARANCE_TEXT), _defineProperty(_APPEARANCE_PACK, EButtonPreset.LINK, APPEARANCE_TEXT), _APPEARANCE_PACK);
export default function getPreset(preset, disabled) {
  if (!preset) {
    return null;
  }

  return _objectSpread(_objectSpread({}, APPEARANCE_PACK[preset]), disabled ? THEME_PACK_DISABLED[preset] : THEME_PACK[preset]);
}