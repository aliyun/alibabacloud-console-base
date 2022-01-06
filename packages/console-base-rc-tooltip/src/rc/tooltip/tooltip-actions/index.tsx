import React from 'react';
import styled from 'styled-components';

import {
  IPropsTooltipActions
} from '../../../types';
import {
  ACTION_OFFSET
} from '../../../const';
import IconButton from '../../icon-button';

const ScTooltipActions = styled.div`
  position: absolute;
  top: ${ACTION_OFFSET}px;
  right: ${ACTION_OFFSET}px;
`;

export default function TooltipActions({
  onConfig,
  onClose
}: IPropsTooltipActions): JSX.Element | null {
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
