import React from 'react';
import styled from 'styled-components';
import {
  CSSTransition
} from 'react-transition-group';

import {
  mixinTextPrimary,
  mixinBorderTertiary,
  mixinBgPrimary,
  mixinShadowLDown
} from '@alicloud/console-base-theme';
import {
  FontBase12
} from '@alicloud/console-base-theme-sc-base';

import {
  useRefDrop,
  useDropVisible,
  useDropStyle
} from '../../../model';

import Header from './header';
import Body from './body';
import Footer from './footer';

const ScDrop = styled(FontBase12)`
  display: block;
  position: absolute;
  box-sizing: border-box;
  min-width: 120px;
  font-size: 12px;
  transition: all ease-in-out 300ms;
  ${mixinTextPrimary}
  ${mixinBorderTertiary}
  ${mixinBgPrimary}
  ${mixinShadowLDown}
  
  &.enter,
  &.exit-active {
    opacity: 0;
    transform: translate(0, 10px);
  }
  
  &.enter-active,
  &.exit {
    opacity: 1;
  }
`;

export default function TheDrop(): JSX.Element {
  const refDrop = useRefDrop();
  const dropVisible = useDropVisible();
  const dropStyle = useDropStyle();
  
  return <CSSTransition {...{
    in: dropVisible,
    unmountOnExit: true,
    timeout: {
      enter: 10,
      exit: 300
    }
  }}>
    <ScDrop style={dropStyle} ref={refDrop}>
      <Header />
      <Body />
      <Footer />
    </ScDrop>
  </CSSTransition>;
}
