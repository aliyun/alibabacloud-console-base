import {
  flatItems
} from '../util';

import useModelProps from './_use-model-props';

export default function useMinItemsForSearch(): boolean {
  const {
    items,
    minItemsForSearch = 10
  } = useModelProps();
  const navLength = flatItems(items).length;

  if (minItemsForSearch <= 0) {
    return false;
  }

  if (minItemsForSearch >= navLength) {
    return false;
  }

  return true;
}
