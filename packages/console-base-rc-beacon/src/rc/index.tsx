import React, {
  MouseEvent
} from 'react';
import styled from 'styled-components';

import {
  FontBase12
} from '@alicloud/console-base-theme-sc-base';

import {
  IPropsBeacon
} from '../types';

import TheBeacon from './the-beacon';
import TheTip from './the-tip';

const ScBeacon = styled(FontBase12)`
  position: absolute;
  line-height: 1.5;
  z-index: 100;
`;

function stopEventBubbling(e: MouseEvent): void {
  e.stopPropagation();
}

export default function Beacon({
  tip,
  tipAlign,
  tipWidth,
  buttonClose,
  onClose,
  ...props
}: IPropsBeacon): JSX.Element {
  return <ScBeacon {...props} onClick={stopEventBubbling}>
    <TheBeacon />
    {tip ? <TheTip {...{
      tip,
      tipAlign,
      tipWidth,
      buttonClose,
      onClose
    }} /> : null}
  </ScBeacon>;
}
