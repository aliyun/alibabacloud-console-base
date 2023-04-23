import React from 'react';
import styled from 'styled-components';

import Button, {
  ButtonTheme,
  ButtonSize,
  ButtonProps
} from '@alicloud/console-base-rc-button';

const ScFooterButton = styled(Button)`
  margin-right: 8px;
  padding: 0 12px;
  
  &:last-child {
    margin-right: 0;
  }
`;

/**
 * Footer 底部按钮，设置了可被覆盖的 theme 和 size
 */
export default function FooterButton({
  theme = ButtonTheme.SECONDARY,
  size = ButtonSize.S,
  ...props
}: ButtonProps): JSX.Element {
  return <ScFooterButton {...{
    theme,
    size,
    ...props
  }} />;
}
