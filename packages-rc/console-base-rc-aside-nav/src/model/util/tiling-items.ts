import {
  TNavItem
} from '../types';

// 平铺目录树
export default function tilingItems(items: TNavItem[]): TNavItem[] {
  return items.reduce((arr: TNavItem[], v) => {
    if (!v || v === '-') {
      return arr;
    }

    if (!v.subItems?.length) {
      return arr.concat([{
        ...v,
        // TODO 把平铺的 subItems 重置为 undefined
        subItems: undefined
      }]);
    }

    return arr.concat([v], tilingItems(v.subItems));
  }, []);
}
