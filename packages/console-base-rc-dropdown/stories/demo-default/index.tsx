import React, {
  useState
} from 'react';
import styled from 'styled-components';

import {
  LongArticle
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Dropdown from '../../src';
import Knobs, {
  IKnobsData
} from '../knobs';

const ScTriggerJsx = styled.div`
  padding: 8px;
  background: #ff0;
  color: #f00;
`;

const ScTriggerSpan = styled.span`
  color: #f00;
`;

function onVisibleChange(visible: boolean): void {
  console.info('!!visible change', visible);
}

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
    <div>
      This text is to make the dropdown not stick to the left of the window. <Dropdown {...{
        ...props,
        trigger: triggerAsJSX ? <ScTriggerJsx>{trigger}</ScTriggerJsx> : <ScTriggerSpan>{trigger}</ScTriggerSpan>,
        onVisibleChange
      }} />
    </div>
    <LongArticle />
  </>;
}
