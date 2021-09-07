import intlFactory from '@alicloud/console-base-intl-factory';

import localesEnUS from './locales/en-us';
import localesZhCN from './locales/zh-cn';
import localesZhTW from './locales/zh-tw';
import localesJaJP from './locales/ja-jp';

export default intlFactory<typeof localesZhCN>({
  'en-US': localesEnUS,
  'zh-CN': localesZhCN,
  'zh-TW': localesZhTW,
  'ja-JP': localesJaJP
});
