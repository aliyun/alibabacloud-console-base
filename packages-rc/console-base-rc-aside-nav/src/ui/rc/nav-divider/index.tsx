import React from 'react';
import styled, {
  css
} from 'styled-components';

import {
  HrBase
} from '@alicloud/console-base-theme-sc-base';

import {
  SPACING_DIVIDER_V,
  SPACING_DIVIDER_V_S,
  SPACING_DIVIDER_H,
  SPACING_INDENT
} from '../../const';

interface IProps {
  indent: number;
}

const ScNavDivider = styled(HrBase)<IProps>`
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