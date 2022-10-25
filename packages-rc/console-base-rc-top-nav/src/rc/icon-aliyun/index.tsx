import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';
import CONF_LOCALE, {
  ELanguage
} from '@alicloud/console-base-conf-locale';

import {
  useVisibleLogo
} from '../../model';

const ScIconHolder = styled.span`
  i:nth-child(2) {
    margin-left: 4px;
  }
  
  @media screen and (max-width: 900px) {
    i:nth-child(2) {
      display: none;
    }
  }
`;

export default function IconAliyun(): JSX.Element {
  const visibleLogo = useVisibleLogo();

  return <ScIconHolder>
    <Icon type="logo-aliyun" />
    {visibleLogo ? <Icon type={CONF_LOCALE.LANGUAGE === ELanguage.ZH ? 'logo-aliyun-word-cn' : 'logo-aliyun-word-en'} /> : null}
  </ScIconHolder>;
}
