import {
  MouseEvent,
  useCallback
} from 'react';

import {
  INavItemProps
} from '../types';

import useModelProps from './_use-model-props';
import useHandleResetFilter from './use-handle-reset-filter';

export default function useHandleItemClick(): (item: INavItemProps, e: MouseEvent) => void {
  const {
    onItemClick
  } = useModelProps();
  const handleResetFilter = useHandleResetFilter();
  
  return useCallback((item: INavItemProps, e: MouseEvent) => {
    handleResetFilter();
    onItemClick?.(item, e);
  }, [handleResetFilter, onItemClick]);
}
