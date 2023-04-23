import React, {
  useState
} from 'react';
import styled from 'styled-components';

import GotoEnds from '@alicloud/console-base-rc-goto-ends';

import {
  IMicroContentBodyProps
} from '../../types';

const ScBody = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
`;

const ScOverflowWrapper = styled.div`
  height: 100%;
  overflow: auto;
`;

const ScBodyInner = styled.div`
  padding: 16px;
`;

export default function MicroContentBody({
  full,
  children,
  ...props
}: IMicroContentBodyProps): JSX.Element {
  const [stateDomBody, setStateDomBody] = useState<HTMLDivElement | null>(null);
  const [stateDomBodyInner, setStateDomBodyInner] = useState<HTMLDivElement | null>(null);
  
  return <ScBody {...props}>
    <ScOverflowWrapper ref={setStateDomBody}>
      {full ? <>{children}</> : <ScBodyInner ref={setStateDomBodyInner}><>{children}</></ScBodyInner>}
    </ScOverflowWrapper>
    {full ? null : <GotoEnds {...{
      container: stateDomBody,
      containerInner: stateDomBodyInner
    }} />}
  </ScBody>;
}
