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
import useSubItemsShow from './use-sub-items-show';

export default function useItems(): TParsedItemOrDivider[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();
  const filterItems = useFilterItems();
  const subItemsShow = useSubItemsShow();

  return useMemo(() => {
    return parseItems(!subItemsShow ? items : filterItems, subItemsUnfolded);
  }, [items, filterItems, subItemsUnfolded, subItemsShow]);
}
