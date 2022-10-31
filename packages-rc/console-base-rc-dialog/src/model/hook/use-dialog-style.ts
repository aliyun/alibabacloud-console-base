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
  
  return {
    zIndex: zIndexInState > 0 ? zIndexInState : zIndex,
    width: getDialogSizeWidth(mode as EDialogMode, size as number | EDialogSize), // TODO 放 useModelProps 中确定类型
    left: mode === EDialogMode.SLIDE && size === EDialogSize.ALMOST_FULL ? 200 : undefined
  };
}
