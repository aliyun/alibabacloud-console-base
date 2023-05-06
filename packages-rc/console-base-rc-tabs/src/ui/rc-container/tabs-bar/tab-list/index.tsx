import React from 'react';
import styled from 'styled-components';

import {
  useRefTabList,
  useStateNavOffset,
  useVisibleTabs
} from '../../../../model';

import TabItem from './tab-item';

const ScTabList = styled.ul`
  display: inline-block;
  margin: 0 !important;
  padding: 0 0 0 16px !important;
  list-style: none !important;
  white-space: nowrap;
  transition: transform 0.3s ease-in;
  
  li {
    list-style: none !important;
  }
`;

export default function TabList(): JSX.Element {
  const refTabList = useRefTabList();
  const visibleTabs = useVisibleTabs();
  const navOffset = useStateNavOffset();
  
  return <ScTabList {...{
    ref: refTabList,
    style: {
      transform: `translate(${navOffset}px, 0)`
    },
    role: 'tablist'
  }}>
    {visibleTabs.map((v): JSX.Element | null => <TabItem {...{
      key: v.key,
      tab: v
    }} />)}
  </ScTabList>;
}
