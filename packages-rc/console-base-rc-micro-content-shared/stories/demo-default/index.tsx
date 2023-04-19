import React from 'react';

import {
  H1 as DemoH1,
  CodeViewerJs,
  SoloPane
} from '@alicloud/demo-rc-elements';
import ThemeSwitcher from '@alicloud/console-base-demo-helper-theme-switcher';

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
  // TitleBriefExtraList, TODO
  FooterButton,
  LinkExternal
} from '../../src';
import PkgInfo from '../pkg-info';

import {
  CODE_HOW_TO_USE
} from './const';

export default function DemoDefault(): JSX.Element {
  return <>
    <ThemeSwitcher />
    <PkgInfo />
    <SoloPane {...{
      demo: <MicroContentWrapper>
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
    }}>
      <DemoH1>How to Use</DemoH1>
      <CodeViewerJs>{CODE_HOW_TO_USE}</CodeViewerJs>
    </SoloPane>
  </>;
}
