import {
  TParsedItemOrDivider
} from '../types';

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