import React from 'react';
import styled from 'styled-components';

import {
  TErrorArg
} from '../types';

interface IPropsScErrorTag {
  type: string;
}

function getTagBgc(type: string): string {
  switch (type) {
    case 'N':
      return '#ddd';
    case 'U':
      return '#ddd';
    case 'S':
      return '#6c6';
    case 'X':
      return '#c6f';
    case 'E':
      return '#fcc';
    case 'O':
      return '#9cf';
    default:
      return '#ccc';
  }
}

const ScErrorTag = styled.span<IPropsScErrorTag>`
  display: inline-block;
  margin-right: 4px;
  padding: 2px 4px;
  background-color: ${props => getTagBgc(props.type)};
  border-radius: 2px;
  line-height: 1.2;
  
  &:after {
    content: '${props => props.type}';
    color: #fff;
  }
`;

export default function renderErrorLabel(error: TErrorArg): JSX.Element {
  if (error === null) {
    return <>
      <ScErrorTag type="N" />
      null
    </>;
  }

  if (error === undefined) {
    return <>
      <ScErrorTag type="U" />
      undefined
    </>;
  }

  if (typeof error === 'string') {
    return <>
      <ScErrorTag type="S" />
      {error}
    </>;
  }

  if (React.isValidElement(error)) {
    return <>
      <ScErrorTag type="X" />
      JSX
    </>;
  }

  if (error instanceof Error) {
    return <>
      <ScErrorTag type="E" />
      {error.message}
    </>;
  }

  return <>
    <ScErrorTag type="O" />
    {error.message || error.toString()}
  </>;
}