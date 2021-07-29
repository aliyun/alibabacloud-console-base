import React, {
  CSSProperties
} from 'react';
import styled from 'styled-components';

import {
  mixinBgPrimary,
  mixinShadowL,
  mixinTypoLineWrap
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme,
  ButtonSize
} from '@alicloud/console-base-rc-button';

import {
  IPropsBeaconTip
} from '../../types';
import {
  BEACON_SIZE,
  BEACON_SIZE_HALO,
  BEACON_TIP_DEFAULT_WIDTH
} from '../../const';

const ScTheTip = styled.div`
  position: absolute;
  padding: 12px 16px;
  border-radius: 2px;
  ${mixinBgPrimary}
  ${mixinShadowL}
  ${mixinTypoLineWrap}
`;

const ScButton = styled(Button)`
  margin-top: 12px;
`;

function computeTipStyle(width: number, tipAlign: IPropsBeaconTip['tipAlign']): CSSProperties {
  let t: number | undefined;
  let r: number | undefined;
  let b: number | undefined;
  let l: number | undefined;
  
  switch (tipAlign) {
    case 'tl':
      b = 12;
      r = -BEACON_SIZE;
      
      break;
    case 'tr':
      b = 12;
      l = 0;
      
      break;
    case 'bl':
      t = BEACON_SIZE_HALO;
      r = -BEACON_SIZE;
      
      break;
    case 'br':
      t = BEACON_SIZE_HALO;
      l = 0;
      
      break;
    case 'lt':
      b = -BEACON_SIZE;
      r = 12;
      
      break;
    case 'lb':
      t = 0;
      r = 12;
      
      break;
    case 'rt':
      b = -BEACON_SIZE;
      l = BEACON_SIZE_HALO;
      
      break;
    case 'rb':
      t = 0;
      l = BEACON_SIZE_HALO;
      
      break;
    default: // 等同 br
      t = BEACON_SIZE_HALO;
      l = 0;
      
      break;
  }
  
  return {
    width,
    top: t,
    right: r,
    bottom: b,
    left: l
  };
}

export default function TheTip({
  tip,
  tipAlign,
  tipWidth = BEACON_TIP_DEFAULT_WIDTH,
  buttonClose,
  onClose
}: IPropsBeaconTip): JSX.Element {
  return <ScTheTip style={computeTipStyle(tipWidth, tipAlign)}>
    <div>{tip}</div>
    {onClose ? <ScButton {...{
      spm: 'got-it',
      label: buttonClose || 'Close',
      size: ButtonSize.S,
      theme: ButtonTheme.SECONDARY,
      onClick: onClose
    }} /> : null}
  </ScTheTip>;
}
