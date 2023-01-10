import {
  TNavItem,
  INavItemProps
} from '../types';

function filterNavItem(o: INavItemProps, value: string): INavItemProps {
  const item = {
    ...o,
    subItems: o.subItems?.reduce((result: INavItemProps[], v) => {
      if (!v || v === '-') {
        return result;
      }

      if (v.subItems?.length) {
        const o2 = filterNavItem(v, value);

        if (o2.subItems?.length) {
          result.push(o2);
        }
      }

      if ((v.label as string).indexOf(value) !== -1 || (v.keywords && v.keywords.indexOf(value) !== -1)) {
        result.push(v);
      }

      return result;
    }, [])
  };

  return item;
}

export default function filterNavItems(items: TNavItem[], value: string): TNavItem[] {
  if (!value) {
    return [];
  }

  const itemsParsed: TNavItem[] = [];

  items.forEach(v => {
    if (!v || v === '-') {
      return;
    }

    itemsParsed.push('-');

    // TODO 匹配父菜单
    if ((v.label as string).indexOf(value) !== -1 || (v.keywords && v.keywords.indexOf(value) !== -1)) {
      itemsParsed.push(v);

      return itemsParsed;
    }

    if (v.subItems) {
      const o = filterNavItem(v, value);

      // TODO 不符合条件的不加入
      if (o.subItems?.length) {
        itemsParsed.push({
          ...o
        });
      }
    }
  });

  return itemsParsed;
}
