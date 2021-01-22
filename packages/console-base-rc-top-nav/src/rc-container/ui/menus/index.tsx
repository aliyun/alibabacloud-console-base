import React from 'react';

import Flex from '../../../rc/flex';
import TopNavButton from '../../../rc/top-nav-button';
import {
  useMenus,
  useHandleMenuMouseEnter,
  useHandleMenuMouseLeave
} from '../../../model';

export default function Menus(): JSX.Element {
  const menus = useMenus();
  const handleMenuMouseEnter = useHandleMenuMouseEnter();
  const handleMenuMouseLeave = useHandleMenuMouseLeave();
  
  return <Flex as="nav">
    {menus.map(({
      key,
      onMouseEnter,
      onMouseLeave,
      ...props
    }, i): JSX.Element => <TopNavButton key={key || i} {...{
      spm: key || '',
      ...props,
      onMouseEnter: e => handleMenuMouseEnter(e, onMouseEnter, key),
      onMouseLeave: e => handleMenuMouseLeave(e, onMouseLeave, key)
    }} />)}
  </Flex>;
}
