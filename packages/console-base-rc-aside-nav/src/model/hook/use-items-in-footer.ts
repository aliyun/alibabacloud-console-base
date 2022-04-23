import {
  useMemo
} from 'react';

import {
  INavItemInFooterPropsParsed
} from '../types';
import {
  parseItemsInFooter
} from '../util';

import useModelProps from './_use-model-props';

export default function useItemsInFooter(): INavItemInFooterPropsParsed[] {
  const {
    itemsInFooter
  } = useModelProps();
  
  return useMemo(() => parseItemsInFooter(itemsInFooter), [itemsInFooter]);
}