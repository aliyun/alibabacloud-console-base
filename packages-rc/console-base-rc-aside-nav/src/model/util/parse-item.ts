import {
  ECheckFilterResult
} from '../enum';
import {
  IParsedItem, TNavItem,
  TParsedItemOrDivider,
  TUnfoldMode
} from '../types';

import getItemKey from './get-item-key';
import getItemMark from './get-item-mark';
import createDividerItem from './create-divider-item';
import isItemInteractive from './is-item-interactive';
import hasSelectedSubItem from './has-selected-sub-item';
import checkAgainstFilterValue from './check-against-filter-value';

interface IParseOptions {
  defaultUnfolded: TUnfoldMode;
  filterValue: string;
  // onItemClick(item: INavItemProps, e: MouseEvent): void;
  parentCheckResult?: ECheckFilterResult;
  indexes: number[];
  indent?: number;
}

export default function parseItem(o: TNavItem, options: IParseOptions): TParsedItemOrDivider | null {
  if (!o) {
    return null;
  }
  
  const {
    defaultUnfolded,
    filterValue,
    // onItemClick,
    parentCheckResult,
    indexes,
    indent = 0
  } = options;
  
  if (o === '-') {
    return createDividerItem(indexes, indent);
  }
  
  // 如果父级命中过滤，则子项全部命中
  const checkResult = parentCheckResult === ECheckFilterResult.YES ? ECheckFilterResult.YES : checkAgainstFilterValue(o, filterValue);
  
  if (checkResult === ECheckFilterResult.NO) {
    return null;
  }
  
  const itemParsed: IParsedItem = {
    ...o,
    key: getItemKey(o),
    props: o,
    divider: undefined,
    mark: getItemMark(o),
    indent,
    subItems: o.subItems?.reduce((result: TParsedItemOrDivider[], v, i) => {
      const o2 = parseItem(v, {
        defaultUnfolded,
        filterValue,
        parentCheckResult: checkResult,
        indexes: [...indexes, i],
        indent: indent + 1
      });
      
      if (o2) {
        result.push(o2);
      }
      
      return result;
    }, []) || []
  };
  
  // 有子菜单项，判断需子菜单的展开行为
  if (itemParsed.subItems.length) {
    if (filterValue) {
      itemParsed.defaultUnfolded = true;
    } else {
      switch (defaultUnfolded) {
        case true:
          itemParsed.defaultUnfolded = itemParsed.defaultUnfolded ?? true;
          
          break;
        case false:
          itemParsed.defaultUnfolded = itemParsed.defaultUnfolded ?? false;
          
          break;
        case 'first-level':
          itemParsed.defaultUnfolded = itemParsed.defaultUnfolded ?? indent < 1;
          
          break;
        default:
          break;
      }
    }
  } else if (!isItemInteractive(itemParsed)) { // 没有子菜单，且本身不可操作（无 href、无事件）则忽略该项
    return null;
  }
  
  // 本身未展开，但其下有选中的菜单，则默认打开该菜单（保证选中的默认可见）
  if (!itemParsed.defaultUnfolded && itemParsed.subItems.length) {
    itemParsed.defaultUnfolded = hasSelectedSubItem(itemParsed);
  }
  
  return itemParsed;
}
