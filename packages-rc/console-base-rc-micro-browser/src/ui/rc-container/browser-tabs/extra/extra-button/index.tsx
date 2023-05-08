import React from 'react';
import styled from 'styled-components';

import {
  mixinTextSecondary
} from '@alicloud/console-base-theme';
import Button, {
  ButtonProps,
  ButtonSize,
  ButtonTheme
} from '@alicloud/console-base-rc-button';

interface IProps extends ButtonProps {
  active?: boolean;
}

const ScButton = styled(Button)<IProps>`
  width: 20px;
  height: 20px;
  line-height: 20px;
  font-size: 12px;
  ${mixinTextSecondary}
`;

export default function ExtraButton(props: IProps): JSX.Element {
  return <ScButton {...{
    theme: ButtonTheme.NONE,
    size: ButtonSize.NONE,
    ...props
  }} />;
}
