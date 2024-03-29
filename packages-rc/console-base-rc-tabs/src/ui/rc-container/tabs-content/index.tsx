import React from 'react';
import styled from 'styled-components';

import {
  useProps
} from '../../../model';

import TabPanel from './tab-panel';

// 需要 overflow，否则会被内容撑到很大
const ScTabsContents = styled.div`
  flex: 1;
  overflow: auto;
`;

export default function TabsContents(): JSX.Element {
  const {
    tabs
  } = useProps();
  
  return <ScTabsContents>
    {tabs.map((v, i) => <TabPanel {...{
      key: v.key || i,
      tab: v
    }} />)}
  </ScTabsContents>;
}
