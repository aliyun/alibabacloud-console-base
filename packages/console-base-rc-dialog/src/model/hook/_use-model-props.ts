import {
  useMemo
} from 'react';

import {
  RequiredSelected
} from '@alicloud/typescript-missing-helpers';
import {
  Z_INDEX
} from '@alicloud/console-base-theme';

import {
  IDialogProps,
  TDialogData
} from '../../types';
import {
  EDialogMode
} from '../../const';

import useModelContext from './_use-model-context';
import useModelState from './_use-model-state';

type TModelProps<T = void, D = TDialogData> = RequiredSelected<IDialogProps<T, D>, 'mode' | 'backdrop' | 'closable' | 'esc' | 'zIndex' | 'zIndexBackdrop'>;

/**
 * 返回填充默认值并合并 propsUpdate 的 props
 */
export default function useModelProps<T = void, D = TDialogData>(): TModelProps<T, D> {
  const {
    props
  } = useModelContext<T, D>();
  const {
    propsUpdate
  } = useModelState<T, D>();
  
  return useMemo((): TModelProps<T, D> => {
    const finalProps: TModelProps<T, D> = {
      mode: EDialogMode.NORMAL,
      backdrop: true,
      closable: true,
      esc: true,
      zIndex: 0,
      zIndexBackdrop: 0,
      ...props,
      ...propsUpdate
    };
    const modeIsSlide = finalProps.mode === EDialogMode.SLIDE || finalProps.mode === EDialogMode.SLIDE_UP;
    
    if (!finalProps.zIndex) {
      finalProps.zIndex = modeIsSlide ? Z_INDEX.DIALOG_SLIDE : Z_INDEX.DIALOG_NORMAL;
    }
    
    if (!finalProps.zIndexBackdrop) {
      finalProps.zIndexBackdrop = modeIsSlide ? Z_INDEX.BACKDROP_SLIDE : Z_INDEX.BACKDROP_NORMAL;
    }
    
    if (modeIsSlide) {
      finalProps.className = `${finalProps.className || ''} J_fixed_right_will_be_pushed_left`.trim(); // 注意：和 one-modal 中有耦合，可以忍
    }
    
    return finalProps;
  }, [props, propsUpdate]);
}
