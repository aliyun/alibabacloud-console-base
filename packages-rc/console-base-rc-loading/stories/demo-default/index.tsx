import React, {
  useState
} from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import Loading, {
  LoadingProps
} from '../../src';
import PkgInfo from '../pkg-info';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<Partial<LoadingProps>>({});
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <Knobs onChange={setStateProps} />
    <H1>Loading - 调整 knobs 看效果</H1>
    <Loading {...stateProps} />
  </>;
}
