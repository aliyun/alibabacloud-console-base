import React, {
  useState
} from 'react';
import styled from 'styled-components';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import {
  MarkProps,
  MarkBase,
  New,
  Hot,
  PublicBeta,
  Beta,
  Alpha,
  Update
} from '../../src';
import PkgInfo from '../pkg-info';
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
    <PkgInfo />
    <Knobs onChange={setStateProps} />
    <div>
      <New {...stateProps} />
      <Hot {...stateProps} />
      <PublicBeta {...stateProps} />
      <Beta {...stateProps} />
      <Alpha {...stateProps} />
      <Update {...stateProps} />
    </div>
    <div>New<New {...stateProps} />New</div>
    <div>Hot<Hot {...stateProps} />Hot</div>
    <div>Public Beta<PublicBeta {...stateProps} />Public Beta</div>
    <div>Beta<Beta {...stateProps} />Beta</div>
    <div>Alpha<Alpha {...stateProps} />Alpha</div>
    <div>Update<Update {...stateProps} />Update</div>
  
    <MarkBase>Help</MarkBase>
    
    <ScNew />
  </>;
}
