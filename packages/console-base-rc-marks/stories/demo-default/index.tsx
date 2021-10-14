import React, {
  useState
} from 'react';
import styled from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import {
  MarkProps,
  New,
  Hot,
  Update,
  Alpha,
  Beta,
  PublicBeta
} from '../../src';
import Knobs from '../knobs';

const ScNew = styled(New)`
  position: absolute;
  top: 50px;
  right: 20px;
  padding: 0 2px;
  transform: scale(0.75);
`;

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<MarkProps>({});
  
  return <>
    <ThemeSwitcher />
    <Knobs onChange={setStateProps} />
    <div>New<New {...stateProps} />New</div>
    <div>Hot<Hot {...stateProps} />Hot</div>
    <div>Update<Update {...stateProps} />Update</div>
    <div>Alpha<Alpha {...stateProps} />Alpha</div>
    <div>Beta<Beta {...stateProps} />Beta</div>
    <div>Public Beta<PublicBeta {...stateProps} />Public Beta</div>
  
    <ScNew />
  </>;
}
