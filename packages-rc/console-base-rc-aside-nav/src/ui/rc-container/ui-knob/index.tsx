import React from 'react';
import styled from 'styled-components';

import {
  mixinTextSecondary,
  mixinTextTertiary,
  mixinBgPrimary,
  mixinBorderPrimaryColor,
  mixinShadowMRight
} from '@alicloud/console-base-theme';
import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useProps,
  useHovered,
  useCollapsed,
  useHandleToggleCollapsed
} from '../../../model';

interface IScProps {
  $hovered: boolean;
}

const ScUiKnob = styled(ButtonBase)<IScProps>`
  position: absolute;
  top: 50%;
  right: -16px;
  border: 1px solid transparent;
  border-left: 0;
  width: 16px;
  height: 34px;
  transform: translateY(-50%);
  ${mixinTextTertiary}
  ${mixinBgPrimary}
  ${mixinBorderPrimaryColor}
  ${props => (props.$hovered ? mixinTextSecondary : null)}
  ${props => (props.$hovered ? mixinShadowMRight : null)}
`;

export default function UiKnob(): JSX.Element | null {
  const {
    onCollapsedChange
  } = useProps();
  const hovered = useHovered();
  const collapsed = useCollapsed();
  const handleToggleCollapsed = useHandleToggleCollapsed();
  
  return onCollapsedChange ? <ScUiKnob {...{
    $hovered: hovered,
    onClick: handleToggleCollapsed
  }}>
    <Icon type="angle-left" rotate={collapsed ? 180 : 0} />
  </ScUiKnob> : null;
}
