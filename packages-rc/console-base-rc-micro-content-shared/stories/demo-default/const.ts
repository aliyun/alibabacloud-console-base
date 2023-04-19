export const CODE_HOW_TO_USE = `import React from 'react';

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

export default function MicroContent(): JSX.Element {
  return <MicroContentWrapper>
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
  </MicroContentWrapper>;
}`;
