import React from 'react';
import styled from 'styled-components';

import Icon from '@alicloud/console-base-rc-icon';
import CONF_LOCALE, {
  ELanguage
} from '@alicloud/console-base-conf-locale';

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
  return <ScIconHolder>
    <Icon type="logo-aliyun" />
    <Icon type={CONF_LOCALE.LANGUAGE === ELanguage.ZH ? 'logo-aliyun-word-cn' : 'logo-aliyun-word-en'} />
  </ScIconHolder>;
}
