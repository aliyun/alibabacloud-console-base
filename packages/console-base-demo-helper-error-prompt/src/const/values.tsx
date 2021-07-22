import React from 'react';

import {
  H3
} from '@alicloud/demo-rc-elements';

import {
  IErrorDetails,
  TErrorArg
} from '../types';

const SEED = Math.pow(36, 8);

function generate8Bits(): string {
  return Math.round(SEED * Math.random()).toString(36).toUpperCase().padStart(8, '0');
}

function generateRequestId(): string {
  return `REQUEST-ID-FAKE-${generate8Bits()}${generate8Bits()}`;
}

const ERROR_DETAILS_MIX: IErrorDetails = {
  url: '/fuck/delete?_cache_busting=123456',
  method: 'post',
  params: 'id=boshit&boshit=alot',
  body: [
    'bucketName=boshit',
    'region=oss-cn-qingdao',
    'objects=fuck/CGK478JF00AJ0003.jpg',
    'token=Y7d6e57670fa81c2518a42ac531d0e57b',
    'secToken=PznQqh1Snec2NuH9TKVCv9',
    'collina=115#1cBu+C1O1TNgn3QyT5EV1Cso5lQGs2AaxuXu1gvG5fZ3qNZ1lR2Habo9Ef6VGub8z8kkY/SfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCj+pQ97WRhs1Gv6NDaL9Xt6zCvIAyeH38uWZQG7WRhZz4ODNDaTBXyzEQvsAyFtQ4uWN0aCS+o1fCl1Oa6HHCwN7kOqTsGRxBHfgpxf0umqsb2kGnStS08uIHu9bXKeIlMYDnTsS3hIyTrePvDg+DgOeY6f0UCvbnnc6RWxfApVlWAp1p2rttNNYDuSvMd0lbxYvuF9ojPgb8ugIHvSSEyEEhNdLCPnItxVkjjPHuG5b8ERddAKDf7N5vme9jt0hUkuujKOm6TwD/9vUW1JYzNjF9bCtrUaj/2b0GUX1RX2K4653eaK57R7/SuK+eTheet3LftNS+e11jGamdmXY3U6Gq9uEvSvYGbo/sNB8TMad32W0Ni2446o4QlHNsfaSsdvHUQDZdl3r9L5bAyJuTYjv/MBY3lneekfwHVdH+iTtYH2fSV6SRoyeS5mwlD39e62WVZtIgL7ogCuFMaI/wqdpde17lCaH4HwbaTHlGMNnuviGAFtUr4UcwsM8yBkK6MctKL5wJe69pH1mzjkVfCi7LvZGHbOszkiYpzpgDRp6Jd69MrbsPC/n94C2gvW5qLFFSdnBjHPDZaAylwxxQWqVwZbZU8BDjdv6GzdNrhhOxhY+9LG169S/rdcUeJd3lgjoPrgtLyOKXXRDS+LFhl9flmCkwGHKuv4t5TvGf1OHP4UZE3Bixz1XsXd+mUd3/WvpBwm1qCDtqcbbRHlXm5fjfUaWHTq03tCfcuzD7Vz1='
  ].join('&')
};

function createError(o: Record<string, unknown>): Error {
  const error = new Error();
  
  error.name = 'SomeError';
  
  Object.keys(o).forEach(k => {
    (error as any)[k] = o[k]; // eslint-disable-line @typescript-eslint/no-explicit-any
  });
  
  return error;
}

