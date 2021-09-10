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
  labelWidth?: string;
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
  ${props => {
    if (props.labelWidth) {
      return `width: ${props.labelWidth};`;
    }

    return 'width: 160px;';
  }}
  ${props => {
    if (props.textAlign) {
      return `text-align: ${props.textAlign};`;
    }

    return 'text-align: right;';
  }}
  ${mixinTextSecondary}
`;

const ScContent = styled.div`
  flex: 1;
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
