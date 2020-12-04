import React from 'react';
import styled from 'styled-components';

import {
  useTabs
} from '../../model';

import ContentItem from './content-item';

const ScContents = styled.div`
  flex: 1;
  overflow: auto;
`;

export default function TabsContents(): JSX.Element {
  const tabs = useTabs();
  
  return <ScContents>
    {tabs.map((v, i) => <ContentItem {...{
      key: v.key || i,
      tab: v
    }} />)}
  </ScContents>;
}
