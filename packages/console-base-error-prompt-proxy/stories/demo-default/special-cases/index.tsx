import React from 'react';

import {
  H2,
  Button
} from '@alicloud/demo-rc-elements';

import errorPrompt, {
  ErrorWithDetails
} from '../../../src';
import {
  ERROR_MIX
} from '../_const';

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

function errorPromptUndefined(): void {
  errorPrompt();
}

function errorPromptNull(): void {
  errorPrompt(null as never);
}

function errorPromptString(): void {
  errorPrompt('zheshi yige zifuchuan niky zhemeyong meiwenti');
}

function errorPromptObject(): void {
  errorPrompt(errorObj);
}

function errorPromptJsx(): void {
  errorPrompt(<H2>laozi shi yiduan JSX dan ni buyao jingchang zheme yong</H2>);
}

function errorPromptError(): void {
  errorPrompt(new Error('laozi shi yige chun error'));
}

function errorPromptErrorWithDetails(): void {
  const error: ErrorWithDetails = new Error('zhege ErrorInstance duixiang libian youge details shuxing');
  
  error.details = ERROR_MIX;
  
  errorPrompt(error);
}

export default function SpecialCases(): JSX.Element {
  return <>
    <H2>特殊场景</H2>
    <Button onClick={errorPromptUndefined}>errorPrompt(undefined)</Button>
    <Button onClick={errorPromptNull}>errorPrompt(null)</Button>
    <Button onClick={errorPromptString}>errorPrompt(string)</Button>
    <Button onClick={errorPromptObject}>errorPrompt(object)</Button>
    <Button onClick={errorPromptJsx}>errorPrompt(JSX)</Button>
    <Button onClick={errorPromptError}>errorPrompt(Error)</Button>
    <Button onClick={errorPromptErrorWithDetails}>errorPrompt(ErrorWithDetails)</Button>
  </>;
}
