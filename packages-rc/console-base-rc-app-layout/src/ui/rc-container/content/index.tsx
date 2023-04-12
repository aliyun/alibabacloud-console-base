import React from 'react';
import styled from 'styled-components';

import {
  useContent
} from '../../../model';

const ScContent = styled.div`
  flex: 1;
  order: 1;
  padding: 16px 20px;
  box-sizing: border-box;
  height: 100%;
  overflow-y: auto;
`;

export default function Content(): JSX.Element {
  const content = useContent();
  
  return <ScContent>{content}</ScContent>;
}
