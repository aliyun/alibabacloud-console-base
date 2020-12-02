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
    <H1>fallbacks</H1>
    <P>{intl('only:in:en')}</P>
    <P>{intl('should display as key when not found at all → 实在找不到就返回 key')}</P>
    <H1>OK...</H1>
    <P>{intl('demo.op.switch_locale')}</P>
    <P>{intl('hello:world')}</P>
    <P>{intl('hello:{user}', {
      user: 'fucker boshit'
    })}</P>
    <P>{intl('message!html')}</P>
    <P>{intl('message!html!lines')}</P>
    <H1>intlDate</H1>
    <P>{intlDate(new Date())}</P>
    <P>{intlDate('2020-04-15 07:07')}</P>
    <P>{intlDate(Date.now(), 'date')}</P>
    <P>{intlDate(Date.now(), 'time')}</P>
    <P>{intlDate('FUCK')}</P>
  </>;
}
