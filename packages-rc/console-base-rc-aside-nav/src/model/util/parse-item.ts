import {
  MouseEvent
} from 'react';

import {
  ECheckFilterResult
} from '../enum';
import {
  INavItemProps,
  IParsedItem,
  TParsedItemOrDivider,
  TSubItemsUnfolded
} from '../types';

import getItemKey from './get-item-key';
import getItemMark from './get-item-mark';
import createDividerItem from './create-divider-item';
import isItemInteractive from './is-item-interactive';
import hasSelectedSubItem from './has-selected-sub-item';
import checkAgainstFilterValue from './check-against-filter-value';

interface IParseOptions {
  subItemsUnfolded: TSubItemsUnfolded;
  filterValue: string;
  onItemClick(item: INavItemProps, e: MouseEvent): void;
  parentCheckResult?: ECheckFilterResult;
  indent?: number;
}

export default function parseItem(o: INavItemProps, options: IParseOptions): IParsedItem | null {
  const {
    subItemsUnfolded,
    filterValue,
    onItemClick,
    parentCheckResult,
    indent = 0
  } = options;
  // 如果父级命中过滤，则子项全部命中
  const checkResult = parentCheckResult === ECheckFilterResult.YES ? ECheckFilterResult.YES : checkAgainstFilterValue(o, filterValue);
  
  if (checkResult === ECheckFilterResult.NO) {
    return null;
  }
  
  const itemParsed: IParsedItem = {
    ...o,
    key: getItemKey(o),
    divider: undefined,
    mark: getItemMark(o),
    indent,
    subItems: o.subItems?.reduce((result: TParsedItemOrDivider[], v, i) => {
      if (!v) {
        return result;
      }
      
      if (v === '-') {
        result.push(createDividerItem(i, indent + 1));
      } else {
        const o2 = parseItem(v, {
          subItemsUnfolded,
          filterValue,
          onItemClick,
          parentCheckResult: checkResult,
          indent: indent + 1
        });
        
        if (o2) {
          result.push(o2);
        }
      }
      
      return result;
    }, []) || []
  };
  
  // 有子菜单项，判断需子菜单的展开行为
  if (itemParsed.subItems.length) {
    if (filterValue) {
      itemParsed.subItemsUnfolded = true;
    } else {
      switch (subItemsUnfolded) {
        case true:
          itemParsed.subItemsUnfolded = itemParsed.subItemsUnfolded ?? true;
          
          break;
        case false:
          itemParsed.subItemsUnfolded = itemParsed.subItemsUnfolded ?? false;
          
          break;
        case 'first-level':
          itemParsed.subItemsUnfolded = itemParsed.subItemsUnfolded ?? indent < 1;
          
          break;
        default:
          break;
      }
    }
  } else if (!isItemInteractive(itemParsed)) { // 没有子菜单，且本身不可操作（无 href、无事件）则忽略该项
    return null;
  }
  
  // 本身未展开，但其下有选中的菜单，则默认打开该菜单（保证选中的默认可见）
  if (!itemParsed.subItemsUnfolded && itemParsed.subItems.length) {
    itemParsed.subItemsUnfolded = hasSelectedSubItem(itemParsed);
  }
  
  // 填充 onClick
  const {
    onClick
  } = itemParsed;
  
  itemParsed.onClick = e => {
    onItemClick(o, e);
    onClick?.(e);
  };
  
  return itemParsed;
}
