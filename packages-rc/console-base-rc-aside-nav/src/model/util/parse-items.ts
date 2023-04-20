import {
  MouseEvent
} from 'react';

import {
  INavItemProps,
  TNavItem,
  TUnfoldMode,
  TParsedItemOrDivider
} from '../types';

import parseItem from './parse-item';
import isItemInteractive from './is-item-interactive';

function cleanup(list: TParsedItemOrDivider[], onItemClick: (item: INavItemProps, e: MouseEvent) => void): TParsedItemOrDivider[] {
  let lastIsDivider = true; // 用于 '-' 掐头
  
  const list2 = list.reduce((result: TParsedItemOrDivider[], v) => {
    if (v.divider) {
      if (!lastIsDivider) {
        lastIsDivider = true;
        result.push(v);
      }
    } else {
      v.subItems = cleanup(v.subItems, onItemClick);
      
      // 没有子项且没有操作的，忽略
      if (v.subItems.length || isItemInteractive(v)) {
        const {
          onClick
        } = v;
        
        v.onClick = e => { // 填充 onClick
          onItemClick(v.props, e);
          onClick?.(e);
        };
  
        lastIsDivider = false;
        result.push(v);
      }
    }
    
    return result;
  }, []);
  
  // '-' 去尾
  if (list2.length && list2[list2.length - 1]?.divider) {
    list2.pop();
  }
  
  return list2;
}

export default function parseItems(items: TNavItem[], defaultUnfolded: TUnfoldMode, filterValue: string, onItemClick: (item: INavItemProps, e: MouseEvent) => void): TParsedItemOrDivider[] {
  // 第一次遍历转换，会出现重复和头尾的分割线
  const itemsParsed: TParsedItemOrDivider[] = items.reduce((result: TParsedItemOrDivider[], v, i) => {
    const o = parseItem(v, {
      defaultUnfolded,
      filterValue,
      // onItemClick,
      indexes: [i]
    });
    
    if (o) {
      result.push(o);
    }
    
    return result;
  }, []);
  
  // 第二次遍历，对 divider 进行去重和掐头去尾
  return cleanup(itemsParsed, onItemClick);
}
