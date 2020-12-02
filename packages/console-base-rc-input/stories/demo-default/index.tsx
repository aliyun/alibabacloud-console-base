import React, {
  useState
} from 'react';
import {
  boolean
} from '@storybook/addon-knobs';

import Input, {
  SearchInput,
  InputProps
} from '../../src';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<InputProps>({});
  
  const searchInput = boolean('使用 SearchInput', false);
  
  return <>
    <Knobs onChange={setStateProps} />
    {searchInput ? <SearchInput {...stateProps} /> : <Input {...stateProps} />}
  </>;
}
