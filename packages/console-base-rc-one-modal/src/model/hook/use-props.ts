import {
  useMemo
} from 'react';

import {
  IPropsModal
} from '../../types';
import {
  DEFAULT_VALUES
} from '../../const';

import useModelContext from './_use-model-context';

// type PartialPick<T, K extends keyof T> = {
//     [P in K]?: T[P];
// };
// type CopyWithPartial<T, K extends keyof T> = Omit<T, K> & Partial<T>;
// type OptionalBut<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>;
type RequiredBut<T, TOptional extends keyof T = keyof T> = Partial<Pick<T, TOptional>> & Required<Pick<T, Exclude<keyof T, TOptional>>>;

type TOptional = 'mode' | 'onModeChange' | 'onClose';
type IModelProps = RequiredBut<IPropsModal, TOptional>;

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
