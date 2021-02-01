import React from 'react';

import Flex from '../../../rc/flex';
import TopNavButton from '../../../rc/top-nav-button';
import {
  useMenus
} from '../../../model';

export default function Menus(): JSX.Element {
  const menus = useMenus();
  
  return <Flex as="nav">
    {menus.map(({
      key,
      ...props
    }, i): JSX.Element => {
      return <TopNavButton key={key || i} {...{
        spm: key || '',
        ...props
      }} />;
    })}
  </Flex>;
}
