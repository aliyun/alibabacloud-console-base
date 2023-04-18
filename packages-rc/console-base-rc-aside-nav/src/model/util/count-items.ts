import {
  TNavItem
} from '../types';

function count(o: TNavItem): number {
  if (!o || o === '-') {
    return 0;
  }
  
  if (!o.subItems?.length) {
    return 1;
  }
  
  return 1 + o.subItems.reduce((result, v) => {
    return result + count(v);
  }, 0);
}

export default function countItems(items: TNavItem[]): number {
  return items.reduce((result, v) => {
    return result + count(v);
  }, 0);
}
