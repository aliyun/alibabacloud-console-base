import React from 'react';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  ModelPropsButtonDropdownItem
} from '../../../../model';

interface IProps {
  items: ModelPropsButtonDropdownItem[];
}

/**
 * 顶栏按钮下拉里的菜单按钮
 */
export default function NavButtonItems({
  items
}: IProps): JSX.Element {
  return <>
    {items.map(({
      key,
      label,
      href,
      onClick
    }: ModelPropsButtonDropdownItem): JSX.Element => <Button {...{
      key,
      spm: key as string,
      theme: ButtonTheme.MENU,
      label,
      href,
      onClick
    }} />)}
  </>;
}
