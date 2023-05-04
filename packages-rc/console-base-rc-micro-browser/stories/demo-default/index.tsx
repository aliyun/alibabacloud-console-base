import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';

import {
  ChoiceItem,
  H1,
  H2,
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
import TopNav from '@alicloud/console-base-rc-top-nav';
import SidePanel from '@alicloud/console-base-rc-side-panel';

import MicroBrowser, {
  MicroBrowserMode,
  MicroBrowserTabsItemProps
} from '../../src';
import PkgInfo from '../pkg-info';

const ScMinimizedTray = styled.div`
  position: fixed;
  right: 64px;
  bottom: 16px;
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

const TAB_ITEMS: MicroBrowserTabsItemProps[] = [{
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

const MODE_CHOICES: ChoiceItem<MicroBrowserMode>[] = Object.keys(MicroBrowserMode).map((k): ChoiceItem<MicroBrowserMode> => ({
  label: k,
  value: MicroBrowserMode[k as keyof typeof MicroBrowserMode]
}));

export default function DemoDefault(): JSX.Element {
  const [stateTabs, setStateTabs] = useState<MicroBrowserTabsItemProps[]>(TAB_ITEMS);
  const [stateMode, setStateMode] = useState<MicroBrowserMode | undefined>(undefined);
  const [stateMinimizable, setStateMinimizable] = useState(false);
  const [stateVisible, setStateVisible] = useState(true);
  
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
    <MicroBrowser {...{
      mode: stateMode,
      tabs: {
        tabs: stateTabs,
        onTabClose: handleTabClose
      },
      // widthDefault: 400,
      // widthMin: 200,
      // widthMax: 600,
      // heightDefault: 200,
      // heightMin: 100,
      // heightMax: 320,
      // widthDefaultPinned: 560,
      // widthMinPinned: 200,
      // widthMaxPinned: 800,
      affix: '#the-minimize-to-node-for-demo',
      visible: stateVisible,
      minimizable: stateMinimizable,
      onModeChange: setStateMode,
      onClose: () => setStateVisible(false)
    }} />
    <TopNav />
    <SidePanel />
    <H1>props</H1>
    <RadioGroup<MicroBrowserMode> {...{
      label: 'props.mode',
      items: MODE_CHOICES,
      value: stateMode,
      onChange: setStateMode
    }} />
    <InputSwitch {...{
      label: 'props.visible',
      value: stateVisible,
      onChange: setStateVisible
    }} />
    <InputSwitch {...{
      label: 'props.minimizable',
      value: stateMinimizable,
      onChange: setStateMinimizable
    }} />
    <H2>添加 Tab</H2>
    <div>
      <Button onClick={handleAdd}>ADD</Button>
    </div>
    <H2>以下内容仅用来撑高</H2>
    <LongArticle />
    <ScMinimizedTray id="the-minimize-to-node-for-demo" />
  </>;
}
