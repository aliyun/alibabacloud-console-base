import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  getIconColor,
  getIconType
} from '../../util';
import {
  AlertTheme,
  useProps
} from '../../model';

interface IScProps {
  theme: AlertTheme;
}

const ScAlertIcon = styled(Icon)<IScProps>`
  margin-right: 8px;
  font-size: 14px;
  ${props => getIconColor(props.theme)}
`;

export default function AlertIcon(): JSX.Element | null {
  const [{
    theme
  }] = useProps();
  const iconType = getIconType(theme);
  
  return iconType ? <ScAlertIcon theme={theme} type={iconType} /> : null;
}