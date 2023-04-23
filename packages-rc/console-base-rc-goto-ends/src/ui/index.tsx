import React from 'react';
import styled from 'styled-components';

import {
  useOffsets
} from '../model';

import {
  GoTop,
  GoBottom
} from './rc-container';

const ScGoTopBottom = styled.div`
  position: absolute;
`;

export default function Ui(): JSX.Element | null {
  const [offsetX, offsetY] = useOffsets();
  
  return <ScGoTopBottom {...{
    style: {
      right: offsetX,
      bottom: offsetY
    }
  }}>
    <GoTop />
    <GoBottom />
  </ScGoTopBottom>;
}
