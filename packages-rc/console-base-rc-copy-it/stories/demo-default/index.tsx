import React, {
  useState,
  useCallback
} from 'react';

import {
  Hr,
  Button
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import CopyIt from '../../src';
import PkgInfo from '../pkg-info';

export default function DemoDefault(): JSX.Element {
  const [stateText, setStateText] = useState<string>(new Date().toUTCString());
  
  const handleRefreshText = useCallback(() => setStateText(new Date().toUTCString()), [setStateText]);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <CopyIt text={stateText} />
    <Hr />
    <Button onClick={handleRefreshText}>Refresh Text - Shall Reset Timer</Button>
  </>;
}
