import React, {
  useState,
  useMemo
} from 'react';
import styled, {
  createGlobalStyle
} from 'styled-components';

import {
  ChoiceItem,
  H2,
  InputSwitch,
  RadioGroup,
  LongArticle
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import Icon from '@alicloud/console-base-rc-icon';
import TopNav from '@alicloud/console-base-rc-top-nav';

import LayoutSidePanel from '../../src';
import {
  SVG
} from '../const';
import {
  FakeApiInspector,
  ContactTooltip,
  ChildrenAsItemsBottom
} from '../rc';
import PkgInfo from '../pkg-info';

const GlobalStyleTestIconClass = createGlobalStyle`
  i.test-icon-class {
    font-style: normal;
    
    &:before {
      content: '🧠';
    }
  }
`;

const ScDiv = styled.div`
  border: 4px solid #090;
  max-height: 600px;
  overflow: auto;
`;

enum EQuickTopContainer {
  WINDOW,
  BODY,
  LONG_ARTICLE,
  NULL,
  UNDEFINED
}

const DATA_SOURCE_QUICK_TOP_CONTAINER: ChoiceItem<EQuickTopContainer>[] = [{
  label: 'window',
  value: EQuickTopContainer.WINDOW
}, {
  label: 'body (might not work)',
  value: EQuickTopContainer.BODY
}, {
  label: 'div',
  value: EQuickTopContainer.LONG_ARTICLE
}, {
  label: 'null',
  value: EQuickTopContainer.NULL
}, {
  label: 'undefined',
  value: EQuickTopContainer.UNDEFINED
}];

export default function DemoDefault(): JSX.Element {
  const [stateTopBar, setStateTopBar] = useState(true);
  const [stateChildrenAsItemsBottom, setStateChildrenAsItemsBottom] = useState(false);
  const [stateVisible, setStateVisible] = useState(true);
  const [stateCollapsed, setStateCollapsed] = useState(false);
  const [stateApiInspectorVisible, setStateApiInspectorVisible] = useState(false);
  const [stateDom, setStateDom] = useState<HTMLElement | null>(null);
  const [stateQuickTopContainer, setStateQuickTopContainer] = useState<EQuickTopContainer>(EQuickTopContainer.WINDOW);
  
  const quickTopContainer: Window | HTMLElement | null | undefined = useMemo(() => {
    switch (stateQuickTopContainer) {
      case EQuickTopContainer.WINDOW:
        return window;
      case EQuickTopContainer.BODY:
        return document.body;
      case EQuickTopContainer.LONG_ARTICLE:
        return stateDom;
      case EQuickTopContainer.NULL:
        return null;
      case EQuickTopContainer.UNDEFINED:
        break;
      default:
        break;
    }
  }, [stateDom, stateQuickTopContainer]);
  
  return <>
    {stateTopBar ? <TopNav /> : null}
    <GlobalStyleTestIconClass />
    <LayoutSidePanel {...{
      quickTopContainer,
      itemsTop: [{
        key: 'icon-rc-icon',
        title: '测试 Icon 组件',
        icon: <Icon type="dingding" style={{
          color: '#41a5ee'
        }} />,
        iconHovered: <Icon type="dingding" style={{
          color: '#f66'
        }} />,
        tooltip: '你有 <strong>12345</strong> 条 <em>新</em> 消息，其中 <code>99.99%</code> 为垃圾消息。',
        tooltipAsHtml: true,
        unread: true
      }, {
        key: 'icon-rc-svg',
        title: '测试 SVG 组件',
        icon: <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path d="m232.533 345.6 324.267 320c17.067 17.067 17.067 42.667 0 59.733l-117.333 115.2c-17.067 17.067-42.667 17.067-59.734 0l-324.266-320c-17.067-17.066-17.067-42.666 0-59.733L172.8 345.6c14.933-17.067 42.667-17.067 59.733 0z" fill="#185ABD" />
          <path d="m968.533 315.733-529.066 524.8c-17.067 17.067-42.667 17.067-59.734 0L262.4 725.333c-17.067-17.066-17.067-42.666 0-59.733l529.067-524.8c17.066-17.067 42.666-17.067 59.733 0L968.533 256c17.067 17.067 17.067 42.667 0 59.733z" fill="#41A5EE" />
        </svg>,
        unread: 9
      }, {
        key: 'icon-string-svg',
        title: '测试 SVG 字符串',
        icon: SVG,
        unread: 1234,
        tooltip: <>
          <strong>Ingrid Michaelson</strong>
          <img alt="" src="https://s.hdnux.com/photos/50/11/50/10525228/3/1200x0.jpg" {...{
            style: {
              display: 'block',
              margin: '2px 0',
              width: 200,
              height: 200
            }
          }} />
        </>,
        tooltipAlign: 'top',
        tooltipDefaultVisible: true
      }, {
        key: 'icon-string-image-url',
        title: '测试图片 URL',
        icon: 'https://img.alicdn.com/tfs/TB1JhtxuAT2gK0jSZFkXXcIQFXa-128-128.png'
      }, {
        key: 'icon-with-class',
        title: '测试 className 图标',
        icon: {
          className: 'test-icon-class'
        }
      }, {
        key: 'cloud',
        title: '阿里雲',
        icon: '云',
        iconHovered: '雲',
        mark: 'NEW',
        href: '//www.aliyun.com'
      }, {
        key: 'face',
        title: 'Sad',
        icon: <Icon type="face-cry" />,
        iconHovered: <Icon type="face-smile" />
      }],
      itemsBottom: [{
        key: 'api-inspector',
        title: 'API Inspector',
        icon: <Icon type="toolkit-api" />,
        iconActive: <Icon type="toolkit-api" rotate={30} />,
        active: stateApiInspectorVisible,
        onActiveChange: setStateApiInspectorVisible
      }, {
        key: 'micro-exp',
        title: '微试验',
        icon: <Icon type="loading" />,
        tooltip: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }, {
        key: 'contact',
        title: '联系我们',
        icon: <Icon type="toolkit-contact" />,
        tooltip: <ContactTooltip />,
        tooltipAlign: 'bottom'
      }],
      visible: stateVisible,
      collapsed: stateCollapsed,
      onCollapsedChange: setStateCollapsed
    }}>{stateChildrenAsItemsBottom ? <ChildrenAsItemsBottom /> : null}</LayoutSidePanel>
    <ThemeSwitcher />
    <PkgInfo />
    <H2>调试</H2>
    <InputSwitch {...{
      label: '展示 TopBar',
      value: stateTopBar,
      onChange: setStateTopBar
    }} />
    <InputSwitch {...{
      label: 'props.visible',
      value: stateVisible,
      onChange: setStateVisible
    }} />
    <InputSwitch {...{
      label: 'props.collapsed',
      value: stateCollapsed,
      onChange: setStateCollapsed
    }} />
    <InputSwitch {...{
      label: '使用 Children',
      value: stateChildrenAsItemsBottom,
      onChange: setStateChildrenAsItemsBottom
    }} />
    <FakeApiInspector {...{
      visible: stateApiInspectorVisible,
      onVisibleChange: setStateApiInspectorVisible
    }} />
    <H2>QuickTop</H2>
    <RadioGroup<EQuickTopContainer> {...{
      items: DATA_SOURCE_QUICK_TOP_CONTAINER,
      value: stateQuickTopContainer,
      onChange: setStateQuickTopContainer
    }} />
    <H2>LongArticle</H2>
    <ScDiv ref={setStateDom}>
      <LongArticle />
    </ScDiv>
  </>;
}
