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
import useIsShowFilteringItems from './use-is-show-filtering-items';

export default function useItems(): TParsedItemOrDivider[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();
  const filterItems = useFilterItems();
  const isShowFilteringItems = useIsShowFilteringItems();

  return useMemo(() => {
    return parseItems(!isShowFilteringItems ? items : filterItems, subItemsUnfolded);
  }, [items, filterItems, subItemsUnfolded, isShowFilteringItems]);
}
