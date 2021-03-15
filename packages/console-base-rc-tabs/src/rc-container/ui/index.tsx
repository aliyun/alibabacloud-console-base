import React from 'react';
import styled from 'styled-components';

import {
  useRefTabs
} from '../../model';
import TabsBar from '../tabs-bar';
import TabsContents from '../tabs-contents';

const ScTabs = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-size: 12px;
`;

export default function Ui(): JSX.Element | null {
  const refTabs = useRefTabs();
  
  return <ScTabs ref={refTabs}>
    <TabsBar />
    <TabsContents />
  </ScTabs>;
}
