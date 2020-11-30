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

const REGIONS = [{
  id: 'cn-hangzhou',
  name: '杭州'
}, {
  id: 'cn-wuchang',
  name: '五常'
}, {
  id: 'boshit',
  name: '驳是测试'
}, {
  id: 'cn-alibaba',
  name: '阿里巴巴'
}, {
  id: 'us-alibaba',
  name: '阿里巴巴美国'
}];

export default function SetRegions(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(JSON.stringify(REGIONS));
  
  const handleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: {
        value
      }
    } = e;
    
    setStateValue(value);
  }, []);
  const handleSet = useCallback(() => forApp.setRegions(JSON.parse(stateValue)), [stateValue]);
  
  return <>
    <H3>forApp.setRegions(regions)</H3>
    <P>设置可用 region 列表（自动切换为「非全球」模式）</P>
    <InputTextarea onChange={handleInputChange} value={stateValue} />
    <Button onClick={handleSet}>设置</Button>
  </>;
}
