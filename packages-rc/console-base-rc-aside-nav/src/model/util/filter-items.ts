import {
  isValidElement
} from 'react';

import {
  TNavItem,
  INavItemProps
} from '../types';

function filterNavItem(o: INavItemProps, value: string): INavItemProps {
  const item = {
    ...o,
    subItems: o.subItems?.reduce((result: INavItemProps[], v) => {
      if (!v || v === '-' || isValidElement(v.label)) {
        return result;
      }

      if ((v.label as string).indexOf(value) !== -1 || (v.keywords && v.keywords.indexOf(value) !== -1)) {
        result.push(v);

        return result;
      }

      if (v.subItems?.length) {
        const o2 = filterNavItem(v, value);

        if (o2.subItems?.length) {
          result.push(o2);
        }
      }

      return result;
    }, [])
  };

  return item;
}

export default function filterItems(items: TNavItem[], value: string): TNavItem[] {
  if (!value) {
    return [];
  }

  const filters: TNavItem[] = [];

  items.forEach(v => {
    if (!v || v === '-' || isValidElement(v.label)) {
      return;
    }

    if ((v.label as string).indexOf(value) !== -1 || (v.keywords && v.keywords.indexOf(value) !== -1)) {
      filters.push(v);

      return filters;
    }

    if (v.subItems) {
      const o = filterNavItem(v, value);

      if (o.subItems?.length) {
        filters.push({
          ...o
        });
      }
    }
  });

  // 给过滤出来的每个 item 加 -
  return filters.reduce((result: TNavItem[], item) => {
    result.push(item, '-');

    return result;
  }, []);
}
