import {
  MouseEvent,
  useCallback
} from 'react';

import {
  INavItemProps
} from '../types';

import useModelProps from './_use-model-props';

export default function useHandleItemClick(): (item: INavItemProps, e: MouseEvent) => void {
  const {
    onItemClick
  } = useModelProps();
  
  return useCallback((item: INavItemProps, e: MouseEvent) => {
    onItemClick?.(item, e);
  }, [onItemClick]);
}
