import React from 'react';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  IDropdownItem
} from '../../../types';

interface IProps {
  items: IDropdownItem[];
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
    }: IDropdownItem): JSX.Element => <Button {...{
      key,
      spm: key as string,
      theme: ButtonTheme.MENU,
      label,
      href,
      onClick
    }} />)}
  </>;
}
