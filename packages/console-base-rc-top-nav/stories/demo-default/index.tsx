import React, {
  useState,
  useCallback
} from 'react';
import styled from 'styled-components';

import {
  H1,
  Button as ButtonForDemo
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-rc-demo-theme-switcher';
import {
  mixinTopNavButtonDarkFix
} from '@alicloud/console-base-theme';
import Button, {
  ButtonTheme
} from '@alicloud/console-base-rc-button';

import TopNav from '../../src';

const ScHome = styled(Button)`
  ${mixinTopNavButtonDarkFix}
`;

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
    {stateRemoved ? null : <TopNav {...{
      // id: 'gave-the-top-nav-an-id-by-boshit',
      dock: {
        active: stateActive,
        onActiveChange: handleActiveChange // 只有含 onXx 或 href 才可以展示
      },
      logo: {
        href: '/'
        // label: <img src="https://img.alicdn.com/imgextra/i4/2424298091/O1CN01WdxL9p29djBt2X6a5_!!2424298091.jpg" alt="" />
      },
      menus: [{
        key: 'f-y',
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
        key: 'g-d',
        label: '工单',
        href: '/g-d'
      }, {
        key: 'b-a',
        label: '备案',
        href: '/b-a'
      }, {
        key: 'news',
        label: {
          icon: 'notice',
          count: 123,
          countAsDot: true
        },
        dropdown: {
          header: '站内消息'
        }
      }, {
        key: 'cart',
        label: {
          icon: 'cart',
          count: 123
        },
        href: '/cart'
      }, {
        key: 'help',
        label: {
          icon: 'help-circle'
        },
        href: '/help'
      }, {
        key: 'theme',
        label: {
          icon: 'lights-on'
        },
        labelHover: {
          icon: 'lights-off'
        },
        beacon: {
          tip: 'You DONT know how I fucking hate widget... 🤧'
        },
        force: true
      }],
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
        onChange(id) {
          console.info(`lang changed -> ${id}`);
        }
      },
      account: {
        href: '/account',
        avatar: 'https://img.alicdn.com/imgextra/i3/2228361831/O1CN01E9EAfp1POdoYo8idF_!!2228361831.jpg',
        dropdown: {
          minWidth: 300,
          maxWidth: 480,
          header: 'header',
          body: <img alt="" src="https://img.alicdn.com/imgextra/i4/3265150369/O1CN01ePEY7G1Eb2lftCrqg_!!3265150369.jpg" style={{ maxWidth: '100%' }} />,
          footer: 'footer'
        }
      },
      customLeft: <>
        <ScHome {...{
          spm: 'console-home',
          label: 'Home',
          iconLeft: 'home',
          theme: ButtonTheme.TERTIARY_ALT
        }} />
        <div style={{ color: 'red' }}>L1</div>
        <div style={{ color: 'green' }}>L2</div>
      </>,
      customRight: <>
        <div style={{ color: 'purple' }}>R1</div>
        <div style={{ color: 'pink' }}>R2</div>
      </>,
      onMenuDropdown(key: string) {
        console.info('dropdown!', key);
      }
    }} />}
    <H1>吊顶</H1>
    <ButtonForDemo onClick={handleToggleRemoved}>移除 / 加入</ButtonForDemo>
  </>;
}
