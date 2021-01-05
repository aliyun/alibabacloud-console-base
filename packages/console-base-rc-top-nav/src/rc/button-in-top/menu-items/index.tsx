import React from 'react';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  ITopNavButtonDropdownItem
} from '../../../types';

interface IProps {
  items: ITopNavButtonDropdownItem[];
}

export default function MenuItems({
  items
}: IProps): JSX.Element {
  return <>
    {items.map(({
      key,
      label,
      href,
      onClick
    }: ITopNavButtonDropdownItem): JSX.Element => <Button {...{
      key,
      spm: key as string,
      theme: ButtonTheme.MENU,
      label,
      href,
      onClick
    }} />)}
  </>;
}
