import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBorderTertiaryBottom
} from '@alicloud/console-base-theme';

import {
  HEIGHT_TAB_BAR,
  BGC_TAB_BAR
} from '../../const';
import {
  TabsTheme,
  useProps,
  useStateNavOffsetMax
} from '../../model';

import Nav from './nav';
import Scroller from './scroller';

const ScTabsBar = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: ${HEIGHT_TAB_BAR}px;
  ${props => {
    switch (props.theme) {
      case TabsTheme.INVERSE:
        return css`
          background-color: ${BGC_TAB_BAR};
        `;
      default:
        return mixinBorderTertiaryBottom;
    }
  }}
`;

const ScTabsBarNavWrapper = styled.div`
  flex: 1;
  overflow: hidden;
`;

export default function TabsBar(): JSX.Element {
  const {
    theme,
    classNameForTabBar
  } = useProps();
  const navOffsetMax = useStateNavOffsetMax();
  
  return <ScTabsBar theme={theme} className={classNameForTabBar}>
    <ScTabsBarNavWrapper>
      <Nav />
    </ScTabsBarNavWrapper>
    {navOffsetMax < 0 ? <Scroller /> : null}
  </ScTabsBar>;
}
