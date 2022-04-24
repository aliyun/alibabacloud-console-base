import {
  TSubItemsUnfolded,
  INavItemProps,
  INavItemPropsParsed,
  TNavItem
} from '../types';

import getItemKey from './get-item-key';
import getItemMark from './get-item-mark';
import isItemInteractive from './is-item-interactive';

export default function parseItems(items: TNavItem[], subItemsUnfolded: TSubItemsUnfolded): (INavItemPropsParsed | '-')[] {
  const itemsParsed: (INavItemPropsParsed | '-')[] = [];
  let lastIsDivider = true; // 用于 '-' 掐头
  let firstSub = true;
  
  function parseNavItem(o: INavItemProps, indent = 0): INavItemPropsParsed | null {
    const itemParsed = {
      ...o,
      key: getItemKey(o),
      mark: getItemMark(o),
      indent,
      subItems: o.subItems?.reduce((result: INavItemPropsParsed[], v) => {
        if (!v || typeof v !== 'object') {
          return result;
        }
        
        const o2 = parseNavItem(v, indent + 1);
        
        if (o2) {
          result.push(o2);
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
    
    return itemParsed;
  }
  
  // 对 separator 进行去重和掐头去尾
  items.forEach(v => {
    if (!v) {
      return;
    }
    
    if (v === '-') {
      if (!lastIsDivider) {
        lastIsDivider = true;
        itemsParsed.push(v);
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
  if (itemsParsed[itemsParsed.length - 1] === '-') {
    itemsParsed.pop();
  }
  
  return itemsParsed;
}