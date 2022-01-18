import {
  useMemo
} from 'react';

import {
  RequiredBut
} from '@alicloud/typescript-missing-helpers';

import {
  DEFAULT_VALUES
} from '../../const';
import {
  IModelProps
} from '../types';

import useModelContext from './_use-model-context';

type TModelProps = RequiredBut<IModelProps, 'mode' | 'onModeChange' | 'onClose'>;

export default function useModelProps(): TModelProps {
  const {
    props
  } = useModelContext();
   
  return useMemo((): TModelProps => {
    const {
      affix = null,
      visible = true,
      minWidth = DEFAULT_VALUES.MIN_WIDTH,
      minHeight = DEFAULT_VALUES.MIN_HEIGHT,
      maxWidth = DEFAULT_VALUES.MAX_WIDTH,
      maxHeight = DEFAULT_VALUES.MAX_HEIGHT,
      pinnedWidth = DEFAULT_VALUES.PINNED_WIDTH,
      zIndex = DEFAULT_VALUES.Z_INDEX,
      minimizable = false, // 暂时还不好用..
      pinnable = true
    } = props;
    
    return {
      affix,
      visible,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      pinnedWidth,
      zIndex,
      minimizable,
      pinnable,
      ...props
    };
  }, [props]);
}
