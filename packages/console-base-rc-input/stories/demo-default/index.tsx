import React, {
  useState
} from 'react';

import Input, {
  InputProps
} from '../../src';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<InputProps>({});
  
  return <>
    <Knobs onChange={setStateProps} />
    <Input {...stateProps} />
  </>;
}
