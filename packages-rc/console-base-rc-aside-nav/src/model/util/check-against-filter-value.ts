import {
  ECheckFilterResult
} from '../enum';
import {
  INavItemProps
} from '../types';

import normalizeValueForFilter from './normalize-value-for-filter';

function check(o: INavItemProps, normalizedFilterValue: string): boolean {
  return [
    o.href,
    o.label,
    ...o.keywords || []
  ].some((v): boolean => {
    if (!v || typeof v !== 'string') {
      return false;
    }
    
    return normalizeValueForFilter(v).includes(normalizedFilterValue);
  });
}

/**
 * 0 无命中
 * 1 本身命中（其下所有子项可见）
 * 2 子项命中（其祖先全可见）
 */
export default function checkAgainstFilterValue(o: INavItemProps, filterValue: string): ECheckFilterResult {
  if (!filterValue) {
    return ECheckFilterResult.YES;
  }
  
  const normalizedFilterValue = normalizeValueForFilter(filterValue);
  
  if (check(o, normalizedFilterValue)) {
    return ECheckFilterResult.YES;
  }
  
  if (o.subItems?.some(v => {
    if (v && v !== '-') {
      return checkAgainstFilterValue(v, filterValue);
    }
    
    return false;
  })) {
    return ECheckFilterResult.CHILD;
  }
  
  return ECheckFilterResult.NO;
}
