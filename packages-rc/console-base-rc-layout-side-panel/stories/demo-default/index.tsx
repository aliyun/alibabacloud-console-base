import React, {
  useState
} from 'react';

import {
  InputSwitch,
  Table
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import Icon from '@alicloud/console-base-rc-icon';
import LayoutTopBar from '@alicloud/console-base-rc-layout-top-bar';

import LayoutSidePanel from '../../src';
import {
  SVG
} from '../const';
import {
  FakeApiInspector
} from '../rc';
import PkgInfo from '../pkg-info';

interface IDemoAccountItem {
  title: string;
  description: string;
}

const dataSourceAccount: IDemoAccountItem[] = [{
  title: '售后在线服务',
  description: '在线实时沟通，快速解决您的问题'
}, {
  title: '聆听·建议反馈',
  description: '阿里云不是完美的，我们渴望您的建议'
}];

export default function DemoDefault(): JSX.Element {
  const [stateTopbar, setStateTopbar] = useState(true);
  const [stateCollapsed, setStateCollapsed] = useState(false);
  const [stateApiInspectorVisible, setStateApiInspectorVisible] = useState(false);
  
  return <>
    {stateTopbar ? <LayoutTopBar /> : null}
    <LayoutSidePanel {...{
      itemsTop: [{
        title: '测试 Icon 组件',
        icon: <Icon type="dingding" />,
        unread: true
      }, {
        title: '测试 SVG 组件',
        icon: <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path d="m232.533 345.6 324.267 320c17.067 17.067 17.067 42.667 0 59.733l-117.333 115.2c-17.067 17.067-42.667 17.067-59.734 0l-324.266-320c-17.067-17.066-17.067-42.666 0-59.733L172.8 345.6c14.933-17.067 42.667-17.067 59.733 0z" fill="#185ABD" />
          <path d="m968.533 315.733-529.066 524.8c-17.067 17.067-42.667 17.067-59.734 0L262.4 725.333c-17.067-17.066-17.067-42.666 0-59.733l529.067-524.8c17.066-17.067 42.666-17.067 59.733 0L968.533 256c17.067 17.067 17.067 42.667 0 59.733z" fill="#41A5EE" />
        </svg>,
        unread: 12
      }, {
        title: '测试 SVG 字符串',
        icon: SVG
      }, {
        title: '测试图片 URL',
        icon: 'https://img.alicdn.com/tfs/TB1JhtxuAT2gK0jSZFkXXcIQFXa-128-128.png'
      }],
      itemsBottom: [{
        title: 'API Inspector',
        icon: <Icon type="toolkit-api" />,
        active: stateApiInspectorVisible,
        onActiveChange: setStateApiInspectorVisible
      }, {
        title: '微试验',
        icon: <Icon type="toolkit-edu" />,
        tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        title: '联系我们',
        icon: <Icon type="toolkit-contact" />,
        tooltip: <Table<IDemoAccountItem> {...{
          dataSource: dataSourceAccount,
          columns: [{
            title: '标题',
            dataIndex: 'title'
          }, {
            title: '描述',
            dataIndex: 'description'
          }]
        }} />
      }],
      collapsed: stateCollapsed,
      onToggleCollapsed: setStateCollapsed
    }} />
    <ThemeSwitcher />
    <PkgInfo />
    <InputSwitch {...{
      label: '展示 Topbar',
      value: stateTopbar,
      onChange: setStateTopbar
    }} />
    <InputSwitch {...{
      label: 'props.collapsed',
      value: stateCollapsed,
      onChange: setStateCollapsed
    }} />
    <FakeApiInspector {...{
      visible: stateApiInspectorVisible,
      onVisibleChange: setStateApiInspectorVisible
    }} />
  </>;
}
