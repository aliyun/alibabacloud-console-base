import {
  isString as _isString
} from 'lodash-es';

import CONF_LOCALE from '@alicloud/console-base-conf-locale';

export default function buildCheckAttributes(arg?: string | Record<string, string>, defaultCheckAttributes?: Record<string, string>): Record<string, string> {
  const o: Record<string, string> = _isString(arg) ? {
    ...defaultCheckAttributes,
    region: arg
  } : {
    ...defaultCheckAttributes,
    ...arg
  };
  
  // 自动添加对 locale 的判断，在 Viper 中约定的自定义属性为 $locale
  o.$locale = CONF_LOCALE.LOCALE;
  
  return o;
}
