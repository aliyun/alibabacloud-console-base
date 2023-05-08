import React from 'react';
import styled from 'styled-components';

import {
  ACTION_OFFSET_FROM_TOP,
  ACTION_OFFSET_FROM_RIGHT
} from '../../../const';
import {
  useProps,
  useHandleClose,
  useHandleConfig
} from '../../../model';
import {
  IconButton
} from '../../rc';

const ScTooltipActions = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: ${ACTION_OFFSET_FROM_TOP}px;
  right: ${ACTION_OFFSET_FROM_RIGHT}px;
`;

export default function TooltipActions(): JSX.Element | null {
  const [{
    closable,
    onConfig
  }] = useProps();
  const handleClose = useHandleClose();
  const handleConfig = useHandleConfig();
  
  if (!onConfig && !closable) {
    return null;
  }
  
  return <ScTooltipActions>
    {onConfig ? <IconButton {...{
      spm: 'config',
      icon: 'config',
      onClick: handleConfig
    }} /> : null}
    {closable ? <IconButton {...{
      spm: 'x',
      icon: 'x',
      onClick: handleClose
    }} /> : null}
  </ScTooltipActions>;
}
