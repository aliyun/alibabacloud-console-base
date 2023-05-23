import React from 'react';
import styled from 'styled-components';

import {
  mixinTextPrimary
} from '@alicloud/console-base-theme';
import {
  FormItemProps
} from '@alicloud/rc-model-form';

interface IProps {
  label: FormItemProps['label'];
}

const ScItemLabel = styled.label`
  padding-right: 16px;
  box-sizing: border-box;
  width: 140px;
  text-align: right;
  ${mixinTextPrimary}
`;

export default function ItemLabel({
  label
}: IProps): JSX.Element | null {
  return label ? <ScItemLabel>{label}</ScItemLabel> : null;
}
