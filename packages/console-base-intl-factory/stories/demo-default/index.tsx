import React from 'react';

import {
  H1,
  P
} from '@alicloud/demo-rc-elements';

import intl from '../_intl';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>纯文本</H1>
    <P>{intl('demo.op.switch_locale')}</P>
    <P>{intl('hello:world')}</P>
    <P>{intl('hello:{user}', {
      use: 'fucker boshit'
    })}</P>
    <H1>HTML</H1>
    <P>{intl('message!html')}</P>
    <P>{intl('message!html!lines')}</P>
    <H1>使用指令</H1>
    <P>{intl('html:without_html')}</P>
    <P>{intl('html:without_html', undefined, {
      html: true
    })}</P>
    <P>{intl('message!html!lines', undefined, {
      html: false,
      lines: false
    })}</P>
    <H1>Date</H1>
    <P>{intl.intlDate(new Date())}</P>
  </>;
}
