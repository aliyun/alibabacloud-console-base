import {
  useMemo
} from 'react';

import {
  RequiredBut
} from '@alicloud/typescript-missing-helpers';

import {
  IPropsModal
} from '../../types';
import {
  DEFAULT_VALUES
} from '../../const';

import useModelContext from './_use-model-context';

type IModelProps = RequiredBut<IPropsModal, 'mode' | 'onModeChange' | 'onClose'>;

const DEFAULT_PROPS: IModelProps = {
  tabs: {
    tabs: []
  },
  affix: null,
  visible: true,
  minWidth: DEFAULT_VALUES.MIN_WIDTH,
  minHeight: DEFAULT_VALUES.MIN_HEIGHT,
  maxWidth: DEFAULT_VALUES.MAX_WIDTH,
  maxHeight: DEFAULT_VALUES.MAX_HEIGHT,
  pinnedWidth: DEFAULT_VALUES.PINNED_WIDTH,
  zIndex: DEFAULT_VALUES.Z_INDEX,
  minimizable: false, // 暂时还不好用..
  pinnable: true
};

export default function useProps(): IModelProps {
  const {
    props
  } = useModelContext();
   
  return useMemo((): IModelProps => ({
    ...DEFAULT_PROPS,
    ...props
  }), [props]);
}
