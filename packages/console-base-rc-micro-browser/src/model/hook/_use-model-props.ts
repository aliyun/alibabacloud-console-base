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
      widthMin = DEFAULT_VALUES.MIN_WIDTH,
      widthMax = DEFAULT_VALUES.MAX_WIDTH,
      widthDefault = 0,
      widthMinPinned = DEFAULT_VALUES.MIN_WIDTH_PINNED,
      widthMaxPinned = DEFAULT_VALUES.MAX_WIDTH_PINNED,
      widthDefaultPinned = 0,
      heightMin = DEFAULT_VALUES.MIN_HEIGHT,
      heightMax = DEFAULT_VALUES.MAX_HEIGHT,
      heightDefault = 0,
      zIndex = DEFAULT_VALUES.Z_INDEX,
      minimizable = false, // 暂时还不好用..
      pinnable = true
    } = props;
    
    return {
      affix,
      visible,
      widthMin,
      heightMin,
      widthMax,
      widthDefault,
      heightMax,
      heightDefault,
      widthMinPinned,
      widthMaxPinned,
      widthDefaultPinned,
      zIndex,
      minimizable,
      pinnable,
      ...props
    };
  }, [props]);
}
