import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderSecondaryBottom
} from '@alicloud/console-base-theme';

import {
  TabsVariant,
  useProps,
  useStateNavOffsetMax
} from '../../../model';
import {
  TAB_HEIGHT
} from '../../const';

import TabList from './tab-list';
import TabScrollButtons from './tab-scroll-buttons';

interface IScProps {
  $variant?: TabsVariant;
}

// ${props => {
//     switch (props.$variant) {
//       case TabsVariant.BROWSER:
//         return css`
//           background-color: ${BGC_TAB_BAR};
// `;
//       default:
//         return mixinBorderSecondaryBottom;
//     }
//   }}
// 用 after 代替 border-bottom 以保证内部 button 的 after 元素（表示 active）可以覆盖在上边，而不是看起来有两根线
const ScTabsBar = styled.div<IScProps>`
  display: flex;
  align-items: flex-end;
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
  const navOffsetMax = useStateNavOffsetMax();
  
  return <ScTabsBar $variant={variant} className={classNameForTabBar}>
    <ScTabsBarNavWrapper>
      <TabList />
    </ScTabsBarNavWrapper>
    {navOffsetMax < 0 ? <TabScrollButtons /> : null}
  </ScTabsBar>;
}
