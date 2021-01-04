import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  SIZE,
  Z_INDEX,
  mixinBgPrimary,
  mixinShadowMDown,
  mixinTypoFontBase
} from '@alicloud/console-base-theme';

import Flex from '../../rc/flex';

import Dock from './dock';
import Logo from './logo';
import Menus from './menus';
import Custom from './custom';

const ScTopNaV = styled(Flex)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${Z_INDEX.TOP_NAV};
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  font-size: 12px;
  ${mixinTypoFontBase}
  ${mixinBgPrimary}
  ${mixinShadowMDown}
`;

export default function TopNavUi(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return <ScTopNaV data-spm="top-nav" {...props}>
    <Flex>
      <Dock />
      <Logo />
    </Flex>
    <Custom />
    <Menus />
  </ScTopNaV>;
}
