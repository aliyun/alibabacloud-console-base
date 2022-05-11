import React from 'react';
import styled from 'styled-components';

import Nav from '../../nav';

const ScBodyWrap = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export default function UiBody(): JSX.Element {
  return <ScBodyWrap>
    <Nav />
  </ScBodyWrap>;
}