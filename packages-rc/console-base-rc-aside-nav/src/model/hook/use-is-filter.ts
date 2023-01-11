/* eslint-disable array-callback-return */
import {
  useMemo
} from 'react';

import {
  tilingItems
} from '../util';

import useModelProps from './_use-model-props';

/**
 * 是否搜索
 */
export default function useIsFilter(): boolean {
  const {
    items,
    minItemsForSearch = 10
  } = useModelProps();
  const navLength = tilingItems(items).length;

  return useMemo(() => {
    if (minItemsForSearch <= 0) {
      return false;
    }

    if (minItemsForSearch >= navLength) {
      return false;
    }

    return true;
  }, [navLength, minItemsForSearch]);
}
