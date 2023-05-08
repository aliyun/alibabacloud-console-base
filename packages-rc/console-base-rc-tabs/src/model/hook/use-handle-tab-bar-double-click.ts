import {
  MouseEvent,
  useCallback
} from 'react';

import useModelProps from './_use-model-props';
import useModelState from './_use-model-state';

export default function useHandleTabBarDoubleClick(): (e: MouseEvent<HTMLDivElement>) => void {
  const {
    onTabBarDoubleClick
  } = useModelProps();
  const {
    domTabBar
  } = useModelState();
  
  return useCallback((e: MouseEvent<HTMLDivElement>): void => {
    if (domTabBar && e.target === domTabBar) {
      onTabBarDoubleClick?.();
    }
  }, [domTabBar, onTabBarDoubleClick]);
}
