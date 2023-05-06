import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBorderTertiaryBottom
} from '@alicloud/console-base-theme';

import {
  TabsVariant,
  useProps,
  useStateNavOffsetMax
} from '../../../model';
import {
  HEIGHT_TAB,
  BGC_TAB_BAR
} from '../../const';

import TabList from './tab-list';
import Scroller from './scroller';

interface IScProps {
  $variant?: TabsVariant;
}

const ScTabsBar = styled.div<IScProps>`
  display: flex;
  align-items: flex-end;
  position: relative;
  width: 100%;
  height: ${HEIGHT_TAB}px;
  ${props => {
    switch (props.$variant) {
      case TabsVariant.BROWSER:
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
    variant,
    classNameForTabBar
  } = useProps();
  const navOffsetMax = useStateNavOffsetMax();
  
  return <ScTabsBar $variant={variant} className={classNameForTabBar}>
    <ScTabsBarNavWrapper>
      <TabList />
    </ScTabsBarNavWrapper>
    {navOffsetMax < 0 ? <Scroller /> : null}
  </ScTabsBar>;
}
