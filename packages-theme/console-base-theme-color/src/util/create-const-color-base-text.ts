import {
  IColorText,
  IColorEssential
} from '../types';

export default function createConstColorBaseText(colorEssential: IColorEssential): IColorText {
  return {
    TEXT_TRANSPARENT: colorEssential.TRANSPARENT,
    TEXT_WHITE: colorEssential.WHITE,
    TEXT_BLACK: colorEssential.BLACK,
    TEXT_INVERSE: colorEssential.INVERSE,
    TEXT_BRAND: colorEssential.BRAND,
    TEXT_BRAND_HOVER: colorEssential.BRAND_HOVER,
    TEXT_BRAND_ACTIVE: colorEssential.BRAND_ACTIVE,
    TEXT_ACCENT: colorEssential.ACCENT,
    TEXT_ACCENT_HOVER: colorEssential.ACCENT_HOVER,
    TEXT_ACCENT_ACTIVE: colorEssential.ACCENT_ACTIVE,
    TEXT_PRIMARY: colorEssential.GRAY_PRIMARY,
    TEXT_SECONDARY: colorEssential.GRAY_SECONDARY,
    TEXT_TERTIARY: colorEssential.GRAY_TERTIARY,
    TEXT_DISABLED: colorEssential.GRAY_DISABLED,
    TEXT_HELP: colorEssential.HELP,
    TEXT_INFO: colorEssential.INFO,
    TEXT_SUCCESS: colorEssential.SUCCESS,
    TEXT_WARNING: colorEssential.WARNING,
    TEXT_ERROR: colorEssential.ERROR,
    TEXT_DANGER: colorEssential.DANGER,
    TEXT_EMPHASIS: colorEssential.EMPHASIS,
    TEXT_CODE: colorEssential.CODE
  };
}
