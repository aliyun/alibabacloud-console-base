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
  TDialogData,
  IDialogPropsMutable
} from '../../types';
import {
  EDialogMode
} from '../../const';

import useModelContext from './_use-model-context';
import useModelState from './_use-model-state';

type TModelProps<T = void, D = TDialogData> = RequiredSelected<IDialogProps<T, D>, 'mode' | 'backdrop' | 'closable' | 'esc' | 'zIndex' | 'zIndexBackdrop'>;

const DEFAULT_PROPS: TModelProps<any, any> = {
  mode: EDialogMode.NORMAL,
  backdrop: true,
  closable: true,
  esc: true,
  zIndex: Z_INDEX.DIALOG_NORMAL,
  zIndexBackdrop: Z_INDEX.BACKDROP_NORMAL
};

/**
 * 返回填充默认值并合并 propsUpdate 的 props
 */
export default function useProps<T = void, D = TDialogData>(): TModelProps<T, D> {
  const {
    props
  } = useModelContext<T, D>();
  const {
    propsUpdate
  } = useModelState<T, D>();
  
  return useMemo((): TModelProps<T, D> => {
    const finalProps = {
      ...props,
      ...propsUpdate
    };
    
    finalProps.zIndex = finalProps.zIndex ?? (finalProps.mode === EDialogMode.SLIDE ? Z_INDEX.DIALOG_SLIDE : Z_INDEX.DIALOG_NORMAL);
    finalProps.zIndexBackdrop = finalProps.zIndexBackdrop ?? (finalProps.mode === EDialogMode.SLIDE ? Z_INDEX.BACKDROP_SLIDE : Z_INDEX.BACKDROP_NORMAL);
    
    return {
      ...DEFAULT_PROPS,
      ...finalProps
    };
  }, [props, propsUpdate]);
}
