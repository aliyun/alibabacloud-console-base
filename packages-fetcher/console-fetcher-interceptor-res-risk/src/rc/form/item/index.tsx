import React from 'react';
import styled from 'styled-components';

import {
  SIZE,
  mixinTextSecondary
} from '@alicloud/console-base-theme';

import {
  IFormItem
} from '../_types';

interface IScLableProps {
  labelWidth?: number;
  textAlign?: string;
}

const ScItem = styled.div`
  display: flex;
  margin-bottom: 12px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_M}px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// TODO 如果要提到外边用 这边的硬编码需要能设置
const ScLabel = styled.div<IScLableProps>`
  padding-right: 16px;
  box-sizing: border-box;
  width: ${props => props.labelWidth || 160}px;
  text-align: ${props => props.textAlign || 'right'};
  ${mixinTextSecondary}
`;

const ScContent = styled.div`
  flex: 1;
  word-break: break-all;
`;

export default function Item({
  labelTextAlign,
  labelWidth,
  label,
  content
}: IFormItem): JSX.Element {
  return <ScItem>
    <ScLabel labelWidth={labelWidth} textAlign={labelTextAlign}>
      <label>{label}</label>
    </ScLabel>
    <ScContent>{content}</ScContent>
  </ScItem>;
}
