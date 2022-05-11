import React from 'react';
import styled from 'styled-components';

import intl from '../../../intl';
import {
  useProps,
  useAutoCloseTick
} from '../../../model';

const ScTooltipAutoClosing = styled.div`
  opacity: 0.66;
  margin-top: 4px;
  font-size: 0.85em;
`;

export default function TooltipAutoClosing(): JSX.Element | null {
  const [{
    autoClose,
    autoCloseCounter
  }] = useProps();
  const autoCloseTick = useAutoCloseTick();
  
  return autoClose && autoCloseCounter ? <ScTooltipAutoClosing>{intl('phrase:auto_closing_in_{n}_seconds', {
    n: autoCloseTick
  })}</ScTooltipAutoClosing> : null;
}
