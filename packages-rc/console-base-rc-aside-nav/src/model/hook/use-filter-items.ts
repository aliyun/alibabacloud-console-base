/*
import {
  useMemo
} from 'react';

import {
  TNavItem
} from '../types';
import {
  filterNavItems
} from '../util';

import useModelProps from './_use-model-props';
import useFilterText from './use-filter-text';

export default function useFilterItems(): TNavItem[] {
  const {
    items
  } = useModelProps();
  const filterText = useFilterText();

  return useMemo(() => filterNavItems(items, filterText), [filterText, items]);
}
*/

import {
  useMemo
} from 'react';

import {
  TParsedItemOrDivider
} from '../types';
import {
  filterNavItems,
  parseItems
} from '../util';

import useModelProps from './_use-model-props';
import useFilterText from './use-filter-text';

export default function useFilterItems(): TParsedItemOrDivider[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();
  const filterText = useFilterText();
  const filter = filterNavItems(items, filterText);

  return useMemo(() => parseItems(filter, subItemsUnfolded), [filter, subItemsUnfolded]);
}