const details = {
  url: 'any url',
  method: 'any method',
  params: {
    id: 'ineedanid',
    name: 'idonotknowmyname',
    fuck: 'ifuckalot'
  },
  body: {
    region: 'oss-cn-qingdao',
    objects: 'fuck/CGK478JF00AJ0003.jpg',
    token: 'Y7d6e57670fa81c2518a42ac531d0e57b',
    secToken: 'PznQqh1Snec2NuH9TKVCv9',
    collina: '115#1cBu+C1O1TNgn3QyT5EV1Cso5lQGs2AaxuXu1gvG5fZ3qNZ1lR2Habo9Ef6VGub8z8kkY/SfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCj+pQ97WRhs1Gv6NDaL9Xt6zCvIAyeH38uWZQG7WRhZz4ODNDaTBXyzEQvsAyFtQ4uWN0aCS+o1fCl1Oa6HHCwN7kOqTsGRxBHfgpxf0umqsb2kGnStS08uIHu9bXKeIlMYDnTsS3hIyTrePvDg+DgOeY6f0UCvbnnc6RWxfApVlWAp1p2rttNNYDuSvMd0lbxYvuF9ojPgb8ugIHvSSEyEEhNdLCPnItxVkjjPHuG5b8ERddAKDf7N5vme9jt0hUkuujKOm6TwD/9vUW1JYzNjF9bCtrUaj/2b0GUX1RX2K4653eaK57R7/SuK+eTheet3LftNS+e11jGamdmXY3U6Gq9uEvSvYGbo/sNB8TMad32W0Ni2446o4QlHNsfaSsdvHUQDZdl3r9L5bAyJuTYjv/MBY3lneekfwHVdH+iTtYH2fSV6SRoyeS5mwlD39e62WVZtIgL7ogCuFMaI/wqdpde17lCaH4HwbaTHlGMNnuviGAFtUr4UcwsM8yBkK6MctKL5wJe69pH1mzjkVfCi7LvZGHbOszkiYpzpgDRp6Jd69MrbsPC/n94C2gvW5qLFFSdnBjHPDZaAylwxxQWqVwZbZU8BDjdv6GzdNrhhOxhY+9LG169S/rdcUeJd3lgjoPrgtLyOKXXRDS+LFhl9flmCkwGHKuv4t5TvGf1OHP4UZE3Bixz1XsXd+mUd3/WvpBwm1qCDtqcbbRHlXm5fjfUaWHTq03tCfcuzD7Vz1='
  }
};

