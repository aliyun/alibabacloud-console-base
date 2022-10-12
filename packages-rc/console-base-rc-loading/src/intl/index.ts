import intlFactory from '@alicloud/console-base-intl-factory-basic';

import localesEnUS from './locales/en-us';
import localesZhCN from './locales/zh-cn';
import localesZhTW from './locales/zh-tw';
import localesJaJP from './locales/ja-jp';
import localesFrFr from './locales/fr-fr';
import localesDeDe from './locales/de-de';
import localesKoKr from './locales/ko-kr';

export default intlFactory<typeof localesZhCN>({
  'en-US': localesEnUS,
  'zh-CN': localesZhCN,
  'zh-TW': localesZhTW,
  'ja-JP': localesJaJP,
  'fr-FR': localesFrFr,
  'de-DE': localesDeDe,
  'ko-KR': localesKoKr
});
