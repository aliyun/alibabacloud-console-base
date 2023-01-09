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
import useFiltering from './use-filtering';

export default function useItems(): TParsedItemOrDivider[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();

  const filtering = useFiltering();
  const filterItems = useFilterItems();

  return useMemo(() => {
    return parseItems(!filtering ? items : filterItems, subItemsUnfolded);
  }, [items, subItemsUnfolded, filtering, filterItems]);
}
