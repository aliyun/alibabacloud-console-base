import React from 'react';
import styled from 'styled-components';

import {
  Pre
} from '@alicloud/demo-rc-elements';

import {
  ELoadingStatus
} from '../../const';
import stringify, {
  stringifyError
} from '../../util/stringify';

interface IProps {
  what: 'config' | 'result';
  status?: ELoadingStatus;
  data?: unknown;
  error?: Error;
}

interface IPropsSc {
  what: 'config' | 'result';
}

const ScDisplayJson = styled(Pre)<IPropsSc>`
  position: relative;
  
  &:after {
    content: '${props => props.what}';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 4px;
    background-color: rgba(0, 0, 0, 0.05);
    color: #333;
    font-variant: small-caps;
  }
`;

export default function DisplayJson({
  status,
  data,
  error,
  what
}: IProps): JSX.Element {
  let backgroundColor = '#eee';
  let content;
  
  switch (status) {
    case ELoadingStatus.LOADING:
      content = 'Loading...';
      
      break;
    case ELoadingStatus.SUCCESS:
      content = data ? stringify(data) : 'n / a';
      backgroundColor = '#dfd';
      
      break;
    case ELoadingStatus.ERROR:
      content = stringifyError(error);
      backgroundColor = '#fee';
      
      break;
    default:
      content = data ? stringify(data) : 'n / a';
      
      break;
  }
  
  return <ScDisplayJson what={what} style={{
    backgroundColor
  }}>{content}</ScDisplayJson>;
}
