import React from 'react';

import {
  H2,
  Button,
  P
} from '@alicloud/demo-rc-elements';

import {
  alertError,
  createErrorWithDetails
} from '../_common';

const errorObj = {
  message: '请登录',
  requestId: '1234567890',
  url: 'some URL',
  URL: 'some URL 2',
  method: 'get',
  code: 'I_FUCKING_NOT_SIGNED_IN',
  params: {
    a: '锄禾日当午',
    A: '彩虹若等我',
    ao: {
      en: 'NO'
    }
  },
  body: {
    b: '汗滴禾下土',
    B: '后端好系统',
    bo: {
      en: 'NB'
    }
  }
};

function alertErrorUndefined(): void {
  alertError();
}

function alertErrorNull(): void {
  alertError(null as never);
}

function alertErrorString(): void {
  alertError('zheshi yige zifuchuan niky zhemeyong meiwenti');
}

function alertErrorObject(): void {
  alertError(errorObj);
}

function alertErrorJsx(): void {
  alertError(<H2>laozi shi yiduan JSX dan ni buyao jingchang zheme yong</H2>);
}

function alertErrorError(): void {
  alertError(new Error('laozi shi yige chun error'));
}

function alertErrorErrorWithDetails(): void {
  alertError(createErrorWithDetails());
}

export default function SpecialCases(): JSX.Element {
  return <>
    <H2>特殊场景</H2>
    <P><code>undefined / null</code> 不会有提示，JSX 不可能被代理，因为无法通过 <code>pose-message</code> 传递，所以会 fallback 到本地的 error-prompt。</P>
    <Button onClick={alertErrorUndefined}>alertError(undefined)</Button>
    <Button onClick={alertErrorNull}>alertError(null)</Button>
    <Button onClick={alertErrorString}>alertError(string)</Button>
    <Button onClick={alertErrorObject}>alertError(object)</Button>
    <Button onClick={alertErrorJsx}>alertError(JSX)</Button>
    <Button onClick={alertErrorError}>alertError(Error)</Button>
    <Button onClick={alertErrorErrorWithDetails}>alertError(ErrorWithDetails)</Button>
  </>;
}
