import React, {
  ChangeEvent,
  useState,
  useCallback
} from 'react';

import {
  H3,
  P,
  Button,
  InputText
} from '@alicloud/demo-rc-elements';
import {
  forApp
} from '@alicloud/console-base-messenger';

export default function SetId(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>('');
  
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        value
      }
    } = e;
    
    setStateValue(value);
  }, []);
  const handleSet = useCallback(() => forApp.setResourceGroupId(stateValue), [stateValue]);
  
  return <>
    <H3>forApp.setResourceGroupId(id)</H3>
    <P>设置当前资源组 id（自动展示）</P>
    <InputText onChange={handleInputChange} value={stateValue} />
    <Button onClick={handleSet}>设置</Button>
  </>;
}
