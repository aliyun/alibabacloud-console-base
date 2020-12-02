import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import Dropdown from '../../src';

import TheTrigger from './the-trigger';
import TheDrop from './the-drop';

export default function DemoHook(): JSX.Element {
  return <>
    <H1>利用 useDropdown</H1>
    <Dropdown {...{
      trigger: <TheTrigger />,
      body: <TheDrop />
    }} />
  </>;
}
