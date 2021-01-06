import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import Input, {
  InputProps
} from '../../src';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<InputProps>({});
  
  return <>
    <ThemeSwitcher />
    <Knobs onChange={setStateProps} />
    <Input {...stateProps} />
  </>;
}
