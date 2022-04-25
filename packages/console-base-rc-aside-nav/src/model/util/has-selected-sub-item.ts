import {
  INavItemPropsParsed
} from '../types';

export default function hasSelectedSubItem(item: INavItemPropsParsed): boolean {
  if (!item.subItems.length) {
    return false;
  }
  
  return item.subItems.some(v => {
    if (v.selected) {
      return true;
    }
    
    return hasSelectedSubItem(v);
  });
}