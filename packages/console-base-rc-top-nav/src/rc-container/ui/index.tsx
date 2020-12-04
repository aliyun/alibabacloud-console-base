import React, {
  HTMLAttributes,
  useEffect
} from 'react';
import styled from 'styled-components';

import {
  Z_INDEX,
  LAYOUT,
  typo
} from '@alicloud/console-base-styled-mixin';
import {
  addClass,
  removeClass
} from '@ali/console-base-util-dom';

import {
  CLASS_NAME_HAS_TOP_BAR
} from '../../const';
import Flex from '../../rc/flex';

import Dock from './dock';
import Logo from './logo';
import Menus from './menus';
import Custom from './custom';

const ScBaseFont = styled(Flex)`
  font-size: 12px;
  ${typo.baseFont};
`;

const ScTopNaV = styled(ScBaseFont)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: ${Z_INDEX.TOP_BAR};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  background-color: #fff;
  height: ${LAYOUT.TOP_BAR_HEIGHT}px;
`;

export default function TopNavUi(props: HTMLAttributes<HTMLDivElement>): JSX.Element {
  useEffect(() => {
    addClass(document.body, CLASS_NAME_HAS_TOP_BAR);
    
    return () => removeClass(document.body, CLASS_NAME_HAS_TOP_BAR);
  }, []);
  
  return <ScTopNaV data-spm="top-nav" {...props}>
    <Flex>
      <Dock />
      <Logo />
    </Flex>
    <Custom />
    <Menus />
  </ScTopNaV>;
}