export const ERRORS: TErrorArg[] = [undefined, null, '字符串 as Error', <H3>JSX as Error</H3>, {
  message: 'Message 里有 HTML，请 <a href="//www.aliyun.com" target="_blank">登录</a> 或者 <em>不登录</em>，一切 <code>都随你...</code>。'
}, new Error('Plain Error'), {
  code: 'ConsoleNeedLogin',
  message: '登录失效（官方，由组件标准化）',
  requestId: generateRequestId(),
  details
}, {
  code: 'PostonlyOrTokenError',
  message: 'TokenError（官方，由组件标准化）',
  requestId: generateRequestId(),
  details
}, {
  code: 'Forbidden.RAM',
  message: '未授权（官方，由组件标准化）',
  requestId: generateRequestId(),
  details
}, createError({
  message: '登录失效（非官方）',
  code: 'YOUR_SISTER_NOT_SIGNED_IN',
  requestId: generateRequestId(),
  details
}), createError({
  title: 'Error 对象中有 title',
  code: 'I_FUCKING_NOT_SIGNED_IN',
  message: '复杂的对象... and title in Error',
  requestId: generateRequestId(),
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
}), {
  message: '无 code，有详情',
  details: {
    ...ERROR_DETAILS_MIX
  }
}, {
  url: 'any url',
  toString(): string {
    return '三无产品 - 无 code 无 message 无 requestId';
  }
}, createError({
  message: '带额外的信息',
  requestId: generateRequestId(),
  details: {
    extra1: 'this is some extra info',
    extra0: 0,
    extra2: {
      a: 'fuck1',
      b: 'fuck2'
    },
    url: 'any url',
    extra3: false
  }
}), createError({
  code: 'CODE_WITH_OUT_MESSAGE',
  requestId: generateRequestId(),
  details: {
    method: 'GET',
    url: '//get_api?fuck=true'
  },
  toString(): string {
    return '有 code 无 message 的错误，message 将 fallback 到 code';
  }
}), createError({
  message: 'Error code 很长的情况下，不可产生 UI 问题。',
  requestId: generateRequestId(),
  code: 'ERROR_CODE_VERY_LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG',
  details: {
    ...ERROR_DETAILS_MIX
  }
}), createError({
  message: '需要 ignore 一下 body 参数，且需要把 string 类型的 param 及 body 解析成可读性好的分行形式',
  requestId: generateRequestId(),
  code: 'ERROR_POST_SHOULD_IGNORE_SOME_BODY',
  details: {
    ...ERROR_DETAILS_MIX
  }
}), createError({
  message: 'body 很大很大',
  requestId: generateRequestId(),
  code: 'ERROR_POST_SHOULD_IGNORE_SOME_BODY',
  details: {
    ...ERROR_DETAILS_MIX,
    params: 'id=boshit&boshit=alot',
    body: [
      'bucketName=boshit',
      'region=oss-cn-qingdao',
      'objects=fuck/CGK478JF00AJ0003.jpg',
      'tokenXX=Y7d6e57670fa81c2518a42ac531d0e57b',
      'secTokenXX=PznQqh1Snec2NuH9TKVCv9',
      'helloWorld=离离原上草一岁一枯荣野火烧不尽春风吹又生丽丽一上床意思有空入也会十八禁充分草于是远上寒山石径斜白云深处有人家停车坐爱枫林晚霜叶红于二月花C1O1TNgn3QyT5EV1Cso5lQGs2AaxuXu1gvG5fZ3qNZ1lR2Habo9Ef6VGub8z8kkYSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCjSfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCj',
      'collinaXXX=115#1cBu+C1O1TNgn3QyT5EV1Cso5lQGs2AaxuXu1gvG5fZ3qNZ1lR2Habo9Ef6VGub8z8kkY/SfqH88AkNcaoi2vUeyUkPPeKT8ukNdxab1haUdkHNcaLpAurPQOSfPFtNCj+pQ97WRhs1Gv6NDaL9Xt6zCvIAyeH38uWZQG7WRhZz4ODNDaTBXyzEQvsAyFtQ4uWN0aCS+o1fCl1Oa6HHCwN7kOqTsGRxBHfgpxf0umqsb2kGnStS08uIHu9bXKeIlMYDnTsS3hIyTrePvDg+DgOeY6f0UCvbnnc6RWxfApVlWAp1p2rttNNYDuSvMd0lbxYvuF9ojPgb8ugIHvSSEyEEhNdLCPnItxVkjjPHuG5b8ERddAKDf7N5vme9jt0hUkuujKOm6TwD/9vUW1JYzNjF9bCtrUaj/2b0GUX1RX2K4653eaK57R7/SuK+eTheet3LftNS+e11jGamdmXY3U6Gq9uEvSvYGbo/sNB8TMad32W0Ni2446o4QlHNsfaSsdvHUQDZdl3r9L5bAyJuTYjv/MBY3lneekfwHVdH+iTtYH2fSV6SRoyeS5mwlD39e62WVZtIgL7ogCuFMaI/wqdpde17lCaH4HwbaTHlGMNnuviGAFtUr4UcwsM8yBkK6MctKL5wJe69pH1mzjkVfCi7LvZGHbOszkiYpzpgDRp6Jd69MrbsPC/n94C2gvW5qLFFSdnBjHPDZaAylwxxQWqVwZbZU8BDjdv6GzdNrhhOxhY+9LG169S/rdcUeJd3lgjoPrgtLyOKXXRDS+LFhl9flmCkwGHKuv4t5TvGf1OHP4UZE3Bixz1XsXd+mUd3/WvpBwm1qCDtqcbbRHlXm5fjfUaWHTq03tCfcuzD7Vz1='
    ].join('&')
  }
})];
