import React from 'react';
import styled from 'styled-components';

import {
  useProps
} from '../../../model';

const ScTooltipTitle = styled.header`
  margin-bottom: 8px;
  font-size: 1.15em;
  font-weight: 600;
`;

export default function TooltipTitle(): JSX.Element | null {
  const [{
    title
  }] = useProps();
  
  return title ? <ScTooltipTitle>{title}</ScTooltipTitle> : null;
}
