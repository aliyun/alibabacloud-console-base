import {
  useMemo
} from 'react';

import {
  INavItemProps,
  IParsedDivider,
  IParsedItem,
  TParsedItemOrDivider
} from '../types';
import {
  getItemKey,
  getItemMark,
  isItemInteractive,
  hasSelectedSubItem
} from '../util';

import useModelProps from './_use-model-props';
import useHandleItemClick from './use-handle-item-click';

function createDivider(index: number, indent: number): IParsedDivider {
  return {
    key: `divider-${index}`,
    divider: true,
    indent
  };
}

export default function useItems(): TParsedItemOrDivider[] {
  const {
    items,
    subItemsUnfolded
  } = useModelProps();
  const handleItemClick = useHandleItemClick();
  
  return useMemo(() => {
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
            result.push(createDivider(i, indent + 1));
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
      
      const {
        onClick
      } = itemParsed;
      
      itemParsed.onClick = e => {
        handleItemClick(o, e);
        onClick?.(e);
      };
    
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
          itemsParsed.push(createDivider(i, 0));
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
  }, [items, subItemsUnfolded, handleItemClick]);
}
