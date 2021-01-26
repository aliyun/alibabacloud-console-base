import React, {
  useState
} from 'react';

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
  </>;
}
