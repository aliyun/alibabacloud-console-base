import React, {
  ChangeEvent,
  useState,
  useCallback
} from 'react';

import {
  H3,
  P,
  Button,
  InputTextarea
} from '@alicloud/demo-rc-elements';
import {
  forApp
} from '@alicloud/console-base-messenger';

export default function SetResourceCount(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>('{}');
  
  const handleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: {
        value
      }
    } = e;
    
    setStateValue(value);
  }, []);
  const handleSet = useCallback(() => forApp.setResourceGroupResourceCount(JSON.parse(stateValue)), [stateValue]);
  
  return <>
    <H3>forApp.setResourceGroupResourceCount(o)</H3>
    <P>设置资源数</P>
    <InputTextarea onChange={handleInputChange} value={stateValue} />
    <Button onClick={handleSet}>设置</Button>
  </>;
}
