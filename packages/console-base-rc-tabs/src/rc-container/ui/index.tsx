import React from 'react';
import styled from 'styled-components';

import {
  useRefUi
} from '../../model';
import TabsBar from '../tabs-bar';
import TabsContents from '../tabs-contents';

const ScUi = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 12px;
`;

export default function Ui(): JSX.Element | null {
  const refUi = useRefUi();
  
  return <ScUi ref={refUi}>
    <TabsBar />
    <TabsContents />
  </ScUi>;
}
