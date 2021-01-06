import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  ChoiceItem,
  Button,
  RadioGroup,
  LongArticle,
  Flex100HBF
} from '@alicloud/demo-rc-elements';

import OneModal, {
  EModalMode,
  ModalTab
} from '../../src';
import LoadConsoleBase from '../load-console-base';

const ScMinimizedTray = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  border: 8px solid rgba(99, 0, 126, 0.33);
  border-radius: 50%;
  box-sizing: border-box;
  background-clip: content-box;
  background-color: #fff;
  width: 52px;
  height: 52px;
  line-height: 36px;
  text-align: center;
  color: #969;
  transition: all linear 0.2s;
  
  &:hover {
    border-color: rgba(99, 0, 126, 0.5);
    color: #c3c;
  }
  
  &:before {
    content: 'FUCK';
    font-size: 0.8em;
  }
`;

const DEFAULT_PAGES: ModalTab[] = [{
  title: '哥特之皇 Lacrimosa',
  content: <LongArticle />
}, {
  title: 'Flex 上中下',
  content: <Flex100HBF />
}, {
  title: '测试用例长长长长长长长长长长长长长长长长长长长长长长长长长长长',
  content: <>123123123</>
}];

const MODE_CHOICES: ChoiceItem<EModalMode>[] = Object.keys(EModalMode).map((k): ChoiceItem<EModalMode> => ({
  label: k,
  value: EModalMode[k as keyof typeof EModalMode]
}));

export default function DemoDefault(): JSX.Element {
  const [stateTabs, setStateTabs] = useState(DEFAULT_PAGES);
  const [stateMode, setStateMode] = useState<EModalMode | undefined>(undefined);
  const [stateVisible, setStateVisible] = useState<boolean>(true);
  
  const handleAdd = useCallback(() => {
    setStateTabs([...stateTabs, {
      key: Date.now(),
      title: new Date().toISOString(),
      content: <>{new Date().toString()}</>,
      closable: true
    }]);
  }, [stateTabs, setStateTabs]);
  
  return <>
    <OneModal {...{
      tabs: stateTabs,
      affix: '#the-minimize-to-node-for-demo',
      mode: stateMode,
      visible: stateVisible,
      onModeChange: setStateMode,
      onClose: () => setStateVisible(false)
    }} />
    <RadioGroup<EModalMode> {...{
      label: 'props.mode',
      items: MODE_CHOICES,
      value: stateMode,
      onChange: setStateMode
    }} />
    <label>
      <input {...{
        type: 'checkbox',
        checked: stateVisible,
        onChange: (e): void => setStateVisible(e.target.checked)
      }} /> visible
    </label>
    <div>
      <LoadConsoleBase />
      <Button onClick={handleAdd}>ADD</Button>
    </div>
    <LongArticle />
    <ScMinimizedTray id="the-minimize-to-node-for-demo" />
  </>;
}
