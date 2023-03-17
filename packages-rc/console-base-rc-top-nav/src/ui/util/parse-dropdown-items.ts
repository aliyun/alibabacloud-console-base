import {
  TopNavButtonDropdownItemProps
} from '../../model';

export default function parseDropdownItems(items: TopNavButtonDropdownItemProps[]): [TopNavButtonDropdownItemProps[], TopNavButtonDropdownItemProps[]] {
  const itemsInBody: TopNavButtonDropdownItemProps[] = [];
  const itemsInFooter: TopNavButtonDropdownItemProps[] = [];
  
  items.forEach((v: TopNavButtonDropdownItemProps, i: number) => {
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
    
    const solidItem: TopNavButtonDropdownItemProps = {
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
