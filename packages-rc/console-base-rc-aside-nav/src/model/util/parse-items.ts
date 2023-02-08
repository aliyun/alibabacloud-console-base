import {
  TSubItemsUnfolded,
  INavItemProps,
  IParsedItem,
  TNavItem,
  TParsedItemOrDivider
} from '../types';

import getItemKey from './get-item-key';
import getItemMark from './get-item-mark';
import isItemInteractive from './is-item-interactive';
import hasSelectedSubItem from './has-selected-sub-item';

export default function parseItems(items: TNavItem[], subItemsUnfolded: TSubItemsUnfolded): TParsedItemOrDivider[] {
  const itemsParsed: TParsedItemOrDivider[] = [];
  let lastIsDivider = true; // 用于 '-' 掐头
  let firstSub = true;
  
  function parseNavItem(o: INavItemProps, indent = 0): IParsedItem | null {
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
          result.push({
            key: `divider-${i}`,
            divider: true,
            indent: indent + 1
          });
        } else {
          const o2 = parseNavItem(v, indent + 1);
          
          if (o2) {
            result.push(o2);
          }
        }
        
        return result;
      }, []) || []
    };
    
    if (itemParsed.subItems.length) {
      switch (subItemsUnfolded) {
        case true:
          itemParsed.subItemsUnfolded = itemParsed.subItemsUnfolded ?? true;
          
          break;
        case false:
          itemParsed.subItemsUnfolded = itemParsed.subItemsUnfolded ?? false;
          
          break;
        case 'fist':
          itemParsed.subItemsUnfolded = itemParsed.subItemsUnfolded ?? firstSub;
          
          break;
        case 'first-level':
          itemParsed.subItemsUnfolded = itemParsed.subItemsUnfolded ?? indent < 1;
          
          break;
        default:
          break;
      }
      
      firstSub = false;
    }
    
    if (!itemParsed.subItems.length && !isItemInteractive(itemParsed)) {
      return null;
    }
  
    // 本身未展开，但其下有选中的菜单，则默认打开该菜单（保证选中的默认可见）
    if (!itemParsed.subItemsUnfolded && itemParsed.subItems.length) {
      itemParsed.subItemsUnfolded = hasSelectedSubItem(itemParsed);
    }
    
    return itemParsed;
  }
  
  // 对 divider 进行去重和掐头去尾
  items.forEach((v, i) => {
    if (!v) {
      return;
    }
    
    if (v === '-') {
      if (!lastIsDivider) {
        lastIsDivider = true;
        itemsParsed.push({
          key: `divider-${i}`,
          divider: true,
          indent: 0
        });
      }
    } else {
      const o = parseNavItem(v);
      
      if (o) {
        lastIsDivider = false;
        itemsParsed.push(o);
      }
    }
  });
  
  // '-' 去尾
  if (itemsParsed[itemsParsed.length - 1]!.divider) { // eslint-disable-line @typescript-eslint/no-non-null-assertion
    itemsParsed.pop();
  }
  
  return itemsParsed;
}