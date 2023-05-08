import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderSecondaryBottom
} from '@alicloud/console-base-theme';

import {
  TabsVariant,
  useProps,
  useRefTabBar,
  useStateNavOffsetMax,
  useHandleTabBarDoubleClick
} from '../../../model';
import {
  TAB_HEIGHT
} from '../../const';

import TabList from './tab-list';
import TabScrollButtons from './tab-scroll-buttons';
import TabExtra from './tab-extra';

interface IScProps {
  $variant?: TabsVariant;
}

// 用 after 代替 border-bottom 以保证内部 button 的 after 元素（表示 active）可以覆盖在上边，而不是看起来有两根线
const ScTabsBar = styled.div<IScProps>`
  display: flex;
  align-items: center;
  position: relative;
  height: ${TAB_HEIGHT}px;
  
  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    height: 1px;
    ${mixinBorderSecondaryBottom}
  }
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
  const refTabBar = useRefTabBar();
  const navOffsetMax = useStateNavOffsetMax();
  const handleTabBarDoubleClick = useHandleTabBarDoubleClick();
  
  return <ScTabsBar {...{
    $variant: variant
  }}>
    <ScTabsBarNavWrapper {...{
      ref: refTabBar,
      className: classNameForTabBar,
      onDoubleClick: handleTabBarDoubleClick
    }}>
      <TabList />
    </ScTabsBarNavWrapper>
    {navOffsetMax < 0 ? <TabScrollButtons /> : null}
    <TabExtra />
  </ScTabsBar>;
}
