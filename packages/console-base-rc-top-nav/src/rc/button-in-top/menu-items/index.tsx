import React from 'react';

import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  IPropsTopNavButtonDropdownItem
} from '../../../types';

interface IProps {
  items: IPropsTopNavButtonDropdownItem[];
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
    }: IPropsTopNavButtonDropdownItem): JSX.Element => <Button {...{
      key,
      spm: key as string,
      theme: ButtonTheme.MENU,
      label,
      href,
      onClick
    }} />)}
  </>;
}
