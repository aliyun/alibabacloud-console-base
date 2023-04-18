import {
  MouseEvent
} from 'react';

import {
  INavItemProps,
  TNavItem,
  TSubItemsUnfolded,
  TParsedItemOrDivider
} from '../types';

import createDividerItem from './create-divider-item';
import parseItem from './parse-item';

export default function parseItems(items: TNavItem[], subItemsUnfolded: TSubItemsUnfolded, filterValue: string, onItemClick: (item: INavItemProps, e: MouseEvent) => void): TParsedItemOrDivider[] {
  const itemsParsed: TParsedItemOrDivider[] = [];
  let lastIsDivider = true; // 用于 '-' 掐头
  
  // 对 divider 进行去重和掐头去尾
  items.forEach((v, i) => {
    if (!v) {
      return;
    }
    
    if (v === '-') {
      if (!lastIsDivider) {
        lastIsDivider = true;
        itemsParsed.push(createDividerItem(i, 0));
      }
    } else {
      const o = parseItem(v, {
        subItemsUnfolded,
        filterValue,
        onItemClick
      });
      
      if (o) {
        lastIsDivider = false;
        itemsParsed.push(o);
      }
    }
  });
  
  // '-' 去尾
  if (itemsParsed.length && itemsParsed[itemsParsed.length - 1]?.divider) {
    itemsParsed.pop();
  }
  
  return itemsParsed;
}
