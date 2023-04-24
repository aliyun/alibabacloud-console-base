import React from 'react';
import styled from 'styled-components';
import {
  CSSTransition
} from 'react-transition-group';

import MessageContent, {
  IMessageContentProps
} from './message-content';

interface IMessageProps extends IMessageContentProps {
  visible?: boolean;
}

const ScDiv = styled.div`
  &.enter-active,
  &.exit-active {
    position: absolute;
    top: 12px;
    opacity: 0.4;
    width: 100%;
  }
`;

export default function Message({
  visible = true,
  ...props
}: IMessageProps): JSX.Element {
  return <CSSTransition {...{
    in: visible,
    unmountOnExit: true,
    timeout: {
      enter: 30,
      exit: 30
    }
  }}>
    <ScDiv>
      <MessageContent {...props} />
    </ScDiv>
  </CSSTransition>;
}