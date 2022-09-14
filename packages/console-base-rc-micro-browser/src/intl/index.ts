import intlFactory from '@alicloud/console-base-intl-factory-basic';

import localesEnUS from './locales/en-us';
import localesZhCN from './locales/zh-cn';
import localesZhTW from './locales/zh-tw';

export default intlFactory<typeof localesZhCN>({
  'en-US': localesEnUS,
  'zh-CN': localesZhCN,
  'zh-TW': localesZhTW
});
