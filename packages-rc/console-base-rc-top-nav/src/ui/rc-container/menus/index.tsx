import React from 'react';

import Flex from '@alicloud/console-base-rc-flex';

import {
  DATA_KEY_J_MENU
} from '../../const';
import {
  useMenuItems
} from '../../hook';
import {
  TopNavButton
} from '../../rc';

export default function Menus(): JSX.Element {
  const menuItems = useMenuItems();
  
  return <Flex as="nav" {...{
    align: 'center',
    [DATA_KEY_J_MENU]: ''
  }}>
    {menuItems.map(({
      key,
      ...props
    }, i): JSX.Element => <TopNavButton key={key || i} {...{
      spm: key || '',
      ...props
    }} />)}
  </Flex>;
}
