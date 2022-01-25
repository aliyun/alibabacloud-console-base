import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';

import {
  EAlertTheme
} from '../../../enum';
import {
  getIconColor,
  getIconType
} from '../../../util';

interface IProps {
  theme: EAlertTheme;
}

const ScAlertIcon = styled(Icon)<IProps>`
  margin-right: 12px;
  font-size: 14px;
  ${props => getIconColor(props.theme)}
`;

export default function AlertIcon({
  theme
}: IProps): JSX.Element | null {
  const iconType = getIconType(theme);
  
  return iconType ? <ScAlertIcon theme={theme} type={iconType} /> : null;
}