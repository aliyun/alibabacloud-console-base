import React, {
  useState
} from 'react';
import styled from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Dropdown from '../../src';
import Knobs, {
  IKnobsData
} from '../knobs';

const ScTrigger = styled.div`
  padding: 8px;
  background: #ff0;
  color: #f00;
`;

export default function DemoDefault(): JSX.Element {
  const [stateKnobsData, setStateKnobsData] = useState<IKnobsData>({} as IKnobsData);
  
  const {
    trigger,
    triggerAsJSX,
    ...props
  } = stateKnobsData;
  
  return <>
    <ThemeSwitcher />
    <Knobs onChange={setStateKnobsData} />
    <Dropdown {...{
      ...props,
      trigger: triggerAsJSX ? <ScTrigger>{trigger}</ScTrigger> : trigger
    }} />
  </>;
}
