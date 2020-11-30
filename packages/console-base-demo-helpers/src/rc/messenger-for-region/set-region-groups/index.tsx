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

const REGION_GROUPS = [{
  name: '地球',
  regions: [{
    id: 'cn-hangzhou',
    name: '杭州'
  }, {
    id: 'cn-shanghai',
    name: '上海'
  }, {
    id: 'cn-chengdu',
    name: '成都'
  }, {
    id: 'cn-beijing',
    name: '背景'
  }, {
    id: 'us-alibaba',
    name: '阿里巴巴美国'
  }]
}, {
  name: '驳是',
  regions: [{
    id: 'cn-wuchang',
    name: '五常'
  }, {
    id: 'cn-beihang',
    name: '北航'
  }, {
    id: 'cn-boshit',
    name: '驳是'
  }, {
    id: 'cn-alibaba',
    name: '阿里巴巴美国'
  }]
}];

export default function SetRegionGroups(): JSX.Element {
  const [stateValue, setStateValue] = useState<string>(JSON.stringify(REGION_GROUPS));
  
  const handleInputChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: {
        value
      }
    } = e;
    
    setStateValue(value);
  }, []);
  const handleSet = useCallback(() => forApp.setRegionGroups(JSON.parse(stateValue)), [stateValue]);
  
  return <>
    <H3>forApp.setRegionGroups(regions)</H3>
    <P>设置可用 region 分组列表，优先级高于 regions（自动切换为「非全球」模式）</P>
    <InputTextarea onChange={handleInputChange} value={stateValue} />
    <Button onClick={handleSet}>设置</Button>
  </>;
}
