import React from 'react';

import {
  H3
} from '@alicloud/demo-rc-elements';

import {
  TErrorArg
} from '../types';
import {
  BODY_STRING_BIG,
  CODE_NEED_LOGIN_FAKE,
  CODE_NEED_LOGIN_UR_SYS,
  CODE_NEED_MESSAGE_EXTRA,
  CODE_NO_MESSAGE,
  CODE_POST_IGNORE_SOME_BODY,
  CODE_VERY_LONG
} from '../const';

import createError from './create-error';
import createErrorNeedLogin from './create-error-need-login';
import createErrorTokenExpired from './create-error-token-expired';
import createErrorRamForbidden from './create-error-ram-forbidden';
import createErrorRamForbiddenWithAuthDetails from './create-error-ram-forbidden-with-auth-details';

export default function createErrors(): TErrorArg[] {
  return [{ // 被忽略的 error
    url: 'any url',
    toString(): string {
      return '三无产品 - 无 code 无 message 无 requestId（会被忽略）';
    }
  },
  undefined,
  null,
  '',
  {},
  new Error(),
  // 无 code
  '字符串 as Error', <H3>JSX as Error</H3>, {
    message: 'Message 里有 HTML，请 <a href="//www.aliyun.com" target="_blank">登录</a> 或者 <em>不登录</em>，一切 <code>都随你...</code>。'
  },
  new Error('Plain Error'),
  createError({
    message: '无 code，有详情'
  }, true),
  createError({
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
  }),
  // 标准错误 code
  createErrorNeedLogin(true),
  createErrorNeedLogin(),
  createErrorTokenExpired(true),
  createErrorTokenExpired(),
  createErrorRamForbidden(true),
  createErrorRamForbidden(),
  createErrorRamForbiddenWithAuthDetails(),
  // 其他 code
  createError({
    code: CODE_NEED_LOGIN_UR_SYS,
    message: '登录失效（非官方）NOT_SIGNED_IN.YOUR_SIS，有 <code>extra.button.onClick</code> 无法被 proxy'
  }), createError({
    code: CODE_NEED_LOGIN_FAKE,
    message: '登录失效（非官方）NOT_SIGNED_IN.FAKE（有 <code>extra.button</code> 但可以被 proxy）',
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
    code: CODE_NO_MESSAGE,
    details: {
      method: 'GET',
      url: '//get_api?xx=true'
    },
    toString(): string {
      return '有 code 无 message 的错误，message 将 fallback 到 code';
    }
  }), createError({
    code: CODE_NEED_MESSAGE_EXTRA,
    message: '会提供 messageExtra'
  }), createError({
    code: CODE_VERY_LONG,
    message: 'Error code 很长的情况下，不可产生 UI 问题。'
  }), createError({
    code: CODE_POST_IGNORE_SOME_BODY,
    message: '需要 ignore 一下 body 参数，且需要把 string 类型的 param 及 body 解析成可读性好的分行形式'
  }), createError({
    code: CODE_POST_IGNORE_SOME_BODY,
    message: 'body 很大很大',
    details: {
      params: 'id=boshit&boshit=alot',
      body: BODY_STRING_BIG
    }
  })];
}
