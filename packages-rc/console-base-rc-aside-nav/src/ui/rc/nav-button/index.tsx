import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  mixinBgAccent,
  mixinBgSecondaryFade
} from '@alicloud/console-base-theme';
import Button, {
  ButtonProps,
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import {
  TNavItemMark
} from '../../../model';
import {
  SPACING_INDENT,
  SPACING_SIDE
} from '../../const';

import renderMark from './render-mark';

interface IProps extends Omit<ButtonProps, 'theme'> {
  indent?: number;
  selected?: boolean;
  mark?: TNavItemMark;
}

const ScNavButton = styled(Button)<IProps>`
  display: block;
  position: relative;
  ${props => css`
    padding: 0 ${SPACING_SIDE}px 0 ${SPACING_SIDE + SPACING_INDENT * (props.indent || 0)}px;
  `};
  ${props => (props.selected ? css`
    ${mixinBgSecondaryFade}
    
    &:after {
      ${mixinBgAccent}
    }
  ` : null)}

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 2px;
    transition: background-color linear 250ms;
  }
  
  i {
    font-size: 14px;
  }
`;

export default function NavButton({
  mark,
  iconRight,
  ...props
}: IProps): JSX.Element {
  return <ScNavButton {...{
    iconRight: iconRight || renderMark(mark),
    ...props,
    title: props.title ?? (typeof props.label === 'string' ? props.label : ''),
    theme: ButtonTheme.MENU
  }} />;
}
