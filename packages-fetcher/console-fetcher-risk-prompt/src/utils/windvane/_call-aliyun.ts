import {
  compare
} from 'compare-versions';

import {
  IWindvaneError0
} from '../../types';
import {
  WINDVANE,
  WINDVANE_ERROR_CODE,
  ALIYUN_APP_VERSION
} from '../../const';

import createWindvaneError from './create-windvane-error';

/**
 * 阿里云 APP 能拉起 windvane 的最低版本号。android: 4.21.0, ios: 4.20.5
 */
const APP_MIN_VERSION = /android/i.test(navigator.userAgent) ? '4.21.0' : '4.20.5';

/**
 * 调用 Aliyun 应用的 APP，封装错误为真正的错误对象
 */
export default function _callAliyun<T = void, P = void>(method: string, params?: P): Promise<T> {
  if (!WINDVANE || compare(ALIYUN_APP_VERSION, APP_MIN_VERSION, '<=')) {
    throw createWindvaneError({
      ret: WINDVANE_ERROR_CODE.NO_HANDLER
    });
  }

  return WINDVANE.call<T, P>('Aliyun', method, params)
      .catch((o: IWindvaneError0) => {
        throw createWindvaneError(o);
      });
}
