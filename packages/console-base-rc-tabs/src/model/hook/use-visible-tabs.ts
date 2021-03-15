import {
  useMemo
} from 'react';

import {
  IPropsTab
} from '../../types';

import useProps from './use-props';

export default function useVisibleTabs(): IPropsTab[] {
  const {
    tabs
  } = useProps();
  
  return useMemo(() => tabs.filter(v => v.visible !== false), [tabs]);
}
