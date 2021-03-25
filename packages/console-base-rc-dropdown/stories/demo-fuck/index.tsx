import React, {
  useState
} from 'react';
import {
  CSSTransition
} from 'react-transition-group';
import styled from 'styled-components';

import {
  H3,
  P,
  Button
} from '@alicloud/demo-rc-elements';

const ScShit = styled.div`
  &.enter {
    opacity: 0;
    transform: scale(0.9);
  }
  
  &.enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  
  &.exit {
    opacity: 1;
  }
  
  &.exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

export default function Example(): JSX.Element {
  const [stateShowButton, setStateShowButton] = useState<boolean>(true);
  const [stateShowMessage, setStateShowMessage] = useState<boolean>(false);
  
  return <>
    {stateShowButton ? <Button onClick={() => setStateShowMessage(true)}>Show Message</Button> : null}
    <CSSTransition {...{
      in: stateShowMessage,
      timeout: 300,
      unmountOnExit: true,
      onEnter: () => setStateShowButton(false),
      onExited: () => setStateShowButton(true)
    }}>
      <ScShit>
        <H3>Animated alert message</H3>
        <P>This alert message is being transitioned in and out of the DOM.</P>
        <Button onClick={() => setStateShowMessage(false)}>Close</Button>
      </ScShit>
    </CSSTransition>
  </>;
}
