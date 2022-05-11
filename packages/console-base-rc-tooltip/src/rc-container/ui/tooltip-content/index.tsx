import React, {
} from 'react';
import styled from 'styled-components';

import {
  useProps
} from '../../../model';

const ScTooltipContent = styled.div`
  line-height: 1.5;
`;

export default function TooltipContent(): JSX.Element {
  const [{
    content
  }] = useProps();
  
  return <ScTooltipContent>{content}</ScTooltipContent>;
}
