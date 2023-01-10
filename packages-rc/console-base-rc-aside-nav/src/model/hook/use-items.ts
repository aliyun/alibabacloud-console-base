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
import useFiltering from './use-filtering';
import useFilterText from './use-filter-text';

export default function useItems(): TParsedItemOrDivider[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();

  const filtering = useFiltering();
  const filterText = useFilterText();

  return useMemo(() => {
    const filter = filterNavItems(items, filterText);

    return parseItems(!filtering ? items : filter, subItemsUnfolded);
  }, [items, subItemsUnfolded, filtering, filterText]);
}
