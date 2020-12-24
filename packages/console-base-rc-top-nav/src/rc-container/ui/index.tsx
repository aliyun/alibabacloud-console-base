import React, {
  HTMLAttributes
} from 'react';
import styled from 'styled-components';

import {
  COLOR,
  SHADOW,
  SIZE,
  Z_INDEX
} from '@alicloud/console-base-theme';
import {
  typo
} from '@alicloud/console-base-styled-mixin';

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
  box-shadow: ${SHADOW.M_DOWN};
  box-shadow: var(--cb-shadow-m-down, ${SHADOW.M_DOWN});
  background-color: ${COLOR.FILL_NAV_LEVEL1};
  background-color: var(--cb-color-fill-nav-level1, ${COLOR.FILL_NAV_LEVEL1});
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  font-size: 12px;
  ${typo.baseFont};
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
