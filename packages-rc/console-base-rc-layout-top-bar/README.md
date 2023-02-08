# @alicloud/console-base-rc-layout-top-bar

> 具体看 types 下的类型说明。

例子：

```typescript tsx
<TopNav {...{
  id: 'you-might-not-need-id',
  dock: {
    onClick() {
      console.info('只有含 onXx 或 href 才可以展示');
    }
  },
  logo: {
    label: <img src="https://img.alicdn.com/imgextra/i4/2424298091/O1CN01WdxL9p29djBt2X6a5_!!2424298091.jpg" alt="" />
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
    label: <Icon type="notice" />,
    count: 123,
    countAsDot: true,
    dropdown: {
      header: '站内消息'
    }
  }, {
    key: 'cart',
    label: <Icon type="cart" />,
    count: 123
    href: '/cart'
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
    <ButtonInTop {...{
      spm: 'l1',
      force: true,
      label: <span style={{ color: 'red' }}>L1</span>
    }} />
    <div style={{ color: 'green' }}>L2</div>
  </>,
  customRight: <>
    <div style={{ color: 'purple' }}>R1</div>
    <div style={{ color: 'pink' }}>R2</div>
  </>
}} />
```
