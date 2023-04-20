import {
  useMemo
} from 'react';

import {
  TParsedItemOrDivider
} from '../types';
import {
  parseItems
} from '../util';

import useModelProps from './_use-model-props';
import useHandleItemClick from './use-handle-item-click';
import useFilterValue from './use-filter-value';

export default function useItems(): TParsedItemOrDivider[] {
  const {
    items,
    defaultUnfolded
  } = useModelProps();
  const filterValue = useFilterValue();
  const handleItemClick = useHandleItemClick();
  
  return useMemo(() => parseItems(items, defaultUnfolded, filterValue, handleItemClick), [items, defaultUnfolded, filterValue, handleItemClick]);
}
