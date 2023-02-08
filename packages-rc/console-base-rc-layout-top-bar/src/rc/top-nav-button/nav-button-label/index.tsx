import React from 'react';
import styled from 'styled-components';

import {
  mixinTextEmphasis,
  mixinBgBrand
} from '@alicloud/console-base-theme';

import {
  ModelPropsButton
} from '../../../model';

interface IProps {
  label: ModelPropsButton['label'];
  count?: number;
  countAsDot?: boolean;
}

const ScIndicatorDot = styled.span`
  position: absolute;
  top: 12px;
  right: 8px;
  border-radius: 2px;
  width: 4px;
  height: 4px;
  ${mixinBgBrand}
`;

const ScIndicatorNumber = styled.strong`
  position: absolute;
  top: 4px;
  right: 0;
  line-height: 1.5;
  font-size: 12px;
  font-weight: 600;
  transform: scale(0.8);
  ${mixinTextEmphasis}
`;

/**
 * 让 button.label 可以纯配置化
 */
export default function NavButtonLabel({
  label = '?',
  count = 0,
  countAsDot
}: IProps): JSX.Element {
  return count > 0 ? <>
    {label}
    {countAsDot ? <ScIndicatorDot /> : <ScIndicatorNumber>{count > 99 ? '99+' : count}</ScIndicatorNumber>}
  </> : <>{label}</>;
}
