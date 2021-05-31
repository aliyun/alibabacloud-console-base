import React, {
  useState,
  useCallback
} from 'react';

import {
  Hr,
  Button
} from '@alicloud/demo-rc-elements';

import CopyIt from '../../src';

export default function DemoDefault(): JSX.Element {
  const [stateText, setStateText] = useState<string>(new Date().toUTCString());
  
  const handleRefreshText = useCallback(() => setStateText(new Date().toUTCString()), [setStateText]);
  
  return <>
    <CopyIt text={stateText} />
    <Hr />
    <Button onClick={handleRefreshText}>Refresh Text - Shall Reset Timer</Button>
  </>;
}
