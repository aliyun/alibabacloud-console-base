import {
  DIALOG
} from '@alicloud/console-base-styled-mixin';

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
      return modeIsSlide ? DIALOG.WIDTH_SLIDE.XS : DIALOG.WIDTH_NORMAL.XS;
    case EDialogSize.S:
      return modeIsSlide ? DIALOG.WIDTH_SLIDE.S : DIALOG.WIDTH_NORMAL.S;
    case EDialogSize.L:
      return modeIsSlide ? DIALOG.WIDTH_SLIDE.L : DIALOG.WIDTH_NORMAL.L;
    case EDialogSize.XL:
      return modeIsSlide ? DIALOG.WIDTH_SLIDE.XL : DIALOG.WIDTH_NORMAL.XL;
    case EDialogSize.XXL:
      return modeIsSlide ? DIALOG.WIDTH_SLIDE.XXL : DIALOG.WIDTH_NORMAL.XXL;
    case EDialogSize.AUTO:
      return 'auto';
    case EDialogSize.ALMOST_FULL:
      return '95%';
    default:
      return modeIsSlide ? DIALOG.WIDTH_SLIDE.M : DIALOG.WIDTH_NORMAL.M;
  }
}
