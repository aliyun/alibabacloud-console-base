import React from 'react';

import Button, {
  EButtonPreset
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
      preset: EButtonPreset.MENU,
      label,
      href,
      onClick
    }} />)}
  </>;
}
