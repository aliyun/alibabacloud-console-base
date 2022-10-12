import React from 'react';
import styled from 'styled-components';

import {
  IParsedItem
} from '../../model';
import {
  HEIGHT_MENU_ITEM
} from '../../const';
import NavButton from '../../rc/nav-button';

const ScNavItem = styled(NavButton)`
  height: ${HEIGHT_MENU_ITEM}px;
  line-height: ${HEIGHT_MENU_ITEM}px;
`;

export default function NavItem(props: IParsedItem): JSX.Element {
  const {
    subItems, // 这里忽略
    icon,
    ...buttonProps
  } = props;
  
  return <ScNavItem {...{
    ...buttonProps,
    iconLeft: icon
  }} />;
}
