import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderTertiaryBottom
} from '@alicloud/console-base-theme';

import {
  HEIGHT_MENU_ITEM_IN_FOOTER
} from '../../const';
import {
  IParsedItemInFooter
} from '../../model';
import {
  NavButton
} from '../../rc';

const ScNavItemInFooter = styled(NavButton)`
  height: ${HEIGHT_MENU_ITEM_IN_FOOTER}px;
  line-height: ${HEIGHT_MENU_ITEM_IN_FOOTER}px;
  ${mixinBorderTertiaryBottom}
  
  &:last-child {
    border-bottom: 0;
  }
`;

export default function NavItemInFooter(props: IParsedItemInFooter): JSX.Element {
  const {
    icon,
    ...buttonProps
  } = props;
  
  return <ScNavItemInFooter {...{
    ...buttonProps,
    iconLeft: icon
  }} />;
}
