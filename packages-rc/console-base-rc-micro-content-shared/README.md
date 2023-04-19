# @alicloud/console-base-rc-micro-content-shared

ConsoleBase 组件 - 微内容共享组件。

## Usage

```typescript jsx
import React from 'react';

import {
  MicroContentWrapper,
  MicroContentHeader,
  MicroContentHeaderToolbar,
  MicroContentHeaderToolbarFlex,
  MicroContentBody,
  MicroContentFooter,
  H1,
  H2,
  H3,
  TitleBriefExtraList,
  FooterButton,
  LinkExternal
} from '@alicloud/console-base-rc-micro-content-shared';

<MicroContentWrapper>
  <MicroContentHeader>
    <MicroContentHeaderToolbar>
      <MicroContentHeaderToolbarFlex>toolbar 1</MicroContentHeaderToolbarFlex>
      <div>toolbar 2</div>
    </MicroContentHeaderToolbar>
  </MicroContentHeader>
  <MicroContentBody>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
    body
  </MicroContentBody>
  <MicroContentFooter>
    <LinkExternal {...{
      label: '阿里云',
      href: '//www.aliyun.com'
    }} />
    <FooterButton {...{
      label: 'Hello'
    }} />
  </MicroContentFooter>
</MicroContentWrapper>
```
