import React, {
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTypoEllipsis,
  mixinTextAccent,
  mixinTextSecondary,
  mixinBgSecondary
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
  TAB_HEIGHT,
  TAB_PADDING,
  TAB_X_SIZE,
  MAX_WIDTH_TAB,
  TAB_MIN_WIDTH,
  BGC_TAB_ACTIVE,
  BGC_TAB_ACTIVE_DARK,
  FGC_TAB_ACTIVE,
  FGC_TAB_ACTIVE_DARK
} from '../../../../../const';

interface IProps {
  tab: ModelPropsTab;
}

interface IScProps {
  $variant?: TabsVariant;
  $active?: boolean;
  $closable?: boolean;
}

const CSS_TAB_BUTTON_VARIANT_PLAIN_NORMAL = css`
  &:hover {
    ${mixinTextAccent}
  }
`;

const CSS_TAB_BUTTON_VARIANT_BROWSER_NORMAL = css`
  ${mixinBgSecondary}
  ${mixinTextSecondary}
`;

const CSS_TAB_BUTTON_VARIANT_BROWSER_ACTIVE = css`
  background-color: ${BGC_TAB_ACTIVE};
  color: ${FGC_TAB_ACTIVE};
  
  .theme-dark && {
    background-color: ${BGC_TAB_ACTIVE_DARK};
    color: ${FGC_TAB_ACTIVE_DARK};
  }
`;

const ScTabButton = styled(ButtonBase)<IScProps>`
  padding: 0 ${props => (props.$closable ? TAB_X_SIZE + TAB_PADDING : TAB_PADDING)}px 0 ${TAB_PADDING}px;
  border: 0;
  min-width: ${TAB_MIN_WIDTH}px;
  max-width: ${MAX_WIDTH_TAB}px;
  height: ${TAB_HEIGHT}px;
  ${mixinTypoEllipsis}
  
  ${props => {
    switch (props.$variant) {
      case TabsVariant.BROWSER:
        return props.$active ? CSS_TAB_BUTTON_VARIANT_BROWSER_ACTIVE : CSS_TAB_BUTTON_VARIANT_BROWSER_NORMAL;
      default:
        return props.$active ? mixinTextAccent : CSS_TAB_BUTTON_VARIANT_PLAIN_NORMAL;
    }
  }}
`;

export default function TabButton({
  tab
}: IProps): JSX.Element {
  const {
    variant
  } = useProps();
  const activeTab = useActiveTab();
  const handleTabActivate = useHandleTabActivate();
  const handleTabClick = useCallback(() => handleTabActivate(tab), [tab, handleTabActivate]);
  
  return <ScTabButton {...{
    $variant: variant,
    $closable: tab.closable,
    $active: activeTab === tab,
    title: typeof tab.title === 'string' ? tab.title : undefined,
    onClick: handleTabClick
  }}>{tab.title}</ScTabButton>;
}
