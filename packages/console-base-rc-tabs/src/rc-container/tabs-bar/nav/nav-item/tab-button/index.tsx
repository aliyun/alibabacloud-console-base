import React, {
  useCallback
} from 'react';
import styled, {
  FlattenSimpleInterpolation
} from 'styled-components';

import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';
import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';

import {
  HEIGHT_TAB,
  MAX_WIDTH_TAB,
  MIN_WIDTH_TAB,
  CSS_TAB_BUTTON_THEME_INVERSE_ACTIVE,
  CSS_TAB_BUTTON_THEME_INVERSE_NORMAL,
  CSS_TAB_BUTTON_THEME_PLAIN_NORMAL,
  CSS_TAB_BUTTON_THEME_PLAIN_ACTIVE
} from '../../../../../const';
import {
  TabsTheme,
  ModelPropsTab,
  useProps,
  useActiveTab,
  useHandleTabActivate
} from '../../../../../model';

interface IProps {
  tab: ModelPropsTab;
}

interface IScProps {
  tabsTheme: TabsTheme; // 用 theme 会有奇怪的问题，可能跟 sc 本身的 theme 冲突了
  'data-active'?: 1 | '';
  'data-closable'?: 1 | '';
}

function getCssTab(props: IScProps): FlattenSimpleInterpolation | null {
  switch (props.tabsTheme) {
    case TabsTheme.INVERSE:
      return props['data-active'] ? CSS_TAB_BUTTON_THEME_INVERSE_ACTIVE : CSS_TAB_BUTTON_THEME_INVERSE_NORMAL;
    default:
      return props['data-active'] ? CSS_TAB_BUTTON_THEME_PLAIN_ACTIVE : CSS_TAB_BUTTON_THEME_PLAIN_NORMAL;
  }
}

const ScTabButton = styled(ButtonBase)<IScProps>`
  padding: 0 ${props => (props['data-closable'] ? 28 : 8)}px 0 8px;
  border: 0;
  border-radius: 4px 4px 0 0;
  min-width: ${MIN_WIDTH_TAB}px;
  max-width: ${MAX_WIDTH_TAB}px;
  height: ${HEIGHT_TAB}px;
  ${mixinTypoEllipsis}
  ${getCssTab}
`;

export default function TabButton({
  tab
}: IProps): JSX.Element {
  const {
    theme
  } = useProps();
  const active = useActiveTab() === tab;
  const handleTabActivate = useHandleTabActivate();
  const handleTabClick = useCallback(() => handleTabActivate(tab), [tab, handleTabActivate]);
  
  return <ScTabButton {...{
    tabsTheme: theme,
    'data-closable': tab.closable ? 1 : '',
    'data-active': active ? 1 : '',
    title: typeof tab.title === 'string' ? tab.title : undefined,
    onClick: handleTabClick
  }}>{tab.title}</ScTabButton>;
}
