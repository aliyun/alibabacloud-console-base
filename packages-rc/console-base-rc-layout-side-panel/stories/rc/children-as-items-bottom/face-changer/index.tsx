import React, {
  useState
} from 'react';

import Icon from '@alicloud/console-base-rc-icon';

import {
  SidePanelItem
} from '../../../../src';

export default function FaceChanger(): JSX.Element {
  const [stateActive, setStateActive] = useState(false);
  
  return <SidePanelItem {...{
    title: 'I am sad... click me to make me happy',
    titleActive: 'Now i am happy',
    icon: <Icon type="face-cry" />,
    iconHovered: <Icon type="face-smile" />,
    iconActive: <Icon type="face-smile" />,
    active: stateActive,
    onActiveChange: setStateActive
  }} />;
}
