import React, {
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  mixinTextSecondary,
  mixinBgSecondaryFade
} from '@alicloud/console-base-theme';
import Icon from '@alicloud/console-base-rc-icon';
import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import {
  ModelPropsTab,
  useProps,
  useHandleTabClose
} from '../../../../../../model';
import {
  TAB_HEIGHT,
  TAB_PADDING,
  TAB_X_SIZE,
  TAB_X_SIZE_FONT
} from '../../../../../const';
import intl from '../../../../../intl';

interface IProps {
  tab: ModelPropsTab;
}

const ScTabX = styled(Button)`
  position: absolute;
  top: ${(TAB_HEIGHT - TAB_X_SIZE) / 2}px;
  right: ${TAB_PADDING * 0.5}px;
  border-radius: ${TAB_X_SIZE}px;
  width: ${TAB_X_SIZE}px;
  height: ${TAB_X_SIZE}px;
  line-height: ${TAB_X_SIZE}px;
  font-size: ${TAB_X_SIZE_FONT}px;
  ${mixinTextSecondary}
  
  &:hover {
    ${mixinBgSecondaryFade}
  }
`;

export default function TabX({
  tab
}: IProps): JSX.Element | null {
  const {
    classNameForTabX
  } = useProps();
  const handleTabClose = useHandleTabClose();
  const handleClick = useCallback(() => handleTabClose(tab), [tab, handleTabClose]);
  
  return tab.closable ? <ScTabX {...{
    spm: 'x',
    className: classNameForTabX,
    title: intl('op:close'),
    label: <Icon type="x" />,
    theme: ButtonTheme.NONE,
    size: ButtonSize.NONE,
    cursor: 'default',
    onClick: handleClick
  }} /> : null;
}
