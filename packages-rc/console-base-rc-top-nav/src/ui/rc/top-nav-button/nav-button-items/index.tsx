import React from 'react';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import {
  useDropdown
} from '@alicloud/console-base-rc-dropdown';

import {
  TopNavButtonDropdownItemProps
} from '../../../../model';

interface IProps {
  items: TopNavButtonDropdownItemProps[];
}

/**
 * 顶栏按钮下拉里的菜单按钮
 */
export default function NavButtonItems({
  items
}: IProps): JSX.Element {
  const {
    hideDrop
  } = useDropdown();
  
  return <>
    {items.map(({
      key,
      onClick,
      ...props
    }: TopNavButtonDropdownItemProps): JSX.Element => <Button {...{
      key,
      ...props,
      spm: key as string,
      theme: ButtonTheme.MENU,
      onClick(e) {
        onClick?.(e);
        hideDrop();
      }
    }} />)}
  </>;
}
