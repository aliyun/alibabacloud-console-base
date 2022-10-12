import React, {
  useState
} from 'react';

import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import Pagination, {
  PaginationProps
} from '../../src';
import PkgInfo from '../pkg-info';
import Knobs from '../knobs';

export default function DemoDefault(): JSX.Element {
  const [stateProps, setStateProps] = useState<PaginationProps>({});
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <Knobs onChange={setStateProps} />
    <Pagination {...stateProps} />
  </>;
}
