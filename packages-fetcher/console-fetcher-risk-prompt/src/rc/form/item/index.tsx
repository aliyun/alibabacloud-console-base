import React from 'react';
import styled from 'styled-components';

import {
  SIZE,
  mixinTextSecondary
} from '@alicloud/console-base-theme';

import {
  MOBILE_SCREE_SIZE
} from '../../../const';
import {
  IFormItem
} from '../_types';

interface IScLabelProps {
  ['data-label-text-align']?: string;
  ['data-label-width']?: string;
  ['data-label-mobile-width']?: string;
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
const ScLabel = styled.div<IScLabelProps>`
  width: ${props => props['data-label-width'] ?? '140px'};   
  padding-right: 16px;
  box-sizing: border-box;
  text-align: ${props => props['data-label-text-align'] || 'center'};
  ${mixinTextSecondary}
  
  @media (max-width: ${MOBILE_SCREE_SIZE}px) {
    width: ${props => props['data-label-mobile-width'] ?? '120px'}
  }
`;

const ScContent = styled.div`
  flex: 1;
  word-break: break-all;
`;

export default function Item({
  label,
  content,
  labelTextAlign,
  labelWidth,
  labelMobileWidth
}: IFormItem): JSX.Element {
  return <ScItem>
    <ScLabel {...{
      'data-label-width': labelWidth,
      'data-label-mobile-width': labelMobileWidth,
      'data-label-text-align': labelTextAlign
    }}>
      <label>{label}</label>
    </ScLabel>
    <ScContent>{content}</ScContent>
  </ScItem>;
}
