import React from 'react';
import styled from 'styled-components';

import {
  SIZE,
  mixinTextSecondary
} from '@alicloud/console-base-theme';

import {
  IFormItem
} from '../_types';

const ScItem = styled.div`
  display: flex;
  margin-bottom: 12px;
  line-height: ${SIZE.HEIGHT_FORM_CONTROL_M}px;
  font-size: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// TODO 如果要提到外边用 这边的硬编码需要能设置
const ScLabel = styled.div`
  padding-right: 16px;
  box-sizing: border-box;
  width: 160px;
  text-align: right;
  ${mixinTextSecondary}
`;

const ScContent = styled.div`
  flex: 1;
`;

export default function Item({
  label,
  content
}: IFormItem): JSX.Element {
  return <ScItem>
    <ScLabel>
      <label>{label}</label>
    </ScLabel>
    <ScContent>{content}</ScContent>
  </ScItem>;
}
