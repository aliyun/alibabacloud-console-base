import React, {
  useState,
  useCallback
} from 'react';

import {
  Button,
  InputText
} from '@alicloud/demo-rc-elements';

import copyText from '../../src';

export default function DemoDefault(): JSX.Element {
  const [stateText, setStateText] = useState<string>('some text');
  const handleCopyText = useCallback(() => copyText(stateText), [stateText]);
  
  return <>
    <InputText {...{
      value: stateText,
      onChange: setStateText
    }} />
    <Button onClick={handleCopyText}>Copy from Input</Button>
  </>;
}
