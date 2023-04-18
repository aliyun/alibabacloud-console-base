import {
  useMemo
} from 'react';

import {
  countItems
} from '../util';

import useModelProps from './_use-model-props';

export default function useFilterAvailable(): boolean {
  const {
    items,
    minItemsForFilter = 10
  } = useModelProps();
  const total = useMemo(() => countItems(items), [items]);
  
  return minItemsForFilter <= 0 ? false : total >= minItemsForFilter;
}
