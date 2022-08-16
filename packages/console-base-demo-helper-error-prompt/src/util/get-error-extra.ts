import {
  alert
} from '@alicloud/console-base-rc-dialog';

import {
  CODE_NEED_LOGIN_UR_SYS,
  CODE_NEED_LOGIN_FAKE,
  CODE_NEED_MESSAGE_EXTRA
} from '../const';

function fakeLogin(): void {
  alert({
    title: '模拟登录',
    content: '正常的登录，只需要 window.reload 即可，这里为了 demo 效果，假装了一个无刷登录。'
  });
}

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
          label: '唉，登录吧',
          onClick: fakeLogin
        }
      };
    case CODE_NEED_LOGIN_FAKE:
      return {
        title: '请君登录',
        button: {
          label: '客官，您又来啦？',
          onClick: fakeLogin
        }
      };
    case CODE_NEED_MESSAGE_EXTRA:
      return {
        messageExtra: '有些话我不知道该不该在错误中说明，估计不行，所以在这里说明一下。'
      };
    default:
      break;
  }
}