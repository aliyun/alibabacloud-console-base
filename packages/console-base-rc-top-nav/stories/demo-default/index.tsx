import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  Button as ButtonForDemo
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';
import {
  mixinTopNavButtonDarkFix
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import TopNav from '../../src';
import PkgInfo from '../pkg-info';

const ScHome = styled(Button)`
  ${mixinTopNavButtonDarkFix}
`;

function onLanguageChange(id: string): void {
  // eslint-disable-next-line no-console
  console.info(`lang changed -> ${id}`);
}

function onMenuDropdown(key: string): void {
  // eslint-disable-next-line no-console
  console.info('dropdown!', key);
}

export default function DemoDefault(): JSX.Element {
  const [stateRemoved, setStateRemoved] = useState<boolean>(false);
  const [stateActive, setStateActive] = useState<boolean>(false);
  
  const handleToggleRemoved = useCallback(() => {
    setStateRemoved(!stateRemoved);
  }, [stateRemoved, setStateRemoved]);
  const handleActiveChange = useCallback((active: boolean) => {
    setStateActive(active);
    
    // eslint-disable-next-line no-console
    console.info('可以借助 onActiveChange 控制行为 → ', active);
  }, [setStateActive]);
  
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    {stateRemoved ? null : <TopNav {...{
      dock: {
        active: stateActive,
        onActiveChange: handleActiveChange // 只有含 onXx 或 href 才可以展示
      },
      logo: {
        href: '/'
      },
      menus: [{
        key: 'menu-useless',
        // force: true
        // href: 'xx',
        // onClick() {},
        // dropdown: {
        //   body: '12345'
        // },
        label: '没有 href / onClick / dropdown / force = 被忽略'
      }, {
        key: 'menu-f-y',
        label: '费用',
        href: '/f-y',
        dropdown: {
          items: [{
            label: '费用 - 1',
            href: '/f-y-1'
          }, {
            label: '费用 - 2',
            href: '/f-y-2'
          }]
        }
      }, {
        key: 'menu-g-d',
        label: '工单',
        href: '/g-d'
      }, {
        key: 'menu-b-a',
        label: '备案',
        href: '/b-a'
      }, {
        key: 'menu-news',
        label: {
          icon: 'notice',
          count: 123,
          countAsDot: true
        },
        dropdown: {
          header: '站内消息',
          headerBg: true,
          headerPadding: 'all',
          body: <>
            <div>消息 111</div>
            <div>消息 2222</div>
            <div>消息 33333</div>
            <div>消息 444444</div>
            <div>消息 5555555</div>
          </>,
          bodyPadding: 'all'
        }
      }, {
        key: 'menu-cart',
        label: {
          icon: 'cart',
          count: 123
        },
        href: '/cart'
      }, {
        key: 'menu-theme',
        label: {
          icon: 'lights-on'
        },
        labelHover: {
          icon: 'lights-off'
        },
        beacon: {
          tip: 'You DONT know how I hate widget... 🤧'
        },
        force: true
      }],
      help: {
        href: '/help',
        title: '帮助文档'
      },
      language: {
        current: 'zh-CN',
        items: [{
          id: 'en-US',
          name: 'English',
          nameShort: 'En'
        }, {
          id: 'zh-CN',
          name: '简体中文',
          nameShort: '简体'
        }, {
          id: 'zh-TW',
          name: '繁体中文',
          nameShort: '繁体'
        }, {
          id: 'ja-JP',
          name: '日本语',
          nameShort: '日'
        }],
        onChange: onLanguageChange
      },
      account: {
        href: '/account',
        infoPrimary: 'boshit@jianchun.wang',
        infoSecondary: 'VIP 用户',
        avatar: 'https://lh3.googleusercontent.com/ogw/AOh-ky0pQwAomFprqff9aA9y52ngd1tTi-9h2Y7qGJpDO8k=s64-c-mo',
        dropdown: {
          minWidth: 300,
          maxWidth: 480,
          header: <>
            header - 非必需
          </>,
          headerBg: true,
          headerDivider: true,
          headerPadding: 'all',
          body: <div>
            body
          </div>,
          bodyPadding: 'all',
          footer: <>
            footer - 非必需
          </>,
          footerDivider: true,
          footerPadding: 'all'
        }
      },
      customLeft: <>
        <ScHome {...{
          spm: 'console-home',
          label: 'Home',
          iconLeft: 'home',
          theme: ButtonTheme.TERTIARY_ALT
        }} />
        <div style={{
          color: 'red'
        }}>L1</div>
        <div style={{
          color: 'green'
        }}>L2</div>
      </>,
      customRight: <>
        <div style={{
          color: 'purple'
        }}>R1</div>
        <div style={{
          color: 'pink'
        }}>R2</div>
      </>,
      onMenuDropdown
    }} />}
    <H1>吊顶</H1>
    <ButtonForDemo onClick={handleToggleRemoved}>移除 / 加入</ButtonForDemo>
  </>;
}
