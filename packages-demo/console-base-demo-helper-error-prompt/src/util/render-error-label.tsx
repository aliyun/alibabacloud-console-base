import React, {
  isValidElement
} from 'react';
import styled from 'styled-components';

import {
  TErrorArg
} from '../types';

interface IError extends Error {
  code?: string;
  title?: string;
}

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
  border-radius: 2px;
  background-color: ${props => getTagBgc(props.type)};
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
      NULL
    </>;
  }
  
  if (error === undefined) {
    return <>
      <ScErrorTag type="U" />
      UNDEFINED
    </>;
  }
  
  if (typeof error === 'string') {
    return <>
      <ScErrorTag type="S" />
      {error}
    </>;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (isValidElement<any>(error)) { // TODO TS5 isValidElement 问题 https://github.com/microsoft/TypeScript/issues/53178
    return <>
      <ScErrorTag type="X" />
      JSX
    </>;
  }
  
  if (error instanceof Error) {
    return <>
      <ScErrorTag type="E" />
      {(error as IError).title || error.message}
    </>;
  }
  
  return <>
    <ScErrorTag type="O" />
    {error.title || error.message || error.toString()}
  </>;
}
