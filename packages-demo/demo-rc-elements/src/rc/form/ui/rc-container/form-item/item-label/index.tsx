import React from 'react';
import styled from 'styled-components';

import {
  FormItemProps
} from '@alicloud/rc-model-form';

import {
  COLORS_LIGHT,
  COLORS_DARK
} from '../../../../../../const';

interface IProps {
  label: FormItemProps['label'];
}

const ScItemLabel = styled.label`
  padding-right: 16px;
  box-sizing: border-box;
  width: 140px;
  text-align: right;
  color: ${COLORS_LIGHT.GRAY_PRIMARY};
  
  .theme-dark & {
    color: ${COLORS_DARK.GRAY_PRIMARY};
  }
`;

export default function ItemLabel({
  label
}: IProps): JSX.Element | null {
  return label ? <ScItemLabel>{label}</ScItemLabel> : null;
}
