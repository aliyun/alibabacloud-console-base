import {
  CSSProperties
} from 'react';

import {
  EDialogMode,
  EDialogSize
} from '../../enum';
import {
  getDialogSizeWidth
} from '../util';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useDialogStyle(): CSSProperties {
  const {
    mode,
    zIndex,
    size: size0
  } = useModelProps();
  const {
    data,
    zIndex: zIndexInState
  } = useModelState();
  
  const size = typeof size0 === 'function' ? size0(data) : size0;
  const style: CSSProperties = {
    zIndex: zIndexInState > 0 ? zIndexInState : zIndex,
    width: getDialogSizeWidth(mode as EDialogMode, size as number | EDialogSize) // TODO 放 useModelProps 中确定类型
  };
  
  if (mode === EDialogMode.SLIDE && size === EDialogSize.ALMOST_FULL) {
    style.left = 200;
  }
  
  return style;
}
