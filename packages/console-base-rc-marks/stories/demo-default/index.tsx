import React, {
  useState
} from 'react';

import {
  MarkProps,
  New,
  Hot,
  Update,
  Alpha,
  Beta
} from '../../src';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<MarkProps>({});
  
  return <>
    <Knobs onChange={setStateProps} />
    <div>New<New {...stateProps} />New</div>
    <div>Hot<Hot {...stateProps} />Hot</div>
    <div>Update<Update {...stateProps} />Update</div>
    <div>Alpha<Alpha {...stateProps} />Alpha</div>
    <div>Beta<Beta {...stateProps} />Beta</div>
  </>;
}
