import {
  useMemo
} from 'react';

import {
  IParsedItemInFooter
} from '../types';
import {
  parseItemsInFooter
} from '../util';

import useModelProps from './_use-model-props';

export default function useItemsInFooter(): IParsedItemInFooter[] {
  const {
    itemsInFooter
  } = useModelProps();
  
  return useMemo(() => parseItemsInFooter(itemsInFooter), [itemsInFooter]);
}