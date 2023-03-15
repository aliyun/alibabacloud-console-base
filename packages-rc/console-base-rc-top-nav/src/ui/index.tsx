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
import Flex from '@alicloud/console-base-rc-flex';

import {
  useProps
} from '../model';

import {
  DATA_ATTR_KEY
} from './const';
import {
  GlobalStyleForFixed,
  Dock,
  Logo,
  LogoExtra,
  Menus,
  Custom
} from './rc-container';

interface IScPropsTopNav {
  $fixed?: boolean;
}

const ScTopNaV = styled(Flex)<IScPropsTopNav>`
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  font-size: 12px;
  ${mixinTypoFontBase}
  ${mixinBgPrimary}
  
  ${props => (props.$fixed ? css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: ${Z_INDEX.TOP_NAV};
  ` : null)}
  ${props => (props.$fixed ? mixinShadowMDown : mixinShadowM)}
  
  .theme-dark & {
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.16), 0 4px 8px 0 rgba(0, 0, 0, 0.32);
  }
`;

export default function Ui(): JSX.Element {
  const {
    id,
    className,
    fixed
  } = useProps();
  
  return <>
    <GlobalStyleForFixed />
    <ScTopNaV {...{
      $fixed: fixed,
      id,
      className: `${className || ''} J_fixed_right_will_be_pushed_left`.trim(), // 注意：和 micro-browser 有耦合，可以忍
      align: 'center',
      'data-spm': 'top-nav',
      [DATA_ATTR_KEY]: ''
    }}>
      <Flex align="center">
        <Dock />
        <Logo />
        <LogoExtra />
      </Flex>
      <Custom />
      <Menus />
    </ScTopNaV>
  </>;
}
