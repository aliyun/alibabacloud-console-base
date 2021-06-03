import {
  useMemo
} from 'react';

import {
  IPropsTab
} from '../../types';

import useModelProps from './_use-model-props';

export default function useVisibleTabs(): IPropsTab[] {
  const {
    tabs
  } = useModelProps();
  
  return useMemo(() => tabs.filter(v => v.visible !== false), [tabs]);
}
