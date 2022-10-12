import {
  INavItemInFooterProps,
  IParsedItemInFooter
} from '../types';

import getItemKey from './get-item-key';
import getItemMark from './get-item-mark';
import isItemInteractive from './is-item-interactive';

export default function parseItemsInFooter(items?: (INavItemInFooterProps | null)[]): IParsedItemInFooter[] {
  return items?.reduce((result: IParsedItemInFooter[], v) => {
    if (v && isItemInteractive(v)) {
      result.push({
        ...v,
        key: getItemKey(v),
        mark: getItemMark(v)
      });
    }
    
    return result;
  }, []) || [];
}