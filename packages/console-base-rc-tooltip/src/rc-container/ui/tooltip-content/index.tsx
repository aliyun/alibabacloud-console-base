import React, {
  CSSProperties
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
    content,
    width
  }] = useProps();
  
  const contentStyle: CSSProperties = width && width > 0 ? {
    width
  } : {
    whiteSpace: 'nowrap'
  };
  
  return <ScTooltipContent style={contentStyle}>{content}</ScTooltipContent>;
}
