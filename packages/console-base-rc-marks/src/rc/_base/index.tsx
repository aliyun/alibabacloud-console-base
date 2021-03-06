import React from 'react';
import styled from 'styled-components';

import {
  mixinBorderTransparent
} from '@alicloud/console-base-theme';

import {
  IPropsMarkWithType
} from '../../types';
import getLabel from '../../util/get-label';
import getCssOfType from '../../util/get-css-of-type';
import getCssOfAlign from '../../util/get-css-of-align';

const ScMarkBase = styled.span`
  display: inline-block;
  padding: 0 4px;
  border-radius: 2px;
  line-height: 1.6;
  font-family: 'PingFang SC', 'Microsoft Yahei', Arial, sans-serif;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 1px;
  ${mixinBorderTransparent}
`;

const ScMark = styled(ScMarkBase)<IPropsMarkWithType>`
  ${props => getCssOfType(props.type)}
  ${props => getCssOfAlign(props.align)}
`;

export default function MarkBase({
  type,
  align,
  component
}: IPropsMarkWithType): JSX.Element {
  return <ScMark {...{
    as: component,
    align,
    type
  }}>{getLabel(type)}</ScMark>;
}
