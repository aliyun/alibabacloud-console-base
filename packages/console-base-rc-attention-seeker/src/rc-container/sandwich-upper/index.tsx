import React from 'react';
import styled from 'styled-components';

import {
  Z_INDEX_SANDWICH_UPPER
} from '../../const';
import {
  useRect,
  useHandleClickSandwichUpper
} from '../../model';

const ScSandwichUpper = styled.div`
  position: absolute;
  z-index: ${Z_INDEX_SANDWICH_UPPER};
  box-sizing: content-box;
`;

export default function SandwichUpper(): JSX.Element {
  const rect = useRect();
  const handleClickSandwichUpper = useHandleClickSandwichUpper();
  
  return <ScSandwichUpper style={rect} onClick={handleClickSandwichUpper} />;
}
