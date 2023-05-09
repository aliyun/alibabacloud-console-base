import React from 'react';
import styled from 'styled-components';

import {
  mixinTextSecondary,
  mixinBorderRadiusXs
} from '@alicloud/console-base-theme';
import Button, {
  ButtonProps,
  ButtonSize,
  ButtonTheme
} from '@alicloud/console-base-rc-button';
import Icon, {
  IconType
} from '@alicloud/console-base-rc-icon';

interface IProps extends Omit<ButtonProps, 'theme' | 'size'> {
  icon: IconType;
}

const ScButton = styled(Button)`
  margin: 0 1px;
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  ${mixinTextSecondary}
  ${mixinBorderRadiusXs}
  
  &:last-child {
    margin-right: 8px;
  }
`;

export default function ExtraButton({
  icon,
  ...props
}: IProps): JSX.Element {
  return <ScButton {...{
    ...props,
    label: <Icon type={icon} />,
    theme: ButtonTheme.TERTIARY_ALT,
    size: ButtonSize.NONE
  }} />;
}
