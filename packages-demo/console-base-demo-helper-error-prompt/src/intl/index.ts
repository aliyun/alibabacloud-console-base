import intlFactory from '@alicloud/console-base-intl-factory';

import messages from './locales/zh-cn';

export default intlFactory<typeof messages>({
  'en-US': messages,
  'zh-CN': messages
});
