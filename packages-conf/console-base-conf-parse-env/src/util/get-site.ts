import {
  getCookie
} from '@alicloud/cookie';

import {
  IConfEnv
} from '../types';

export default function getSite(): IConfEnv['SITE'] {
  return getCookie('aliyun_site') as IConfEnv['SITE'] || 'CN'; // CN INTL JP
}
