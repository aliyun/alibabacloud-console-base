import React, {
  useState
} from 'react';

import {
  H1,
  H2
} from '@alicloud/demo-rc-elements';

import Dropdown from '../../src';

import TheTrigger from './the-trigger';
import TheDrop from './the-drop';

export default function DemoHook(): JSX.Element {
  const [stateVisible, setStateVisible] = useState<boolean>(false);
  
  return <>
    <H1>利用 useDropdown</H1>
    <H2>visible not controlled</H2>
    <Dropdown {...{
      trigger: <TheTrigger />,
      body: <TheDrop />
    }} />
    <H2>visible controlled controlled</H2>
    <Dropdown {...{
      visible: stateVisible,
      trigger: <TheTrigger />,
      body: <TheDrop />,
      onVisibleChange: setStateVisible
    }} />
  </>;
}
