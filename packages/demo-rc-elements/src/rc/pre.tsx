import React from 'react';
import styled from 'styled-components';

import {
  IPropsPre
} from '../types';

const ScPre = styled.pre`
  position: relative;
  padding: 8px 12px;
  border: 1px solid #f0f0f0;
  background-color: #fcfcfc;
  line-height: 1.5;
  overflow: auto;
  font-family: Operator Mono, Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, Courier New, monospace, serif;
  font-size: 12px;
  white-space: pre-wrap;
  word-break: break-all;
  color: #999;
`;

const ScNote = styled.span`
  display: block;
  position: absolute;
  right: 0;
  padding: 2px 8px;
  line-height: 1.15;
  font-size: 0.9em;
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
`;

const ScHeadnote = styled(ScNote)`
  top: 0;
`;

const ScFootnote = styled(ScNote)`
  bottom: 0;
`;

export default function Pre({
  headnote,
  footnote,
  children,
  ...props
}: IPropsPre): JSX.Element {
  return <ScPre {...props}>
    {headnote ? <ScHeadnote>{headnote}</ScHeadnote> : null}
    {children}
    {footnote ? <ScFootnote>{footnote}</ScFootnote> : null}
  </ScPre>;
}
