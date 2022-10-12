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
  
  return <ScTopNaV {...{
    'data-spm': 'top-nav',
    id,
    align: 'center',
    className: `${className || ''} J_fixed_right_will_be_pushed_left`.trim(), // 注意：和 one-modal 中有耦合，可以忍
    fixed: fixed ? 1 : 0
  }}>
    <Flex align="center">
      <Dock />
      <Logo />
    </Flex>
    <Custom />
    <Menus />
  </ScTopNaV>;
}
