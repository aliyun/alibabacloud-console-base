import {
  TParsedItemOrDivider
} from '../types';

/**
 * 预判子树里是否有选中的菜单项
 */
export default function hasSelectedSubItem(item: TParsedItemOrDivider): boolean {
  if (item.divider || !item.subItems.length) {
    return false;
  }
  
  return item.subItems.some(v => {
    if (!v.divider && v.selected) {
      return true;
    }
    
    return hasSelectedSubItem(v);
  });
}
