import React, {
  useState
} from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  SidePanelItem
} from '../../../../src';

export default function FaceChanger(): JSX.Element {
  const [stateHappy, setStateHappy] = useState(false);
  
  return <SidePanelItem {...{
    title: 'I am sad... now i am happy',
    icon: <Icon type={stateHappy ? 'face-smile' : 'face-cry'} />,
    onMouseEnter: () => setStateHappy(true),
    onMouseLeave: () => setStateHappy(false)
  }} />;
}
