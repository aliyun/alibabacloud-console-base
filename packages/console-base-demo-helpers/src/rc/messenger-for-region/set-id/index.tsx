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
  const handleSet = useCallback(() => forApp.setRegionId(stateValue), [stateValue]);
  
  return <>
    <H3>forApp.setRegionId(id)</H3>
    <P>设置当前 region id（自动切换为「非全球」模式）</P>
    <InputText onChange={handleInputChange} value={stateValue} />
    <Button onClick={handleSet}>设置</Button>
  </>;
}
