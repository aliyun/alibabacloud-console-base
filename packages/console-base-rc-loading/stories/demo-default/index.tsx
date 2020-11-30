import React, {
  useState
} from 'react';

import Loading, {
  LoadingProps
} from '../../src';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<Partial<LoadingProps>>({});
  
  return <div>
    <Loading {...stateProps} />
    <Loading {...stateProps} retry={() => console.info(123456)} />
    <Knobs onChange={setStateProps} />
  </div>;
}
