import {
  SIZE
} from '@alicloud/console-base-theme';

import {
  EDialogMode,
  EDialogSize
} from '../enum';

export default function getDialogSizeWidth(mode: EDialogMode, size: number | EDialogSize): string | number {
  const modeIsSlide = mode === EDialogMode.SLIDE;
  
  if (mode === EDialogMode.SLIDE_UP) {
    return 'auto';
  }
  
  if (typeof size === 'number') {
    return size;
  }
  
  switch (size) {
    case EDialogSize.XS:
      return modeIsSlide ? SIZE.WIDTH_DIALOG_NORMAL_XS : SIZE.WIDTH_DIALOG_NORMAL_XS;
    case EDialogSize.S:
      return modeIsSlide ? SIZE.WIDTH_DIALOG_SLIDE_S : SIZE.WIDTH_DIALOG_NORMAL_S;
    case EDialogSize.L:
      return modeIsSlide ? SIZE.WIDTH_DIALOG_SLIDE_L : SIZE.WIDTH_DIALOG_NORMAL_L;
    case EDialogSize.XL:
      return modeIsSlide ? SIZE.WIDTH_DIALOG_SLIDE_XL : SIZE.WIDTH_DIALOG_NORMAL_XL;
    case EDialogSize.XXL:
      return modeIsSlide ? SIZE.WIDTH_DIALOG_SLIDE_XXL : SIZE.WIDTH_DIALOG_NORMAL_XXL;
    case EDialogSize.AUTO:
      return 'auto';
    case EDialogSize.ALMOST_FULL:
      return modeIsSlide ? 'auto' : '95%';
    case EDialogSize.FULL:
      return '100%';
    default:
      return modeIsSlide ? SIZE.WIDTH_DIALOG_SLIDE_M : SIZE.WIDTH_DIALOG_NORMAL_M;
  }
}
