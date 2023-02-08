import React from 'react';

import Flex from '@alicloud/console-base-rc-flex';

import {
  TopNavButton
} from '../../../rc';
import {
  useMenus
} from '../../../model';

export default function Menus(): JSX.Element {
  const menus = useMenus();
  
  return <Flex align="center" as="nav">
    {menus.map(({
      key,
      ...props
    }, i): JSX.Element => <TopNavButton key={key || i} {...{
      spm: key || '',
      ...props
    }} />)}
  </Flex>;
}
