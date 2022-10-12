import React from 'react';
import styled from 'styled-components';

import {
  Z_INDEX_PROTECTOR
} from '../../const';
import {
  useRect,
  useHandleCloseOnProtectorClick
} from '../../model';

const ScSandwichUpper = styled.div`
  position: absolute;
  z-index: ${Z_INDEX_PROTECTOR};
  box-sizing: content-box;
`;

export default function Protector(): JSX.Element {
  const rect = useRect();
  const handleCloseOnSandwichUpperClick = useHandleCloseOnProtectorClick();

  return <ScSandwichUpper style={rect} onMouseDown={handleCloseOnSandwichUpperClick} />;
}
