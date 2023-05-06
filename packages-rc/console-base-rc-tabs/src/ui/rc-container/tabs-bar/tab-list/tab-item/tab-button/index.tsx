import React, {
  useCallback
} from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinTypoEllipsis,
  mixinTextAccent
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
  BGC_TAB_ACTIVE,
  BGC_TAB_ACTIVE_DARK,
  BGC_TAB_IDLE,
  FGC_TAB_ACTIVE,
  FGC_TAB_ACTIVE_DARK,
  FGC_TAB_IDLE,
  FGC_TAB_IDLE_HOVER
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

const CSS_TAB_BUTTON_VARIANT_PLAIN_ACTIVE = mixinTextAccent;

const CSS_TAB_BUTTON_VARIANT_INVERSE_NORMAL = css`
  background-color: ${BGC_TAB_IDLE};
  color: ${FGC_TAB_IDLE};
  
  &:hover {
    color: ${FGC_TAB_IDLE_HOVER};
  }
`;

const CSS_TAB_BUTTON_VARIANT_INVERSE_ACTIVE = css`
  background-color: ${BGC_TAB_ACTIVE};
  color: ${FGC_TAB_ACTIVE};
  
  .theme-dark && {
    background-color: ${BGC_TAB_ACTIVE_DARK};
    color: ${FGC_TAB_ACTIVE_DARK};
  }
`;

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
      case TabsVariant.BROWSER:
        return props.$active ? CSS_TAB_BUTTON_VARIANT_INVERSE_ACTIVE : CSS_TAB_BUTTON_VARIANT_INVERSE_NORMAL;
      default:
        return props.$active ? CSS_TAB_BUTTON_VARIANT_PLAIN_ACTIVE : CSS_TAB_BUTTON_VARIANT_PLAIN_NORMAL;
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
