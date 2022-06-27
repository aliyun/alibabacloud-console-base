import React from 'react';

import {
  H3
} from '@alicloud/demo-rc-elements';

import {
  TErrorArg
} from '../types';
import {
  BODY_STRING_BIG
} from '../const';

import createError from './create-error';
import createErrorNeedLogin from './create-error-need-login';
import createErrorTokenExpired from './create-error-token-expired';
import createErrorRamForbidden from './create-error-ram-forbidden';

export default function createErrors(): TErrorArg[] {
  return [undefined, null, '', {}, new Error(), '字符串 as Error', <H3>JSX as Error</H3>, {
    message: 'Message 里有 HTML，请 <a href="//www.aliyun.com" target="_blank">登录</a> 或者 <em>不登录</em>，一切 <code>都随你...</code>。'
  }, {
    url: 'any url',
    toString(): string {
      return '三无产品 - 无 code 无 message 无 requestId';
    }
  },
  createError({
    message: '无 code，有详情'
  }, true),
  new Error('Plain Error'),
  createErrorNeedLogin(true),
  createErrorNeedLogin(),
  createErrorTokenExpired(true),
  createErrorTokenExpired(),
  createErrorRamForbidden(true),
  createErrorRamForbidden(),
  createError({
    message: '登录失效（非官方）',
    code: 'YOUR_SISTER_NOT_SIGNED_IN'
  }), createError({
    title: 'Error 对象中有 title',
    code: 'I_FUCKING_NOT_SIGNED_IN',
    message: '复杂的对象... and title in Error',
    details: {
      url: 'some URL',
      URL: 'some URL 2',
      method: 'get',
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
    }
  }), createError({
    message: '带额外的信息',
    details: {
      extra1: 'this is some extra info',
      extra0: 0,
      extra2: {
        a: 'xx1',
        b: 'xx2'
      },
      url: 'any url',
      extra3: false
    }
  }), createError({
    code: 'CODE_WITH_OUT_MESSAGE',
    details: {
      method: 'GET',
      url: '//get_api?xx=true'
    },
    toString(): string {
      return '有 code 无 message 的错误，message 将 fallback 到 code';
    }
  }), createError({
    message: 'Error code 很长的情况下，不可产生 UI 问题。',
    code: 'ERROR_CODE_VERY_LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG'
  }), createError({
    message: '需要 ignore 一下 body 参数，且需要把 string 类型的 param 及 body 解析成可读性好的分行形式',
    code: 'ERROR_POST_SHOULD_IGNORE_SOME_BODY'
  }), createError({
    message: 'body 很大很大',
    code: 'ERROR_POST_SHOULD_IGNORE_SOME_BODY',
    details: {
      params: 'id=boshit&boshit=alot',
      body: BODY_STRING_BIG
    }
  })];
}
