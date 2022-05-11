import React from 'react';
import styled, {
  FlattenSimpleInterpolation,
  css
} from 'styled-components';

import {
  mixinBgAccent
} from '@alicloud/console-base-theme';

import {
  HEIGHT_TAB,
  TAB_TOP_SPACE
} from '../../../../const';
import {
  TabsTheme,
  ModelPropsTab,
  useProps,
  useActiveTab
} from '../../../../model';

import TabButton from './tab-button';
import TabX from './tab-x';

interface IProps {
  tab: ModelPropsTab;
}

interface IScProps {
  tabsTheme: TabsTheme; // 用 theme 会有奇怪的问题，可能跟 sc 本身的 theme 冲突了
  'data-active'?: 1 | '';
  'data-closable'?: 1 | '';
}

function getCssTabItemAfter(props: IScProps): FlattenSimpleInterpolation | null {
  switch (props.tabsTheme) {
    case TabsTheme.INVERSE:
      return css`
  top: 30%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 0, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.05) 100%);
  width: 1px;
  height: 40%;
`;
    default:
      return css`
  bottom: 0;
  left: ${props['data-active'] ? 0 : '50%'};
  width: ${props['data-active'] ? '100%' : 0};
  height: 2px;
  ${mixinBgAccent}
`;
  }
}

const ScTabItem = styled.div<IScProps>`
  display: inline-block;
  position: relative;
  margin-top: ${TAB_TOP_SPACE}px;
  padding-top: 2px;
  max-width: 100%;
  line-height: ${HEIGHT_TAB}px;
  
  &:after {
    content: '';
    position: absolute;
    transition: all linear 200ms;
    ${getCssTabItemAfter}
  }
  
  &:last-child {
    &:after {
      display: ${props => (props.theme === TabsTheme.INVERSE ? 'none' : 'block')};
    }
  }
`;

export default function NavItem({
  tab
}: IProps): JSX.Element {
  const {
    theme,
    classNameForTabItem
  } = useProps();
  const active = useActiveTab() === tab;
  
  return <ScTabItem {...{
    tabsTheme: theme,
    className: classNameForTabItem,
    'data-active': active ? 1 : ''
  }}>
    <TabButton tab={tab} />
    <TabX tab={tab} />
  </ScTabItem>;
}
