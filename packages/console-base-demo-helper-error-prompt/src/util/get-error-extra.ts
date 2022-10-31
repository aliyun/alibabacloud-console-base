import {
  CODE_NEED_LOGIN_UR_SYS,
  CODE_NEED_LOGIN_FAKE,
  CODE_NEED_MESSAGE_EXTRA
} from '../const';

import fakeLogin from './fake-login';

interface IError {
  code?: string;
}

interface IResult { // 不能引用 error-prompt 的类型，所以这部分类型定义有些冗余
  title?: string;
  button?: {
    label?: string;
    onClick?(): void;
  };
  messageExtra?: string;
}

export default function getErrorExtra(error: IError): IResult | undefined {
  switch (error.code) {
    case CODE_NEED_LOGIN_UR_SYS:
      return {
        title: '你妹登录呢',
        button: {
          label: 'Fake Login',
          onClick: fakeLogin
        }
      };
    case CODE_NEED_LOGIN_FAKE:
      return {
        title: '请君登录',
        button: {
          label: '客官，您又来啦？'
        }
      };
    case CODE_NEED_MESSAGE_EXTRA:
      return {
        messageExtra: '业务需要针对特定的错误码增加额外的信息，这些信息可能没法直接放到 <code>message</code> 里。<a href="//www.aliyun.com" target="_blank">帮助文档</a>'
      };
    default:
      break;
  }
}