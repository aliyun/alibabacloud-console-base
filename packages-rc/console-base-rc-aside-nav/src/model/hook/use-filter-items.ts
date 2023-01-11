import {
  useMemo
} from 'react';

import {
  TNavItem
} from '../types';
import {
  filterItems
} from '../util';

import useModelProps from './_use-model-props';
import useFilterText from './use-filter-text';

export default function useFilterItems(): TNavItem[] {
  const {
    items
  } = useModelProps();
  const filterText = useFilterText();

  return useMemo(() => filterItems(items, filterText), [items, filterText]);
}