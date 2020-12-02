import React, {
  useState
} from 'react';

import Pagination, {
  PaginationProps
} from '../../src';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<PaginationProps>({});
  
  return <>
    <Knobs onChange={setStateProps} />
    <Pagination {...stateProps} />
  </>;
}
