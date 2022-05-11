import React from 'react';
import styled from 'styled-components';

import {
  Z_INDEX_SANDWICH_UPPER
} from '../../const';
import {
  useRect,
  useHandleCloseOnSandwichUpperClick
} from '../../model';

const ScSandwichUpper = styled.div`
  position: absolute;
  z-index: ${Z_INDEX_SANDWICH_UPPER};
  box-sizing: content-box;
`;

export default function SandwichUpper(): JSX.Element {
  const rect = useRect();
  const handleCloseOnSandwichUpperClick = useHandleCloseOnSandwichUpperClick();

  return <ScSandwichUpper style={rect} onMouseDown={handleCloseOnSandwichUpperClick} />;
}
