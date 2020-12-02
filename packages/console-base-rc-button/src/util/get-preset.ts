import {
  IButtonAppearance,
  IButtonThemePack,
  IButtonAppearanceAndTheme
} from '../types';
import {
  EButtonSize,
  EButtonThemeColorBd,
  EButtonThemeColorBg,
  EButtonThemeColor,
  EButtonPreset
} from '../const';

const THEME_DISABLED_NO_BG = {
  themeColorBd: EButtonThemeColorBd.TRANSPARENT,
  themeColor: EButtonThemeColor.GRAY
};

const THEME_DISABLED = {
  ...THEME_DISABLED_NO_BG,
  themeColorBg: EButtonThemeColorBg.LIGHT
};

const APPEARANCE_TEXT: IButtonAppearance = {
  size: EButtonSize.NONE
};

/**
 * 菜单按钮：
 * 
 * 1. 左靠
 * 2. block
 * 3. ellipsis
 */
const APPEARANCE_MENU: IButtonAppearance = {
  textAlign: 'left',
  block: true,
  ellipsis: true
};

const THEME_PACK: Record<EButtonPreset, IButtonThemePack> = {
  /**
   * 主按钮样式预设 - 蓝底白字
   */
  [EButtonPreset.PRIMARY]: {
    themeColorBd: EButtonThemeColorBd.TRANSPARENT,
    themeColorBdHover: EButtonThemeColorBd.TRANSPARENT,
    themeColorBg: EButtonThemeColorBg.PRIMARY,
    themeColorBgHover: EButtonThemeColorBg.PRIMARY_SHADE,
    themeColor: EButtonThemeColor.WHITE,
    themeColorHover: EButtonThemeColor.WHITE
  },
  
  /**
   * 次按钮样式预设 - 灰底黑字
   */
  [EButtonPreset.SECONDARY]: {
    themeColorBd: EButtonThemeColorBd.GRAY,
    themeColorBdHover: EButtonThemeColorBd.SHADE,
    themeColorBg: EButtonThemeColorBg.LIGHT,
    themeColorBgHover: EButtonThemeColorBg.LIGHTER,
    themeColor: EButtonThemeColor.GRAY,
    themeColorHover: EButtonThemeColor.NORMAL
  },
  
  /**
   * 三级按钮样式预设 - 无底，Hover 灰底
   */
  [EButtonPreset.THIRDLY]: {
    themeColor: EButtonThemeColor.NORMAL,
    themeColorHover: EButtonThemeColor.BLACK,
    themeColorBgHover: EButtonThemeColorBg.NORMAL
  },
  
  /**
   * 品牌色按钮
   */
  [EButtonPreset.BRAND]: {
    themeColor: EButtonThemeColor.WHITE,
    themeColorHover: EButtonThemeColor.WHITE,
    themeColorBg: EButtonThemeColorBg.BRAND,
    themeColorBgHover: EButtonThemeColorBg.BRAND_LIGHT
  },
  
  /**
   * 品牌色按钮（次级）
   */
  [EButtonPreset.BRAND_SECONDARY]: {
    themeColorBd: EButtonThemeColorBd.BRAND,
    themeColor: EButtonThemeColor.BRAND,
    themeColorHover: EButtonThemeColor.WHITE,
    themeColorBgHover: EButtonThemeColorBg.BRAND_LIGHT
  },
  
  /**
   * 菜单按钮
   */
  [EButtonPreset.MENU]: {
    themeColor: EButtonThemeColor.NORMAL,
    themeColorHover: EButtonThemeColor.BLACK,
    themeColorBg: EButtonThemeColorBg.NONE,
    themeColorBgHover: EButtonThemeColorBg.NORMAL
  },
  
  /**
   * 菜单按钮
   */
  [EButtonPreset.MENU_ACTIVE]: {
    themeColor: EButtonThemeColor.NORMAL,
    themeColorHover: EButtonThemeColor.BLACK,
    themeColorBg: EButtonThemeColorBg.NORMAL,
    themeColorBgHover: EButtonThemeColorBg.NORMAL
  },
  
  /**
   * 文本按钮
   */
  [EButtonPreset.TEXT]: {
    themeColor: EButtonThemeColor.NONE,
    themeColorHover: EButtonThemeColor.NONE,
    themeColorBg: EButtonThemeColorBg.NONE,
    themeColorBgHover: EButtonThemeColorBg.NONE
  },
  
  /**
   * 常态是文本，hover 是链接
   */
  [EButtonPreset.TEXT_LINK]: {
    themeColor: EButtonThemeColor.NONE,
    themeColorHover: EButtonThemeColor.LINK,
    themeColorBg: EButtonThemeColorBg.NONE,
    themeColorBgHover: EButtonThemeColorBg.NONE
  },
  
  /**
   * 链接按钮
   */
  [EButtonPreset.LINK]: {
    themeColor: EButtonThemeColor.LINK,
    themeColorHover: EButtonThemeColor.LINK
  }
};

/**
 * 对于传入 preset 的按钮，如果为 disabled 状态，其样式统一为灰边灰底灰字
 */
const THEME_PACK_DISABLED: Record<EButtonPreset, IButtonThemePack> = {
  [EButtonPreset.PRIMARY]: THEME_DISABLED,
  [EButtonPreset.SECONDARY]: THEME_DISABLED,
  [EButtonPreset.THIRDLY]: THEME_DISABLED,
  [EButtonPreset.BRAND]: THEME_DISABLED,
  [EButtonPreset.BRAND_SECONDARY]: THEME_DISABLED,
  [EButtonPreset.MENU]: THEME_DISABLED_NO_BG,
  [EButtonPreset.MENU_ACTIVE]: THEME_DISABLED,
  [EButtonPreset.TEXT]: THEME_DISABLED_NO_BG,
  [EButtonPreset.TEXT_LINK]: THEME_DISABLED_NO_BG,
  [EButtonPreset.LINK]: THEME_DISABLED_NO_BG
};

const APPEARANCE_PACK: Record<EButtonPreset, IButtonAppearance | undefined> = {
  [EButtonPreset.PRIMARY]: undefined,
  [EButtonPreset.SECONDARY]: undefined,
  [EButtonPreset.THIRDLY]: undefined,
  [EButtonPreset.BRAND]: undefined,
  [EButtonPreset.BRAND_SECONDARY]: undefined,
  [EButtonPreset.MENU]: APPEARANCE_MENU,
  [EButtonPreset.MENU_ACTIVE]: APPEARANCE_MENU,
  [EButtonPreset.TEXT]: APPEARANCE_TEXT,
  [EButtonPreset.TEXT_LINK]: APPEARANCE_TEXT,
  [EButtonPreset.LINK]: APPEARANCE_TEXT
};

export default function getPreset(preset: EButtonPreset | undefined, disabled: boolean): IButtonAppearanceAndTheme | null {
  if (!preset) {
    return null;
  }
  
  return {
    ...APPEARANCE_PACK[preset],
    ...disabled ? THEME_PACK_DISABLED[preset] : THEME_PACK[preset]
  };
}
