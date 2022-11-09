import {
  IColorEssential,
  IColorBg
} from '../types';

export default function createConstColorBaseBg(colorEssential: IColorEssential): IColorBg {
  return {
    BG_TRANSPARENT: colorEssential.TRANSPARENT,
    BG_WHITE: colorEssential.WHITE,
    BG_BLACK: colorEssential.BLACK,
    BG_INVERSE: colorEssential.INVERSE_BG,
    BG_BRAND: colorEssential.BRAND,
    BG_BRAND_HOVER: colorEssential.BRAND_HOVER,
    BG_BRAND_ACTIVE: colorEssential.BRAND_ACTIVE,
    BG_ACCENT: colorEssential.ACCENT,
    BG_ACCENT_HOVER: colorEssential.ACCENT_HOVER,
    BG_ACCENT_ACTIVE: colorEssential.ACCENT_ACTIVE,
    BG_PRIMARY: colorEssential.GRAY_PRIMARY_BG,
    BG_SECONDARY: colorEssential.GRAY_SECONDARY_BG,
    BG_SECONDARY_FADE: colorEssential.GRAY_SECONDARY_FADE_BG,
    BG_TERTIARY: colorEssential.GRAY_TERTIARY_BG,
    BG_TERTIARY_FADE: colorEssential.GRAY_TERTIARY_FADE_BG,
    BG_DISABLED: colorEssential.GRAY_DISABLED,
    BG_HELP: colorEssential.HELP,
    BG_HELP_TINT: colorEssential.HELP_TINT,
    BG_HELP_TINT_FADE: colorEssential.HELP_TINT_FADE,
    BG_INFO: colorEssential.INFO,
    BG_INFO_TINT: colorEssential.INFO_TINT,
    BG_INFO_TINT_FADE: colorEssential.INFO_TINT_FADE,
    BG_SUCCESS: colorEssential.SUCCESS,
    BG_SUCCESS_TINT: colorEssential.SUCCESS_TINT,
    BG_SUCCESS_TINT_FADE: colorEssential.SUCCESS_TINT_FADE,
    BG_WARNING: colorEssential.WARNING,
    BG_WARNING_TINT: colorEssential.WARNING_TINT,
    BG_WARNING_TINT_FADE: colorEssential.WARNING_TINT_FADE,
    BG_ERROR: colorEssential.ERROR,
    BG_ERROR_TINT: colorEssential.ERROR_TINT,
    BG_ERROR_TINT_FADE: colorEssential.ERROR_TINT_FADE,
    BG_DANGER: colorEssential.DANGER,
    BG_BACKDROP: colorEssential.BACKDROP
  };
}
