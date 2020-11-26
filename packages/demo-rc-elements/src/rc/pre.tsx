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

const ScCaption = styled.span`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px;
  background-color: rgba(0, 0, 0, 0.05);
  color: #333;
  font-variant: small-caps;
`;

export default function Pre({
  caption,
  children,
  ...props
}: IPropsPre): JSX.Element {
  return <ScPre {...props}>
    {caption ? <ScCaption>{caption}</ScCaption> : null}
    {children}
  </ScPre>;
}
