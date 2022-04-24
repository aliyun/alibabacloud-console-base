import {
  useMemo
} from 'react';

import {
  INavItemPropsParsed
} from '../types';
import {
  parseItems
} from '../util';

import useModelProps from './_use-model-props';

export default function useItems(): (INavItemPropsParsed | '-')[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();
  
  return useMemo(() => parseItems(items, subItemsUnfolded), [items, subItemsUnfolded]);
}