import React from 'react';
import styled from 'styled-components';

import {
  useProps
} from '../../model';

import ContentItem from './content-item';

const ScContents = styled.div`
  flex: 1;
`;

export default function TabsContents(): JSX.Element {
  const {
    tabs
  } = useProps();
  
  return <ScContents>
    {tabs.map((v, i) => <ContentItem {...{
      key: v.key || i,
      tab: v
    }} />)}
  </ScContents>;
}
