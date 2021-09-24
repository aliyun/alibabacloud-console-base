import React from 'react';

import {
  H1,
  P
} from '@alicloud/demo-rc-elements';

import intl, {
  intlDate
} from '../_intl';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>不会产出 HTML</H1>
    <P>{intl('demo.op.switch_locale')}</P>
    <P>{intl('hello:world')}</P>
    <P>{intl('hello:{user}', {
      user: 'fucker boshit'
    })}</P>
    <P>{intl('message!html')}</P>
    <P>{intl('message!html!lines')}</P>
    <H1>intlDate</H1>
    <P>new Date() → {intlDate(new Date())}</P>
    <P>2020-04-15 07:07 → {intlDate('2020-04-15 07:07')}</P>
    <P>2020-07-27 00:07:07 → {intlDate('2020-07-27 00:07:07')}</P>
    <P>2020-07-27 23:07:07 → {intlDate('2020-07-27 23:57:47')}</P>
    <P>Date.now() + format: date → {intlDate(Date.now(), 'date')}</P>
    <P>Date.now() + format: time → {intlDate(Date.now(), 'time')}</P>
    <P>Invalid → {intlDate('InvalidDATE')}</P>
  </>;
}
