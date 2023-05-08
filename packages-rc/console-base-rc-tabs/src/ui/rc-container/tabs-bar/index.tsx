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
const ScTabsBar = styled.div<IScProps>`
  display: flex;
  align-items: flex-end;
  position: relative;
  height: ${TAB_HEIGHT}px;
  ${mixinBorderSecondaryBottom}
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
