import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  H1,
  P
} from '@alicloud/demo-rc-elements';

import Input, {
  InputProps,
  SearchInput
} from '../../src';
import PkgInfo from '../pkg-info';
import Knobs from '../knobs';

function onChange(value: string): void {
  // eslint-disable-next-line no-console
  console.info(value);
}

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<InputProps>({});
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <H1>Input 测试</H1>
    <P>请使用 knobs 进行调戏 <span role="img" aria-label="play">🙈</span></P>
    <Knobs onChange={setStateProps} />
    <Input {...{
      ...stateProps,
      onChange
    }} />
    <H1>SearchInput</H1>
    <SearchInput {...{
      onChange
    }} />
  </>;
}
