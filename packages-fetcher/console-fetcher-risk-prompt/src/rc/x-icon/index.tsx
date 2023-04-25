import React from 'react';
import styled from 'styled-components';

import Button, {
  ButtonTheme,
  ButtonSize,
  ButtonProps
} from '@alicloud/console-base-rc-button';

interface IProps extends ButtonProps {
  onClick(): void;
}

const ScButton = styled(Button)`
  padding: 0;
  cursor: pointer;
`;

/**
 * 位于输入框 InnerRight 的 X 按钮，用户清空内容
 */
export default function Xicon({
  onClick,
  ...props
}: IProps): JSX.Element {
  return <ScButton {...{
    theme: ButtonTheme.NONE,
    size: ButtonSize.XS,
    iconLeft: 'x',
    onClick,
    ...props
  }} />;
}
