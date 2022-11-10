import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  SIZE,
  mixinBorderTertiaryLeft,
  mixinBgSecondary
} from '@alicloud/console-base-theme';
import Button, {
  ButtonProps,
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  CLASS_ACCOUNT_BUTTON
} from '../../../const';

interface IProps extends Omit<ButtonProps, 'theme'> {
  responsive?: boolean;
}

// `display: block !important;` 让 button 和 a 水平对齐，防止 Button 自身的样式干扰
const ScNavButton = styled(Button)<IProps>`
  display: block !important;
  position: relative;
  padding: 0 10px;
  border: 0;
  height: ${SIZE.HEIGHT_TOP_NAV}px;
  line-height: ${SIZE.HEIGHT_TOP_NAV}px;
  
  ${props => (props.responsive ? css`
    @media screen and (max-width: 1208px) {
      padding: 0 6px;
    }
  ` : null)};
  
  /* stylelint-disable selector-class-pattern */
  &.${CLASS_ACCOUNT_BUTTON} {
    cursor: default;
    ${mixinBorderTertiaryLeft}
    
    &:hover {
      ${mixinBgSecondary}
    }
  }
  
  img {
    display: inline;
    max-width: 160px;
    max-height: 36px;
  }
`;

/**
 * 顶栏按钮
 */
export default function NavButton(props: IProps): JSX.Element {
  return <ScNavButton {...{
    theme: ButtonTheme.TEXT_BRAND_SECONDARY,
    ...props
  }} />;
}
