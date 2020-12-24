import React, {
  MouseEvent,
  useRef,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  selectText
} from '@alicloud/mere-dom';

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
  font-family: 'Operator Mono', Menlo, Monaco, 'Liberation Mono', 'DejaVu Sans Mono', 'Courier New', monospace, serif;
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
  background-color: rgba(0, 0, 0, 0.05);
  line-height: 1.15;
  font-size: 0.9em;
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
  onDoubleClick,
  ...props
}: IPropsPre): JSX.Element {
  const refInner = useRef<HTMLDivElement>();
  const handleDoubleClick = useCallback((e: MouseEvent<HTMLPreElement>) => {
    try {
      selectText(refInner.current);
    } catch (ex) {
      // ignore
    }
    
    if (onDoubleClick) {
      onDoubleClick(e);
    }
  }, [onDoubleClick]);
  
  return <ScPre {...props} onDoubleClick={handleDoubleClick}>
    {headnote ? <ScHeadnote>{headnote}</ScHeadnote> : null}
    <div ref={refInner}>{children}</div>
    {footnote ? <ScFootnote>{footnote}</ScFootnote> : null}
  </ScPre>;
}
