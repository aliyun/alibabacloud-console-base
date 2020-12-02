import {
  ErrorDetailedInfo
} from '@alicloud/console-base-error-prompt';

export const ERROR_MIX: ErrorDetailedInfo = {
  code: 'ERROR_CODE',
  requestId: 'I_AM_A_FUCKING_REQUEST_ID',
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

export const ERRORS: ErrorDetailedInfo[] = [{
  message: '你妹登录',
  code: 'YOUR_SISTER_NOT_SIGNED_IN',
  requestId: 'REQUEST_ID_000_SIGN_IN',
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
}, {
  message: '无 code，有详情',
  requestId: 'REQUEST_ID_1234567890',
  url: 'any url'
}, {
  requestId: 'REQUEST_ID_1234567890',
  url: 'any url',
  toString() {
    return '无 code 无 message';
  }
}, {
  message: '带额外的信息',
  requestId: 'REQUEST_ID_1234567890',
  extra1: 'this is some extra info',
  extra0: 0,
  extra2: {
    a: 'fuck1',
    b: 'fuck2'
  },
  url: 'any url',
  extra3: false
}, {
  code: 'CODE_WITH_OUT_MESSAGE',
  method: 'GET',
  url: '//get_api?fuck=true',
  toString() {
    return '有 code 无 message 的错误，message 将 fallback 到 code';
  }
}, {
  message: 'Error code 很长的情况下，不可产生 UI 问题',
  ...ERROR_MIX,
  code: 'ERROR_CODE_VERY_LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG'
}, {
  message: 'Message 里有 HTML，请 <a href="//www.aliyun.com" target="_blank">登录</a> 或者 <em>不登录</em>，一切 <code>都随你...</code>。'
}, {
  message: '需要 ignore 一下 body 参数，且需要把 string 类型的 param 及 body 解析成可读性好的分行形式',
  ...ERROR_MIX,
  code: 'ERROR_POST_SHOULD_IGNORE_SOME_BODY'
}, {
  message: 'body 很大很大',
  ...ERROR_MIX,
  code: 'ERROR_POST_SHOULD_IGNORE_SOME_BODY',
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
}];
