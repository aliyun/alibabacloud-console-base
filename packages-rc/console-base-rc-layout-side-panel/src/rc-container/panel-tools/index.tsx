import React from 'react';
import styled from 'styled-components';

import {
  useTools
} from '../../model';
import {
  Tool
} from '../../rc';

const ScItems = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default function PanelTools(): JSX.Element {
  const items = useTools();
  
  return <ScItems>
    {items.map((v, i) => <Tool key={v.key || i} {...v} />)}
  </ScItems>;
}