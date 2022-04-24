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
    unfoldedAll,
    unfoldedFirst
  } = useModelProps();
  
  return useMemo(() => parseItems(items, unfoldedAll, unfoldedFirst), [items, unfoldedAll, unfoldedFirst]);
}