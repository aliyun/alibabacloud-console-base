import React from 'react';
import styled from 'styled-components';

import {
  IPropsRcTooltipEvents
} from '../../../types';
import {
  ACTION_OFFSET_FROM_TOP,
  ACTION_OFFSET_FROM_RIGHT
} from '../../../const';
import IconButton from '../../icon-button';

const ScTooltipActions = styled.div`
  position: absolute;
  top: ${ACTION_OFFSET_FROM_TOP}px;
  right: ${ACTION_OFFSET_FROM_RIGHT}px;
`;

export default function TooltipActions({
  onConfig,
  onClose
}: IPropsRcTooltipEvents): JSX.Element | null {
  if (!onConfig && !onClose) {
    return null;
  }
  
  return <ScTooltipActions>
    {onConfig ? <IconButton {...{
      spm: 'config',
      icon: 'config',
      onClick: onConfig
    }} /> : null}
    {onClose ? <IconButton {...{
      spm: 'x',
      icon: 'x',
      onClick: onClose
    }} /> : null}
  </ScTooltipActions>;
}
