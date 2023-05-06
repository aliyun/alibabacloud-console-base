import React, {
  useState,
  useCallback
} from 'react';
import update from 'immutability-helper';

import {
  Hr,
  Button,
  RadioGroup,
  InputText,
  InputSwitch,
  SoloPane,
  LongArticle,
  Flex100HBF,
  PreJson
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

import Tabs, {
  TabsTheme,
  TabsProps,
  TabProps
} from '../../src';
import PkgInfo from '../pkg-info';

const TABS: TabProps[] = [{
  key: 'long-article',
  title: '长文',
  content: <LongArticle />,
  order: 123, // 将放在后边
  closable: true
}, {
  key: 'hbr',
  title: 'HBR 100%',
  content: <Flex100HBF />,
  closable: true
}, {
  key: 'long-title',
  title: '标题很长长长长长长长长长长长长长长长长长长长长长长长长长长长',
  content: <>123123123</>,
  visible: true,
  closable: true
}, {
  key: 'never-visible',
  title: 'Never Visible',
  content: <>Never Visible</>,
  visible: false
}];

let addIndex = 0;

function generateTabForAdd(): TabProps {
  addIndex += 1;
  
  const key = `add-${addIndex}`;
  
  return {
    key,
    title: key,
    content: new Date().toString(),
    closable: true
  };
}

export default function DemoDefault(): JSX.Element {
  const [stateTabs, setStateTabs] = useState<TabProps[]>(TABS);
  const [stateNoContent, setStateNoContent] = useState<boolean>(false);
  const [stateTheme, setStateTheme] = useState<TabsTheme | undefined>();
  const [stateActiveTab, setStateActiveTab] = useState<string>('hbr');
  
  const handleAdd = useCallback(() => setStateTabs(update(stateTabs, {
    $push: [generateTabForAdd()]
  })), [stateTabs, setStateTabs]);
  
  const handleTabClose = useCallback((_tab: TabProps, toTabs: TabProps[]) => {
    setStateTabs(toTabs);
  }, [setStateTabs]);
  
  const tabsProps: TabsProps = {
    tabs: stateTabs,
    theme: stateTheme,
    noContent: stateNoContent,
    activeKey: stateActiveTab,
    onTabClose: handleTabClose,
    onChange: setStateActiveTab
  };
  
  return <SoloPane demo={<Tabs {...tabsProps} />}>
    <ThemeSwitcher />
    <PkgInfo />
    <Button onClick={handleAdd}>Add Tab</Button>
    <Hr />
    <div>
      props.activeKey: <InputText {...{
        value: stateActiveTab,
        onChange: setStateActiveTab
      }} />
    </div>
    <InputSwitch {...{
      label: 'props.noContent',
      value: stateNoContent,
      onChange: setStateNoContent
    }} />
    <RadioGroup<TabsTheme> {...{
      label: 'props.theme',
      items: [{
        label: 'plain',
        value: TabsTheme.PLAIN
      }, {
        label: 'inverse',
        value: TabsTheme.INVERSE
      }],
      value: stateTheme,
      onChange: setStateTheme
    }} />
    <PreJson o={tabsProps} />
  </SoloPane>;
}
