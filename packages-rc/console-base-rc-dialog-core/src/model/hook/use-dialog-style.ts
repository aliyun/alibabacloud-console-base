import {
  CSSProperties
} from 'react';

import {
  EDialogMode,
  EDialogSize
} from '../enum';
import {
  getDialogSizeWidth
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';
import useDialogMode from './use-dialog-mode';
import useDialogSize from './use-dialog-size';

export default function useDialogStyle(): CSSProperties {
  const {
    zIndex
  } = useModelProps();
  const {
    zIndex: zIndexInState
  } = useModelState();
  const dialogMode = useDialogMode();
  const dialogSize = useDialogSize();
  
  const style: CSSProperties = {
    zIndex: zIndexInState > 0 ? zIndexInState : zIndex,
    width: getDialogSizeWidth(dialogMode, dialogSize)
  };
  
  if (dialogMode === EDialogMode.SLIDE && dialogSize === EDialogSize.ALMOST_FULL) {
    style.left = 200;
  }
  
  return style;
}
