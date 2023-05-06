import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTypoEllipsis
} from '@alicloud/console-base-theme';
import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';

import {
  TabsVariant,
  ModelPropsTab,
  useProps,
  useActiveTab,
  useHandleTabActivate
} from '../../../../../../model';
import {
  HEIGHT_TAB,
  MAX_WIDTH_TAB,
  MIN_WIDTH_TAB,
  CSS_TAB_BUTTON_THEME_INVERSE_ACTIVE,
  CSS_TAB_BUTTON_THEME_INVERSE_NORMAL,
  CSS_TAB_BUTTON_THEME_PLAIN_NORMAL,
  CSS_TAB_BUTTON_THEME_PLAIN_ACTIVE
} from '../../../../../const';

interface IProps {
  tab: ModelPropsTab;
}

interface IScProps {
  $variant?: TabsVariant;
  $active?: boolean;
  $closable?: boolean;
}

const ScTabButton = styled(ButtonBase)<IScProps>`
  padding: 0 ${props => (props.$closable ? 28 : 8)}px 0 8px;
  border: 0;
  border-radius: 4px 4px 0 0;
  min-width: ${MIN_WIDTH_TAB}px;
  max-width: ${MAX_WIDTH_TAB}px;
  height: ${HEIGHT_TAB}px;
  ${mixinTypoEllipsis}
  
  ${props => {
    switch (props.$variant) {
      case TabsVariant.INVERSE:
        return props.$active ? CSS_TAB_BUTTON_THEME_INVERSE_ACTIVE : CSS_TAB_BUTTON_THEME_INVERSE_NORMAL;
      default:
        return props.$active ? CSS_TAB_BUTTON_THEME_PLAIN_ACTIVE : CSS_TAB_BUTTON_THEME_PLAIN_NORMAL;
    }
  }}
`;

export default function TabButton({
  tab
}: IProps): JSX.Element {
  const {
    variant
  } = useProps();
  const active = useActiveTab() === tab;
  const handleTabActivate = useHandleTabActivate();
  const handleTabClick = useCallback(() => handleTabActivate(tab), [tab, handleTabActivate]);
  
  return <ScTabButton {...{
    $variant: variant,
    $closable: tab.closable,
    $active: active,
    title: typeof tab.title === 'string' ? tab.title : undefined,
    onClick: handleTabClick
  }}>{tab.title}</ScTabButton>;
}
