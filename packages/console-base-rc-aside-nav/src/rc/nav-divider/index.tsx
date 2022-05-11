import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  COLOR
} from '@alicloud/console-base-theme';

import {
  SPACING_DIVIDER_V,
  SPACING_DIVIDER_V_S,
  SPACING_DIVIDER_H,
  SPACING_INDENT
} from '../../const';

interface IProps {
  indent: number;
}

const ScNavDivider = styled.hr<IProps>`
  padding: 0;
  border: 0;
  background: linear-gradient(90deg, ${COLOR.BG_SECONDARY_FADE} 0%, ${COLOR.BORDER_SECONDARY} 50%, ${COLOR.BG_SECONDARY_FADE} 100%);
  background: linear-gradient(90deg, var(--cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE}) 0%, var(--cb-color-border-secondary, ${COLOR.BORDER_SECONDARY}) 50%, var(cb-color-bg-secondary-fade, ${COLOR.BG_SECONDARY_FADE}) 100%);
  height: 1px;
  ${props => (props.indent <= 0 ? css`
    margin: ${SPACING_DIVIDER_V}px ${SPACING_DIVIDER_H}px ${SPACING_DIVIDER_V}px ${SPACING_DIVIDER_H}px;
  ` : css`
    margin: ${SPACING_DIVIDER_V_S}px ${SPACING_DIVIDER_H}px ${SPACING_DIVIDER_V_S}px ${SPACING_DIVIDER_H + SPACING_INDENT * props.indent}px;
  `)};
`;

export default function NavDivider({
  indent
}: IProps): JSX.Element {
  return <ScNavDivider indent={indent} />;
}