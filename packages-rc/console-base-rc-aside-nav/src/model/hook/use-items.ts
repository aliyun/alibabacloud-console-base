import {
  useMemo
} from 'react';

import {
  TParsedItemOrDivider
} from '../types';
import {
  parseItems,
  filterNavItems
} from '../util';

import useModelProps from './_use-model-props';
import useFilterText from './use-filter-text';
import useIsShowFilteringItems from './use-is-show-filtering-items';

export default function useItems(): TParsedItemOrDivider[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();
  const filterText = useFilterText();
  const isShowFilteringItems = useIsShowFilteringItems();

  return useMemo(() => {
    const filter = filterNavItems(items, filterText);

    return parseItems(!isShowFilteringItems ? items : filter, subItemsUnfolded);
  }, [items, subItemsUnfolded, filterText, isShowFilteringItems]);
}
