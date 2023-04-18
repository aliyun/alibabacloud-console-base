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
    subItemsUnfolded
  } = useModelProps();
  const filterValue = useFilterValue();
  const handleItemClick = useHandleItemClick();
  
  return useMemo(() => parseItems(items, subItemsUnfolded, filterValue, handleItemClick), [items, subItemsUnfolded, filterValue, handleItemClick]);
}
