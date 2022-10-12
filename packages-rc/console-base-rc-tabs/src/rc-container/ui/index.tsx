import React from 'react';
import styled from 'styled-components';

import {
  useProps,
  useRefUi
} from '../../model';
import TabsBar from '../tabs-bar';
import TabsContents from '../tabs-contents';

interface IScPropsNoContent {
  noContent?: boolean;
}

const ScUi = styled.div<IScPropsNoContent>`
  display: flex;
  flex-direction: column;
  height: ${props => (props.noContent ? 'auto' : '100%')};
  font-size: 12px;
`;

export default function Ui(): JSX.Element {
  const {
    noContent
  } = useProps();
  const refUi = useRefUi();
  
  return <ScUi ref={refUi} noContent={noContent}>
    <TabsBar />
    {noContent ? null : <TabsContents />}
  </ScUi>;
}
