import {
  ITopNavButtonDropdownItem
} from '../types';

export default function parseDropdownItems(items: ITopNavButtonDropdownItem[]): [ITopNavButtonDropdownItem[], ITopNavButtonDropdownItem[]] {
  const itemsInBody: ITopNavButtonDropdownItem[] = [];
  const itemsInFooter: ITopNavButtonDropdownItem[] = [];
  
  items.forEach((v: ITopNavButtonDropdownItem, i: number) => {
    if (!v) {
      return;
    }
    
    const {
      key,
      inFooter,
      ...restProps
    } = v;
    
    if (!v.href && !v.onClick) {
      return;
    }
    
    const solidItem: ITopNavButtonDropdownItem = {
      ...restProps,
      key: `item-${key || i}`
    };
    
    if (inFooter) {
      itemsInFooter.push(solidItem);
    } else {
      itemsInBody.push(solidItem);
    }
  });
  
  // 如果 itemsInBody 没有东西，则调换顺序（这样，如果 itemsInFooter 就可以被展示于 body 中）
  return itemsInBody.length ? [itemsInBody, itemsInFooter] : [itemsInFooter, itemsInBody];
}
