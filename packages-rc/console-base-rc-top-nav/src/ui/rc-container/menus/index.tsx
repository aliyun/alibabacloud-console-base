import React from 'react';

import Flex from '@alicloud/console-base-rc-flex';

import {
  useMenuItems
} from '../../hook';
import {
  TopNavButton
} from '../../rc';

export default function Menus(): JSX.Element {
  const menuItems = useMenuItems();
  
  return <Flex align="center" as="nav">
    {menuItems.map(({
      key,
      ...props
    }, i): JSX.Element => <TopNavButton key={key || i} {...{
      spm: key || '',
      ...props
    }} />)}
  </Flex>;
}
