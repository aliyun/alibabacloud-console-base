import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  Z_INDEX,
  mixinBgPrimary,
  mixinShadowM,
  mixinShadowMDown,
  mixinTypoFontBase
} from '@alicloud/console-base-theme';

import Flex from '../../rc/flex';
import {
  useProps
} from '../../model';

import Dock from './dock';
import Logo from './logo';
import Menus from './menus';
import Custom from './custom';

interface IScPropsTopNav {
  fixed: 0 | 1;
}

const ScTopNaV = styled(Flex)<IScPropsTopNav>`
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  font-size: 12px;
  ${mixinTypoFontBase}
  ${mixinBgPrimary}
  
  ${props => (props.fixed ? css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: ${Z_INDEX.TOP_NAV};
  ` : null)}
  ${props => (props.fixed ? mixinShadowMDown : mixinShadowM)}
`;

export default function TopNavUi(): JSX.Element {
  const {
    fixed,
    uiProps
  } = useProps();
  
  return <ScTopNaV data-spm="top-nav" {...uiProps} fixed={fixed ? 1 : 0}>
    <Flex>
      <Dock />
      <Logo />
    </Flex>
    <Custom />
    <Menus />
  </ScTopNaV>;
}
