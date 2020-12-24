import {
  SIZE
} from '@alicloud/console-base-theme';

import {
  EDialogMode,
  EDialogSize
} from '../../const';

import useModelProps from './_use-model-props';

export default function useDialogWidth(): number | string {
  const {
    mode,
    size
  } = useModelProps();
  
  if (mode === EDialogMode.SLIDE_UP) {
    return 'auto';
  }
  
  if (typeof size === 'number') {
    return size;
  }
  
  const modeIsSlide = mode === EDialogMode.SLIDE;
  
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
      return '95%';
    default:
      return modeIsSlide ? SIZE.WIDTH_DIALOG_SLIDE_M : SIZE.WIDTH_DIALOG_NORMAL_M;
  }
}
