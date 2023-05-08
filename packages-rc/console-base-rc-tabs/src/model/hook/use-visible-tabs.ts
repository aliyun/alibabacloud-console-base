import {
  useMemo
} from 'react';

import {
  ITabItem
} from '../types';

import useModelProps from './_use-model-props';

export default function useVisibleTabs(): ITabItem[] {
  const {
    tabs
  } = useModelProps();
  
  return useMemo(() => tabs.filter(v => v.visible !== false).sort((v1, v2) => (v1.order || 0) - (v2.order || 0)), [tabs]);
}
