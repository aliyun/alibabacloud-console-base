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

const RESOURCE_COUNT = {
  'cn-hangzhou': 1,
  'cn-shanghai': 12,
  boshit: 123
};

export default function SetResourceCount(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(JSON.stringify(RESOURCE_COUNT));
  
  const handleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: {
        value
      }
    } = e;
    
    setStateValue(value);
  }, []);
  const handleSet = useCallback(() => forApp.setRegionResourceCount(JSON.parse(stateValue)), [stateValue]);
  
  return <>
    <H3>forApp.setRegionResourceCount(resourceCountMap)</H3>
    <P>设置资源数（自动切换为「非全球」模式）</P>
    <InputTextarea onChange={handleInputChange} value={stateValue} />
    <Button onClick={handleSet}>设置</Button>
  </>;
}
