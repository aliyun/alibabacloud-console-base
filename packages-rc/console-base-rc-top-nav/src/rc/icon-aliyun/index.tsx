import React from 'react';

import Icon from '@alicloud/console-base-rc-icon';
import CONF_LOCALE, {
  ELanguage
} from '@alicloud/console-base-conf-locale';

import {
  useVisibleLogo
} from '../../model';

export default function IconAliyun(): JSX.Element {
  const visibleLogo = useVisibleLogo();

  return <>
    <Icon type="logo-aliyun" />
    {visibleLogo ? <Icon type={CONF_LOCALE.LANGUAGE === ELanguage.ZH ? 'logo-aliyun-word-cn' : 'logo-aliyun-word-en'} /> : null}
  </>;
}
