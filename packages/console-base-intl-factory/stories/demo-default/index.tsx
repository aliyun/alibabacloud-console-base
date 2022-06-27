import React from 'react';

import {
  H1
} from '@alicloud/demo-rc-elements';

import intl from '../_intl';

export default function DemoDefault(): JSX.Element {
  return <>
    <H1>纯文本</H1>
    <div>{intl('demo.op.switch_locale')}</div>
    <div>{intl('hello:world')}</div>
    <div>{intl('hello:{user}', {
      user: 'BoshiT'
    })}</div>
    <div>{intl('hello:{user}', {
      user: '<img src="https://img.alicdn.com/img/bao/uploaded/i4/i1/420284856/O1CN014LL5uV1lk5tuhG7PS_!!420284856-0-lubanu-s.jpg" />'
    })}</div>
    <div>{intl('hello:{user}!lines', {
      user: '<img src="https://img.alicdn.com/img/bao/uploaded/i4/i1/420284856/O1CN014LL5uV1lk5tuhG7PS_!!420284856-0-lubanu-s.jpg" />'
    })}</div>
    <div>{intl('hello:{user}!html', {
      user: '<img src="https://img.alicdn.com/img/bao/uploaded/i4/i1/420284856/O1CN014LL5uV1lk5tuhG7PS_!!420284856-0-lubanu-s.jpg" />'
    })}</div>
    <div>{intl('hello:{user}!html!lines', {
      user: '<img src="https://img.alicdn.com/img/bao/uploaded/i4/i1/420284856/O1CN014LL5uV1lk5tuhG7PS_!!420284856-0-lubanu-s.jpg" />'
    })}</div>
    <H1>HTML</H1>
    <div>{intl('message!html')}</div>
    <div>{intl('message!html!lines')}</div>
    <H1>使用指令</H1>
    <div>{intl('html:without_html')}</div>
    <div>{intl('html:without_html', undefined, {
      html: true
    })}</div>
    <div>{intl('message!html!lines', undefined, {
      html: false,
      lines: false
    })}</div>
    <H1>Date</H1>
    <div>{intl.intlDate(new Date())}</div>
  </>;
}
