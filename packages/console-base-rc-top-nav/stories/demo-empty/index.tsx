import React, {
  useState,
  useCallback
} from 'react';

import {
  Button
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';

import TopNav, {
  TopNavProps
} from '../../src';
import PkgInfo from '../pkg-info';

const propsNull: TopNavProps = {
  dock: null,
  logo: null,
  menus: null,
  language: null,
  account: null,
  customLeft: null,
  customRight: null
};

export default function DemoEmpty(): JSX.Element {
  const [stateNullProps, setStateNullProps] = useState<boolean>(false);
  const handleToggleNullProps = useCallback(() => setStateNullProps(!stateNullProps), [stateNullProps, setStateNullProps]);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    {stateNullProps ? <TopNav {...propsNull} /> : <TopNav />}
    <Button onClick={handleToggleNullProps}>null props</Button>
  </>;
}
