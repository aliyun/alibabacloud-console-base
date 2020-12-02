import React, {
  ChangeEvent,
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
  const handleTextChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setStateText(e.target.value), [setStateText]);
  const handleCopyText = useCallback(() => copyText(stateText), [stateText]);
  
  return <>
    <InputText {...{
      value: stateText,
      onChange: handleTextChange
    }} />
    <Button onClick={handleCopyText}>Copy from Input</Button>
  </>;
}
