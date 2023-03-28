import React from 'react';
import styled from 'styled-components';

import {
  mixinTextSecondary,
  mixinTextTertiary,
  mixinBorderPrimaryColor,
  mixinShadowM,
  mixinShadowL
} from '@alicloud/console-base-theme';
import {
  ButtonBase
} from '@alicloud/console-base-theme-sc-base';
import Icon from '@alicloud/console-base-rc-icon';

import {
  useCollapsed,
  useHandleToggleCollapsed
} from '../../../model';

const ScUiKnob = styled(ButtonBase)`
  position: absolute;
  top: 50%;
  right: -16px;
  z-index: 100;
  border: 1px solid transparent;
  border-left: 0;
  width: 16px;
  height: 34px;
  transform: translateY(-50%);
  ${mixinTextTertiary}
  ${mixinBorderPrimaryColor}
  ${mixinShadowM}
  
  &:hover {
    ${mixinTextSecondary}
    ${mixinShadowL}
  }
`;

export default function UiKnob(): JSX.Element {
  const collapsed = useCollapsed();
  const handleToggleCollapsed = useHandleToggleCollapsed();
  
  return <ScUiKnob {...{
    onClick: handleToggleCollapsed
  }}>
    <Icon type="angle-left" rotate={collapsed ? 180 : 0} />
  </ScUiKnob>;
}
