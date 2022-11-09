import {
  IColorEssential,
  IColorBorder
} from '../types';

export default function createConstColorBaseBorder(colorEssential: IColorEssential): IColorBorder {
  return {
    BORDER_TRANSPARENT: colorEssential.TRANSPARENT,
    BORDER_WHITE: colorEssential.WHITE,
    BORDER_BRAND: colorEssential.BRAND,
    BORDER_BRAND_HOVER: colorEssential.BRAND_HOVER,
    BORDER_BRAND_ACTIVE: colorEssential.BRAND_ACTIVE,
    BORDER_ACCENT: colorEssential.ACCENT,
    BORDER_ACCENT_HOVER: colorEssential.ACCENT_HOVER,
    BORDER_ACCENT_ACTIVE: colorEssential.ACCENT_ACTIVE,
    BORDER_PRIMARY: colorEssential.GRAY_PRIMARY_BD,
    BORDER_SECONDARY: colorEssential.GRAY_SECONDARY_BD,
    BORDER_TERTIARY: colorEssential.GRAY_TERTIARY_BD,
    BORDER_DISABLED: colorEssential.GRAY_DISABLED,
    BORDER_HELP: colorEssential.HELP,
    BORDER_INFO: colorEssential.INFO,
    BORDER_SUCCESS: colorEssential.SUCCESS,
    BORDER_WARNING: colorEssential.WARNING,
    BORDER_ERROR: colorEssential.ERROR,
    BORDER_DANGER: colorEssential.DANGER
  };
}
