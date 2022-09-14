import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';

import {
  ChoiceItem,
  H1,
  Button,
  InputSwitch,
  RadioGroup,
  LongArticle,
  Flex100HBF
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  TabProps
} from '@alicloud/console-base-rc-tabs';

import OneModal, {
  ModalMode,
  ModalTab
} from '../../src';
import PkgInfo from '../pkg-info';
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
    content: 'Tray';
    font-size: 0.8em;
  }
`;

const DEFAULT_PAGES: ModalTab[] = [{
  key: 'default-1',
  title: '哥特之皇 Lacrimosa',
  content: <LongArticle />
}, {
  key: 'default-2',
  title: 'Flex 上中下',
  content: <Flex100HBF />
}, {
  key: 'default-3',
  title: '测试用例长长长长长长长长长长长长长长长长长长长长长长长长长长长',
  content: <>123123123</>,
  closable: true
}];

const MODE_CHOICES: ChoiceItem<ModalMode>[] = Object.keys(ModalMode).map((k): ChoiceItem<ModalMode> => ({
  label: k,
  value: ModalMode[k as keyof typeof ModalMode]
}));

export default function DemoDefault(): JSX.Element {
  const [stateTabs, setStateTabs] = useState(DEFAULT_PAGES);
  const [stateMode, setStateMode] = useState<ModalMode | undefined>(undefined);
  const [stateVisible, setStateVisible] = useState<boolean>(true);
  
  const handleTabClose = useCallback((_tab: TabProps, toTabs: TabProps[]) => setStateTabs(toTabs), [setStateTabs]);
  const handleAdd = useCallback(() => {
    const key = new Date().toISOString();
    
    setStateTabs(update(stateTabs, {
      $push: [{
        key,
        title: key,
        content: <>{new Date().toString()}</>,
        closable: true
      }]
    }));
  }, [stateTabs, setStateTabs]);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <OneModal {...{
      tabs: {
        tabs: stateTabs,
        onTabClose: handleTabClose
      },
      affix: '#the-minimize-to-node-for-demo',
      mode: stateMode,
      visible: stateVisible,
      onModeChange: setStateMode,
      onClose: () => setStateVisible(false)
    }} />
    <H1>props</H1>
    <RadioGroup<ModalMode> {...{
      label: 'props.mode',
      items: MODE_CHOICES,
      value: stateMode,
      onChange: setStateMode
    }} />
    <InputSwitch {...{
      label: 'visible',
      value: stateVisible,
      onChange: setStateVisible
    }} />
    <div>
      <LoadConsoleBase />
      <Button onClick={handleAdd}>ADD</Button>
    </div>
    <LongArticle />
    <ScMinimizedTray id="the-minimize-to-node-for-demo" />
  </>;
}
