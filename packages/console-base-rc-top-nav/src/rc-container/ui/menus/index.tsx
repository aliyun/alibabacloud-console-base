import React from 'react';

import Flex from '../../../rc/flex';
import ButtonInTop from '../../../rc/button-in-top';
import {
  useMenus
} from '../../../model';

export default function Menus(): JSX.Element {
  const menus = useMenus();
  
  return <Flex as="nav">
    {menus.map(({
      key,
      ...props
    }, i): JSX.Element => <ButtonInTop key={key || i} {...{
      spm: key || '',
      ...props
    }} />)}
  </Flex>;
}
