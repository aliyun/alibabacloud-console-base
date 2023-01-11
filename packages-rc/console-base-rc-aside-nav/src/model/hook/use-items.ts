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
import useFilterItems from './use-filter-items';
import useShowFilteringItems from './use-show-filtering-items';

export default function useItems(): TParsedItemOrDivider[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();
  const filterItems = useFilterItems();
  const showFilteringItems = useShowFilteringItems();

  return useMemo(() => {
    return parseItems(!showFilteringItems ? items : filterItems, subItemsUnfolded);
  }, [items, filterItems, subItemsUnfolded, showFilteringItems]);
}
