import {
  TNavItem
} from '../types';

// 平铺目录树
export default function flattenItems(items: TNavItem[]): TNavItem[] {
  return items.reduce((arr: TNavItem[], v) => {
    if (!v || v === '-') {
      return arr;
    }

    if (!v.subItems?.length) {
      return arr.concat([{
        ...v,
        subItems: undefined
      }]);
    }

    return arr.concat([v], flattenItems(v.subItems));
  }, []);
}
