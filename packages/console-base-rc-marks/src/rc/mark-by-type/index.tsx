import React from 'react';
import styled from 'styled-components';

import {
  IPropsMarkWithType
} from '../../types';
import {
  getLabel,
  getCssOfType,
  getCssOfAlign
} from '../../util';
import MargBase from '../mark-base';

const ScMark = styled(MargBase)<IPropsMarkWithType>`
  ${props => getCssOfType(props.type, props.hollow)}
  ${props => getCssOfAlign(props.align)}
`;

export default function MarkByType({
  type,
  align,
  component,
  ...props
}: IPropsMarkWithType): JSX.Element {
  return <ScMark {...{
    as: component,
    align,
    type,
    ...props
  }}>{getLabel(type)}</ScMark>;
}
