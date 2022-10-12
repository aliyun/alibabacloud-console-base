import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  mixinBgSuccessTintFade,
  mixinTextSecondary
} from '@alicloud/console-base-theme';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  RadioGroup
} from '@alicloud/demo-rc-elements';

import Beacon, {
  BeaconProps
} from '../../src';
import PkgInfo from '../pkg-info';

const ScNeedBeacon = styled.div`
  position: absolute;
  top: 200px;
  left: 360px;
  padding: 20px;
  line-height: 3;
  font-size: 2em;
  ${mixinBgSuccessTintFade}
  ${mixinTextSecondary}
`;

const TIP_ALIGN_DATA_SOURCE = [{
  label: 'n/a',
  value: ''
}, {
  label: 'tl',
  value: 'tl'
}, {
  label: 'tr',
  value: 'tr'
}, {
  label: 'bl',
  value: 'bl'
}, {
  label: 'br',
  value: 'br'
}, {
  label: 'lt',
  value: 'lt'
}, {
  label: 'lb',
  value: 'lb'
}, {
  label: 'rt',
  value: 'rt'
}, {
  label: 'rb',
  value: 'rb'
}];

const ScBeacon = styled(Beacon)`
  bottom: 24px;
  left: 32px;
`;

function onClose(): void {
  // eslint-disable-next-line no-console
  console.info('You need onClose to close the beacon tip');
}

export default function DemoDefault(): JSX.Element {
  const [stateTipAlign, setStateTipAlign] = useState<string>('');
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <RadioGroup {...{
      label: 'tipAlign',
      items: TIP_ALIGN_DATA_SOURCE,
      value: stateTipAlign,
      onChange: setStateTipAlign
    }} />
    <ScNeedBeacon>
      I Need a Beacon
      <ScBeacon {...{
        tip: 'You need to know I really hate widget! Very VEry VERy VERY MUCH...',
        tipAlign: (stateTipAlign || undefined) as BeaconProps['tipAlign'],
        onClose
      }} />
    </ScNeedBeacon>
  </>;
}
